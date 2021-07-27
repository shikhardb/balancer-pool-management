export const bsctestnet = {
    "network": "bsctestnet",
    "chainId": 97,
    "defaultPrecision": 2,
    "rpcUrl": "https://data-seed-prebsc-1-s1.binance.org:8545/",
    //"wsUrl": "",
    "subgraphUrl": "https://api.thegraph.com/subgraphs/name/aaron-foster-wallace/balancer-on-bsc-chapel-a1",
    "explorer": "https://testnet.bscscan.com",
    "exchangeUrl": "http://localhost:8081/#/swap",// address of the balancer swap on bsc
    "addresses": {
        //balancer-core\contracts\BFactory.sol	
        "bFactory": "0x38ed75430bed0d6a22f57a5663102ecabb787a7f",
        //bactions-proxy\contracts\BActions.sol
        "bActions": "0x6a443d6f9024e949d233fe799dcf2047d274db5b",
        //Maker:dsProxyRegistry
        //https://docs.makerdao.com/build/dai.js/advanced-configuration/using-ds-proxy
        "dsProxyRegistry": "0x7276c60053131e94c9930998088fe0ec39d07639",
        //balancer-lab\balancer-registry
        "proxy": "0x46C423dBEBF96C9Ed201d497f9A328cD36EA2593",
        //repo: configurable-rights-pool
        "crpFactory": "0x0b2AB7a3db9ad0Ac389bf5987684aEaaf413bf24",
        //WBNB
        "weth": "0xae13d989dac2f0debff460ac112a837c89baa7cd",
        /**
         * Only V2:
         *  */
        //balancer-core-v2\pkg\core\contracts\vault\Vault.sol
        "vault": "0x0",

        //multicall.sol A general usage library included on  balancer-core-v2	
        "multicall": "0xae11C5B5f29A6a25e955F0CB8ddCc416f522AF5C",
    },
    "connectors": {
        "injected": {
            "id": "injected",
            "name": "MetaMask"
        },
       /* "walletconnect": {
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
        }*/
    }
}
