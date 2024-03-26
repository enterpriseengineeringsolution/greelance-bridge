import { ethers } from 'hardhat'
import type { DeployFunction } from 'hardhat-deploy/types'

import { wrapperHRE } from '@/gotbit-tools/hardhat'
import type { BridgeAssist__factory, GRL } from '@/typechain'

import config from '@/config.json'
import deploy_config from '@/deploy_config.json'

const func: DeployFunction = async (hre) => {
  const { deploy } = wrapperHRE(hre)
  const [deployer] = await ethers.getSigners()
  const network = config.testnet

  const token = await ethers.getContract<GRL>('Token')

  const txres = await deploy<BridgeAssist__factory>('BridgeAssist', {
    from: deployer.address,
    args: [
      token.address,
      ethers.constants.MaxUint256,
      network.feeWallet,
      network.feeSend,
      network.feeFulfill,
      deployer.address,
      [network.relayer],
      1,
    ],
    log: true,
    gasLimit: 4_000_000,
    ...deploy_config,
  })

  console.log('Bridge deploy: ' + Number(txres.receipt?.gasUsed))
}
export default func

func.tags = ['BridgeAssist.deploy']
func.dependencies = ['Token.deploy']
