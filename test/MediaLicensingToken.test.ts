// import { ethers } from 'hardhat'
// import { deploy, useContracts } from '.'
// import { expect } from 'chai'

// describe('MediaLicensingToken contract', () => {
//   const AMOUNT = 1
//   describe('restriction', () => {
//     beforeEach(async () => await deploy())
//     it('should transfer token', async () => {
//       const [deployer, user] = await ethers.getSigners()
//       const { mltoken } = await useContracts()

//       await mltoken.connect(deployer).transfer(user.address, AMOUNT)
//       await mltoken.connect(user).transfer(deployer.address, AMOUNT)
//     })
//     it('should not transfer token if to is restricted', async () => {
//       const [deployer, user] = await ethers.getSigners()
//       const { mltoken } = await useContracts()

//       await mltoken.connect(deployer).restrictUser(user.address)

//       await expect(mltoken.connect(deployer).transfer(user.address, AMOUNT)).reverted
//     })
//     it('should not transfer token if from is restricted', async () => {
//       const [deployer, user] = await ethers.getSigners()
//       const { mltoken } = await useContracts()

//       await mltoken.connect(deployer).transfer(user.address, AMOUNT)
//       await mltoken.connect(deployer).restrictUser(user.address)
//       await expect(mltoken.connect(user).transfer(deployer.address, AMOUNT)).reverted
//     })
//     it('should transfer token if to is not restricted again', async () => {
//       const [deployer, user] = await ethers.getSigners()
//       const { mltoken } = await useContracts()

//       await mltoken.connect(deployer).restrictUser(user.address)

//       await expect(mltoken.connect(deployer).transfer(user.address, AMOUNT)).reverted
//       await mltoken.connect(deployer).unrestrictUser(user.address)
//       await mltoken.connect(deployer).transfer(user.address, AMOUNT)
//     })
//     it('should not transfer token if from is restricted', async () => {
//       const [deployer, user] = await ethers.getSigners()
//       const { mltoken } = await useContracts()

//       await mltoken.connect(deployer).transfer(user.address, AMOUNT)
//       await mltoken.connect(deployer).restrictUser(user.address)
//       await expect(mltoken.connect(user).transfer(deployer.address, AMOUNT)).reverted
//       await mltoken.connect(deployer).unrestrictUser(user.address)
//       await mltoken.connect(user).transfer(deployer.address, AMOUNT)
//     })
//     it('should deny to restrict user again', async () => {
//       const [deployer, user] = await ethers.getSigners()
//       const { mltoken } = await useContracts()
//       await mltoken.connect(deployer).restrictUser(user.address)
//       await expect(mltoken.connect(deployer).restrictUser(user.address)).reverted
//     })
//     it('should deny to unrestrict user again', async () => {
//       const [deployer, user] = await ethers.getSigners()
//       const { mltoken } = await useContracts()
//       await expect(mltoken.connect(deployer).unrestrictUser(user.address)).reverted
//     })
//     it('should allow to restrict only by owner', async () => {
//       const [deployer, user, user1] = await ethers.getSigners()
//       const { mltoken } = await useContracts()

//       await expect(mltoken.connect(user).restrictUser(user1.address)).reverted
//       expect(await mltoken.restrictedUsers(user1.address)).false
//       await mltoken.connect(deployer).restrictUser(user1.address)
//       expect(await mltoken.restrictedUsers(user1.address)).true
//     })
//     it('should allow to unrestrict only by owner', async () => {
//       const [deployer, user, user1] = await ethers.getSigners()
//       const { mltoken } = await useContracts()

//       await mltoken.connect(deployer).restrictUser(user1.address)
//       expect(await mltoken.restrictedUsers(user1.address)).true

//       await expect(mltoken.connect(user).unrestrictUser(user1.address)).reverted
//       expect(await mltoken.restrictedUsers(user1.address)).true
//       await mltoken.connect(deployer).unrestrictUser(user1.address)
//       expect(await mltoken.restrictedUsers(user1.address)).false
//     })
//   })
// })
