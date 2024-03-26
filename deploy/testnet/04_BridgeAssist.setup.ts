import { ethers } from 'hardhat'

import type { BridgeAssist } from '@/typechain'

import { chainIds, safeRead, safeWrite, setup } from '@/gotbit-tools/hardhat'

import deploy_config from '@/deploy_config.json'

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const func = setup('BridgeAssist', async () => {
  let gasUsed = ethers.constants.Zero

  const [deployer] = await ethers.getSigners()
  const bridgeAssist = await ethers.getContract<BridgeAssist>('BridgeAssist')

  const MANAGER_ROLE = await bridgeAssist.MANAGER_ROLE()

  if (!(await bridgeAssist.hasRole(MANAGER_ROLE, deployer.address))) {
    const [, receipt] = await safeWrite(
      bridgeAssist.grantRole(MANAGER_ROLE, deployer.address, {
        gasLimit: '60000',
        ...deploy_config,
      })
    )
    if (!receipt) return
    gasUsed = gasUsed.add(receipt.gasUsed)
  }

  const networkNames: string[] = []
  const networkRates: number[] = []

  async function push(name: string, rate: number) {
    console.log(`Queueing adding chain ${name}...`)
    try {
      await bridgeAssist.callStatic.addChains(
        networkNames.concat([name]),
        networkRates.concat([rate])
      )
    } catch (e) {
      console.error(`Can not add chain ${name}`, e)
      return
    }

    networkNames.push(name)
    networkRates.push(rate)
    console.log('Queued successfully')
  }

  await push('sol.devnet', 9)

  const currentChainId = await ethers.provider.getNetwork().then((n) => n.chainId)
  for (const chainId of [
    43113, // eth
    97, // bsc
    80001, // polygon
  ]) {
    if (chainId == currentChainId) continue

    const name = `evm.${chainId}`
    const rate = 0
    await push(name, rate)
  }

  console.log('Adding chains in 5 seconds...', networkNames)
  await sleep(5000)
  const [, receipt] = await safeWrite(
    bridgeAssist.addChains(networkNames, networkRates, {
      gasLimit: '300000',
      ...deploy_config,
    })
  )
  gasUsed = gasUsed.add(receipt!.gasUsed)

  console.log('gas used: ' + gasUsed.toString())
})
export default func

func.tags = ['BridgeAssist.setup']
func.dependencies = ['BridgeAssist.deploy']
func.runAtTheEnd = true
