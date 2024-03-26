import { ethers } from 'hardhat'
import type { DeployFunction } from 'hardhat-deploy/types'

import { wrapperHRE } from '@/gotbit-tools/hardhat'
import type { Greelance__factory } from '@/typechain'

import deploy_config from '@/deploy_config.json'

const func: DeployFunction = async (hre) => {
  const { deploy } = wrapperHRE(hre)
  const [deployer] = await ethers.getSigners()

  const txres = await deploy<Greelance__factory>('Token', {
    contract: 'Greelance',
    from: deployer.address,
    args: ['0x3D606153050198ECE0B9CB7998Ac94da05ac80a7'],
    log: true,
    ...deploy_config,
  })

  console.log('Token deploy: ' + Number(txres.receipt?.gasUsed))
}
export default func

func.tags = ['Token.deploy']
