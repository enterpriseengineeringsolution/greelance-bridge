import { ethers } from 'hardhat'
import type { DeployFunction } from 'hardhat-deploy/types'

import { wrapperHRE } from '@/gotbit-tools/hardhat'
import type { WicryptNetworkToken, WicryptNetworkToken__factory } from '@/typechain'

const func: DeployFunction = async (hre) => {
  const { deploy } = wrapperHRE(hre)
  const [deployer] = await ethers.getSigners()

  const txres = await deploy<WicryptNetworkToken__factory>('WicryptNetworkToken', {
    from: deployer.address,
    args: [],
    log: true,
  })

  console.log("Token deploy: " + Number(txres.receipt?.gasUsed))
}
export default func

func.tags = ['Token.deploy']
