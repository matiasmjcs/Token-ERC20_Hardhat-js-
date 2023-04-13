const { expect } = require("chai");
const hre = require("hardhat");

describe("token", function () {
  let token;

  before(async function () {
    const Token = await ethers.getContractFactory("Totolino");
    token = await Token.deploy();
  });

  it("comprobar que se desplego el smart contract correctamente", async () => {
    expect(token.address).to.not.be.undefined;
  });

  it("ejecutar function mint correctamente", async () => {
    const amount = 150;
    const tx = await token.mint(token.owner(), amount);
    await tx.wait();
    const balance = await token.balanceOf(await token.owner());
    const balanceFormat = hre.ethers.utils.formatEther(balance);
    expect(amount).to.equal(Math.floor(balanceFormat));
  });

  it("transferir token", async () => {
    const [owner, Account] = await ethers.getSigners();
    const amount = 550;
    const amountTx = 40;

    const tx = await token.mint(token.owner(), amount);
    await tx.wait();

    const balanceowner = await token.balanceOf(await owner.address);
    const balanceaccount = await token.balanceOf(await Account.address);
    const balanceOFormat = await hre.ethers.utils.formatEther(balanceowner);
    const balanceAFormat = await hre.ethers.utils.formatEther(balanceaccount);

    await token.approvar(await owner.address, amount);
    const transfer = await token.transferir(
      await owner.address,
      await Account.address,
      amountTx
    );
    await transfer.wait();

    const balanceOwner2 = await token.balanceOf(await owner.address);
    const balanceaccount2 = await token.balanceOf(await Account.address);

    const balanceOFormat2 = await hre.ethers.utils.formatEther(balanceOwner2);
    const balanceAFormat2 = await hre.ethers.utils.formatEther(balanceaccount2);

    expect(Math.floor(balanceOFormat2)).to.equal(
      Math.floor(balanceOFormat) - amountTx
    );
    expect(Math.floor(balanceAFormat2)).to.equal(
      Math.floor(balanceAFormat) + amountTx
    );
  });
});
