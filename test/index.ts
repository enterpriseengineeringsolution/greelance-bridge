import { deployments, ethers } from 'hardhat'

import type { BridgeAssist, Greelance } from '@/typechain'

export const useContracts = async () => {
  return {
    token: await ethers.getContract<Greelance>('Token'),
    bridge: await ethers.getContract<BridgeAssist>('BridgeAssist'),
  }
}

export const deploy = deployments.createFixture(async () => {
  await deployments.fixture(undefined, { keepExistingDeployments: true })
  return useContracts()
})
