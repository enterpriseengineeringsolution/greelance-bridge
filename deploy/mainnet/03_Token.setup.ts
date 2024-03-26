import { ethers } from 'hardhat'

import type { BridgeAssist, Greelance } from '@/typechain'

import { safeRead, safeWrite, setup } from '@/gotbit-tools/hardhat'

import deploy_config from '@/deploy_config.json'

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const func = setup('Token', async () => {
  const [deployer] = await ethers.getSigners()
  const token = await ethers.getContract<Greelance>('Token')
  const bridgeAssist = await ethers.getContract<BridgeAssist>('BridgeAssist')

  let gasUsed = ethers.constants.Zero

  {
    const [, txr] = await safeWrite(token.connect(deployer).enableTrading())
    gasUsed = gasUsed.add(txr!.gasUsed)
  }

  {
    const [, txr] = await safeWrite(token.connect(deployer).mint())

    gasUsed = gasUsed.add(txr!.gasUsed)
  }

  {
    const [, txr] = await safeWrite(
      token.connect(deployer).excludeFromFees(bridgeAssist.address)
    )
    gasUsed = gasUsed.add(txr!.gasUsed)
  }

  {
    const owner = '0x3D606153050198ECE0B9CB7998Ac94da05ac80a7'
    const [, txr] = await safeWrite(token.connect(deployer).excludeFromFees(owner))
    gasUsed = gasUsed.add(txr!.gasUsed)
  }

  {
    const [, txr] = await safeWrite(
      token
        .connect(deployer)
        .transfer(
          bridgeAssist.address,
          '2_000_000_000'.toBigNumber(await token.decimals()),
          deploy_config
        )
    )

    gasUsed = gasUsed.add(txr!.gasUsed)
  }

  {
    const [, txr] = await safeWrite(
      token.connect(deployer).includeFromFees(deployer.address)
    )
    gasUsed = gasUsed.add(txr!.gasUsed)
  }

  console.log('gas used: ' + gasUsed.toString())
})
export default func

func.tags = ['Token.setup']
func.dependencies = ['Token.deploy', 'BridgeAssist.deploy']
func.runAtTheEnd = true
