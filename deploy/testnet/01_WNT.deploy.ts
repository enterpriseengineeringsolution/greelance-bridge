import { ethers } from 'hardhat'
import type { DeployFunction } from 'hardhat-deploy/types'

import { wrapperHRE } from '@/gotbit-tools/hardhat'
import type { GRL__factory } from '@/typechain'

import deploy_config from '@/deploy_config.json'

const func: DeployFunction = async (hre) => {
  const { deploy } = wrapperHRE(hre)
  const [deployer] = await ethers.getSigners()

  const txres = await deploy<GRL__factory>('Token', {
    contract: 'GRL',
    from: deployer.address,
    args: [],
    log: true,
    gasLimit: '700000',
    ...deploy_config,
  })

  console.log('Token deploy: ' + Number(txres.receipt?.gasUsed))
}
export default func

func.tags = ['Token.deploy']
