import { ChainId, ChainKey, CoinKey, findDefaultToken, Token } from '@lifinance/sdk'

export const defaultTokens: { [ChainKey: string]: Array<Token> } = {
  [ChainKey.ETH]: [
    findDefaultToken(CoinKey.ETH, ChainId.ETH),
    findDefaultToken(CoinKey.USDC, ChainId.ETH),
    findDefaultToken(CoinKey.USDT, ChainId.ETH),
    findDefaultToken(CoinKey.MATIC, ChainId.ETH),
    findDefaultToken(CoinKey.WBTC, ChainId.ETH),

    // Partners
    // > MAGIC: https://etherscan.io/token/0xb0c7a3ba49c7a6eaba6cd4a96c55a1391070ac9a
    {
      address: '0xb0c7a3ba49c7a6eaba6cd4a96c55a1391070ac9a',
      chainId: ChainId.ETH,
      decimals: 18,
      logoURI:
        'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/arbitrum/assets/0x539bdE0d7Dbd336b79148AA742883198BBF60342/logo.png',
      name: 'MAGIC',
      symbol: 'MAGIC',
    },
    // > METIS: https://etherscan.io/token/0x9e32b13ce7f2e80a01932b42553652e053d6ed8e
    {
      address: '0x9e32b13ce7f2e80a01932b42553652e053d6ed8e',
      chainId: ChainId.ETH,
      decimals: 18,
      logoURI: 'https://assets.coingecko.com/coins/images/15595/small/metis.PNG',
      name: 'Metis Token',
      symbol: 'Metis',
    },
  ],
  [ChainKey.BSC]: [
    findDefaultToken(CoinKey.BNB, ChainId.BSC),
    findDefaultToken(CoinKey.USDC, ChainId.BSC),
    findDefaultToken(CoinKey.USDT, ChainId.BSC),
    findDefaultToken(CoinKey.DAI, ChainId.BSC),
    // findDefaultToken(CoinKey.WBTC, ChainId.BSC),

    // Partners
    // > METIS: https://bscscan.com/token/0xe552fb52a4f19e44ef5a967632dbc320b0820639
    {
      address: '0xe552fb52a4f19e44ef5a967632dbc320b0820639',
      chainId: ChainId.BSC,
      decimals: 18,
      logoURI: 'https://assets.coingecko.com/coins/images/15595/small/metis.PNG',
      name: 'Metis Token',
      symbol: 'Metis',
    },
  ],
  [ChainKey.POL]: [
    findDefaultToken(CoinKey.MATIC, ChainId.POL),
    findDefaultToken(CoinKey.USDC, ChainId.POL),
    findDefaultToken(CoinKey.USDT, ChainId.POL),
    findDefaultToken(CoinKey.DAI, ChainId.POL),
    findDefaultToken(CoinKey.WBTC, ChainId.POL),

    // Partners
    // > MIVA:
    {
      name: 'Minerva Wallet SuperToken',
      symbol: 'MIVA',
      coinKey: 'MIVA' as CoinKey,
      decimals: 18,
      chainId: ChainId.POL,
      logoURI: 'https://minerva.digital/i/MIVA-Token_200x200.png',
      address: '0xc0b2983a17573660053beeed6fdb1053107cf387',
    },
    {
      name: 'Own a fraction',
      symbol: 'FRACTION',
      coinKey: 'FRACTION' as CoinKey,
      decimals: 18,
      chainId: ChainId.POL,
      logoURI: 'https://assets.coingecko.com/coins/images/15099/large/fraction.png?1619691519',
      address: '0xbd80cfa9d93a87d1bb895f810ea348e496611cd4',
    },
    // RAIDER
    {
      name: 'Crypto Raiders',
      symbol: 'RAIDER',
      coinKey: 'RAIDER' as CoinKey,
      decimals: 18,
      chainId: ChainId.POL,
      logoURI: 'https://assets.coingecko.com/coins/images/17638/small/Ue3Hfh8.png?1630737936',
      address: '0xcd7361ac3307d1c5a46b63086a90742ff44c63b3',
    },
  ],
  [ChainKey.DAI]: [
    findDefaultToken(CoinKey.DAI, ChainId.DAI),
    findDefaultToken(CoinKey.USDC, ChainId.DAI),
    findDefaultToken(CoinKey.USDT, ChainId.DAI),
    findDefaultToken(CoinKey.MATIC, ChainId.DAI),
    findDefaultToken(CoinKey.WBTC, ChainId.DAI),

    // Partners
    // > MIVA:
    {
      name: 'Minerva Wallet SuperToken',
      symbol: 'MIVA',
      coinKey: 'MIVA' as CoinKey,
      decimals: 18,
      chainId: ChainId.DAI,
      logoURI: 'https://minerva.digital/i/MIVA-Token_200x200.png',
      address: '0x63e62989d9eb2d37dfdb1f93a22f063635b07d51',
    },
    {
      name: 'Own a fraction',
      symbol: 'FRACTION',
      coinKey: 'FRACTION' as CoinKey,
      decimals: 18,
      chainId: ChainId.DAI,
      logoURI: 'https://assets.coingecko.com/coins/images/15099/large/fraction.png?1619691519',
      address: '0x2bf2ba13735160624a0feae98f6ac8f70885ea61',
    },
  ],
  [ChainKey.FTM]: [
    findDefaultToken(CoinKey.FTM, ChainId.FTM),
    findDefaultToken(CoinKey.USDC, ChainId.FTM),
    findDefaultToken(CoinKey.USDT, ChainId.FTM),
    findDefaultToken(CoinKey.DAI, ChainId.FTM),
    findDefaultToken(CoinKey.WBTC, ChainId.FTM),
  ],
  [ChainKey.ARB]: [
    findDefaultToken(CoinKey.ETH, ChainId.ARB),
    findDefaultToken(CoinKey.USDC, ChainId.ARB),
    findDefaultToken(CoinKey.USDT, ChainId.ARB),
    findDefaultToken(CoinKey.DAI, ChainId.ARB),
    findDefaultToken(CoinKey.WBTC, ChainId.ARB),

    // Partners
    // > MAGIC
    {
      address: '0x539bdE0d7Dbd336b79148AA742883198BBF60342',
      chainId: ChainId.ARB,
      decimals: 18,
      logoURI:
        'https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/arbitrum/assets/0x539bdE0d7Dbd336b79148AA742883198BBF60342/logo.png',
      name: 'MAGIC',
      symbol: 'MAGIC',
    },
  ],
  [ChainKey.OPT]: [
    findDefaultToken(CoinKey.ETH, ChainId.OPT),
    findDefaultToken(CoinKey.USDC, ChainId.OPT),
    findDefaultToken(CoinKey.USDT, ChainId.OPT),
    findDefaultToken(CoinKey.DAI, ChainId.OPT),
    findDefaultToken(CoinKey.WBTC, ChainId.OPT),
  ],
  [ChainKey.ONE]: [
    findDefaultToken(CoinKey.ONE, ChainId.ONE),
    findDefaultToken(CoinKey.BNB, ChainId.ONE),
    findDefaultToken(CoinKey.ETH, ChainId.ONE),
    findDefaultToken(CoinKey.WBTC, ChainId.ONE),
  ],
  [ChainKey.AVA]: [
    findDefaultToken(CoinKey.AVAX, ChainId.AVA),
    findDefaultToken(CoinKey.USDC, ChainId.AVA),
    findDefaultToken(CoinKey.USDT, ChainId.AVA),
    findDefaultToken(CoinKey.DAI, ChainId.AVA),
    findDefaultToken(CoinKey.WBTC, ChainId.AVA),
  ],
  [ChainKey.MOR]: [
    findDefaultToken(CoinKey.MOVR, ChainId.MOR),
    findDefaultToken(CoinKey.USDC, ChainId.MOR),
    findDefaultToken(CoinKey.USDT, ChainId.MOR),
    // findDefaultToken(CoinKey.WBTC, ChainId.MOR),
  ],
  [ChainKey.OKT]: [
    findDefaultToken(CoinKey.OKT, ChainId.OKT),
    findDefaultToken(CoinKey.USDC, ChainId.OKT),
    findDefaultToken(CoinKey.USDT, ChainId.OKT),
  ],
  [ChainKey.HEC]: [
    findDefaultToken(CoinKey.HT, ChainId.HEC),
    findDefaultToken(CoinKey.USDC, ChainId.HEC),
    findDefaultToken(CoinKey.USDT, ChainId.HEC),
  ],

  // Testnet
  [ChainKey.GOR]: [
    findDefaultToken(CoinKey.ETH, ChainId.GOR),
    findDefaultToken(CoinKey.TEST, ChainId.GOR),
    findDefaultToken(CoinKey.USDC, ChainId.GOR),
    // findDefaultToken(CoinKey.USDT, ChainId.GOR),
    findDefaultToken(CoinKey.DAI, ChainId.GOR),
  ],
  [ChainKey.RIN]: [
    findDefaultToken(CoinKey.ETH, ChainId.RIN),
    findDefaultToken(CoinKey.TEST, ChainId.RIN),
    findDefaultToken(CoinKey.USDC, ChainId.RIN),
    findDefaultToken(CoinKey.USDT, ChainId.RIN),
    findDefaultToken(CoinKey.DAI, ChainId.RIN),
  ],
  [ChainKey.ROP]: [
    findDefaultToken(CoinKey.ETH, ChainId.ROP),
    findDefaultToken(CoinKey.TEST, ChainId.ROP),
    findDefaultToken(CoinKey.USDC, ChainId.ROP),
    findDefaultToken(CoinKey.USDT, ChainId.ROP),
    findDefaultToken(CoinKey.DAI, ChainId.ROP),
  ],
  [ChainKey.KOV]: [findDefaultToken(CoinKey.ETH, ChainId.KOV)],
  [ChainKey.MUM]: [
    findDefaultToken(CoinKey.MATIC, ChainId.MUM),
    findDefaultToken(CoinKey.TEST, ChainId.MUM),
    findDefaultToken(CoinKey.USDC, ChainId.MUM),
    // findDefaultToken(CoinKey.USDT, ChainId.MUM),
    findDefaultToken(CoinKey.DAI, ChainId.MUM),
  ],
  [ChainKey.BSCT]: [findDefaultToken(CoinKey.BNB, ChainId.BSCT)],
  [ChainKey.ONET]: [
    findDefaultToken(CoinKey.ONE, ChainId.ONET),
    findDefaultToken(CoinKey.ETH, ChainId.ONET),
    findDefaultToken(CoinKey.BNB, ChainId.ONET),
  ],
}
