# EtherSneakers Marketplace 😺

### Functionalities

- [x] New Listed Sneakers
- [x] Mint your collection
- [x] Buy Sneaker
- [x] Resell Sneakers
- [x] Purchased Sneakers

### Stack

- Language : [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- Frontend : [Next Js](https://nextjs.org/)
- Smart Contract Lang : [Solidity](https://docs.soliditylang.org/en/v0.8.17/)
- Dev Environment for ETH Software: [Hardhat](https://hardhat.org/)
- File Storage : [Arweave](https://www.arweave.org/)
- Scaling Permenant Storage - [Bundlr](https://bundlr.network/)
- Network : [Polygon Mumbai](https://polygon.technology/)
- Fonts - [Google Fonts](https://fonts.google.com/)
- Style : [Tailwind CSS](https://tailwindcss.com/)
- Toast: [React Toastify](https://fkhadra.github.io/react-toastify/introduction/)
- Design : [Figma](https://www.figma.com/)

### Installation

#### Fork The Repo

Click on the Right Side of the Top Bar to After the Watch button. <img src="https://upload.wikimedia.org/wikipedia/commons/3/38/GitHub_Fork_Button.png" width="120px" />

Now It will be available in GitHub Account.

#### OR

#### Clone

- Clone this repo with url

```shell
git clone https://github.com/axnuzzz/EtherSneakers
```

##### Setup

> Install npm dependencies using npm install

```shell
cd ethersneakers && npm install
```

> Set up environment Variables I already Provided .env.example file.

> Create a .env file in the root directory.

> Set up required environment variables.

```.env
URL="TESTNET_URI"
PRIVATE_KEY="METAMASK_PRIVATE_KEY"
NEXT_PUBLIC_RPC_URL="TESTNET_URI"
NEXT_PUBLIC_CONTRACT_ADDRESS="CONTRACT_ADDRESS"
```

> In the Root Directory First Compile Your Smart Contract with This Following Command.

```shell
npx hardhat compile
```

> After Deploy Smart Contract to a testnet with this command.

```shell
npx hardhat run scripts/deploy.js --network ${testnet name}
```

> Copy Smart Contract Address and replace it in with your "CONTRACT_ADDRESS"

```
NEXT_PUBLIC_CONTRACT_ADDRESS="CONTRACT_ADDRESS"
```

Let's Run this command for dev

```shell
npm run dev
--or--
yarn dev
```
