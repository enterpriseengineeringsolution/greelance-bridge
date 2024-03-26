import { ethers } from 'hardhat'
import { expect } from 'chai'

import { deploy, useContracts } from '@/test'
import { BigNumber, BigNumberish } from 'ethers'
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'
import { BridgeAssist__factory } from '@/typechain'

describe.only('Greelance otken contract', () => {
  beforeEach(async () => {
    await deploy()
  })
  it('constructor requires', async function () {
    const [deployer, user1, user2] = await ethers.getSigners()
    const { token, bridge } = await useContracts()
    await token.setSellTaxPercentage(20)

    const taxCollector = await token.taxCollector()
    console.log('a', await token.owner(), deployer.address)
    await bridge.withdraw(token.address, deployer.address, 1000)
    await token.transfer(user1.address, 1000)
    expect(await token.balanceOf(taxCollector)).to.be.eq(0)

    console.log('b')
    await token.connect(user1).transfer(user2.address, 1000)
    expect(await token.balanceOf(taxCollector)).to.be.eq(200)
  })
})
