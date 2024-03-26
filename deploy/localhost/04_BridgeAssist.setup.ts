import { ethers } from 'hardhat'

import type { BridgeAssist } from '@/typechain'

import { chainIds, safeRead, safeWrite, setup } from '@/gotbit-tools/hardhat'

const func = setup('BridgeAssist', async () => {
  const [deployer] = await ethers.getSigners()
  const bridgeAssist = await ethers.getContract<BridgeAssist>('BridgeAssist')
  const targetChainIds = [chainIds.arbitrum_mainnet, chainIds.polygon_mainnet]

  const MANAGER_ROLE = await safeRead(bridgeAssist.MANAGER_ROLE(), '')

  const [, txr] = await safeWrite(bridgeAssist.connect(deployer).grantRole(MANAGER_ROLE, deployer.address))

  let gas = 0

  const currentChainId = await ethers.provider.getNetwork().then((n) => n.chainId)
  for (const chainId of targetChainIds) {
    if (chainId == currentChainId) continue
    const [, res] = await safeWrite(bridgeAssist.addChains([`evm.${chainId}`], [0]))
    if (res !== null) gas += res.gasUsed.toNumber()
  }

  console.log('Bridge setup gas used', txr!.gasUsed.toNumber() + gas)
})
export default func

func.tags = ['BridgeAssist.setup']
func.dependencies = ['BridgeAssist.deploy']
func.runAtTheEnd = true
