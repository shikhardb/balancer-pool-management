export const bsc = {
  "network": "bsc",
  "chainId": 56,
  "defaultPrecision": 2,
  "rpcUrl": "https://bsc-dataseed.binance.org/",
  /**
   * Binance notes on WS Node: provided by community with no quality promised, building your node should be always the long term goal
   * wss://bsc-ws-node.nariox.org:443
   * (Shouldn't be use i tho) 
   */
  //"wsUrl": "wss://bsc-ws-node.nariox.org:443",
  "subgraphUrl": "https://thegraph.com/explorer/subgraph/aaron-foster-wallace/balancer-on-bsc",


  "explorer": "https://rpc-mainnet.maticvigil.com/",
  "exchangeUrl": "https://pancakeswap.exchange/",
  "addresses": {
 	  //balancer-core\contracts\BFactory.sol	
    "bFactory": "0x1146a66b9f26069e5c8ad88679de6d0a1611c27b",
    //bactions-proxy\contracts\BActions.sol
    "bActions": "0x372d3737ef5b78602ac6c25b6592916ebeb0ccef",
    //Maker:dsProxyRegistry
    //https://docs.makerdao.com/build/dai.js/advanced-configuration/using-ds-proxy
    //"DSFactory: 0x4868dfd7334503918bc2c568436a1cdef5c171ed"

    "dsProxyRegistry": "0xd755208726d3c886266218f3ef39002bb4f08ba5",
    //balancer-lab\balancer-registry
    "proxy": "0x4cf3217b505d63492cd33BEE77F6061836B776b9",
    //repo: configurable-rights-pool
    //BalancerSafeMath 0x3b41550286fd645d55f8931bb57da24cac293dc0
    //RightsManager: 0xd528c37f8a1e54e5624e3e0c3c96d03fa88f6d99
    //SmartPoolManager: 0x5c38f83e8ffcab9b0657b9f93d648da247e164a9

    "crpFactory": "0x0E10C73a474d847E57a003fc389190DeB55880ae",
    //WBNB
    "weth": "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    /**
     * Only V2:
     *  */
    //balancer-core-v2\pkg\core\contracts\vault\Vault.sol
    "vault": "0x0",

    //multicall.sol A general usage library included on  balancer-core-v2	
    "multicall": "0x41263cba59eb80dc200f3e2544eda4ed6a90e76c",
  },
  "connectors": {
    "injected": {
      "id": "injected",
      "name": "MetaMask"
    },
    "walletconnect": {
      "id": "walletconnect",
      "name": "WalletConnect",
      "options": {
        "rpc": {
          "1": "https://cloudflare-eth.com"
        }
      }
    },
    "portis": {
      "id": "portis",
      "name": "Portis",
      "options": {
        "network": "mainnet",
        "dappId": "3f1c3cfc-7dd5-4e8a-aa03-71ff7396d9fe"
      }
    },
    "walletlink": {
      "id": "walletlink",
      "name": "Coinbase",
      "options": {
        "appName": "Pool management - Balancer",
        "darkMode": true,
        "chainId": 1,
        "ethJsonrpcUrl": "https://cloudflare-eth.com"
      }
    },
    "fortmatic": {
      "id": "fortmatic",
      "name": "Fortmatic",
      "options": {
        "apiKey": "pk_live_9CE8FD92E54684ED"
      }
    }
  }
}


