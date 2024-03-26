import { ethers } from 'hardhat'

import type { BridgeAssist, GRL } from '@/typechain'

import { safeRead, safeWrite, setup } from '@/gotbit-tools/hardhat'

import deploy_config from '@/deploy_config.json'

const func = setup('Token', async () => {
  const [deployer] = await ethers.getSigners()
  const token = await ethers.getContract<GRL>('Token')
  const bridgeAssist = await ethers.getContract<BridgeAssist>('BridgeAssist')

  const [, txr] = await safeWrite(
    token
      .connect(deployer)
      .transfer(bridgeAssist.address, '2_000_000_000'.toBigNumber(), {
        gasLimit: '60000',
        ...deploy_config,
      })
  )

  console.log('gas used: ' + txr!.gasUsed.toString())
})
export default func

func.tags = ['Token.setup']
func.dependencies = ['Token.deploy', 'BridgeAssist.deploy']
func.runAtTheEnd = true
