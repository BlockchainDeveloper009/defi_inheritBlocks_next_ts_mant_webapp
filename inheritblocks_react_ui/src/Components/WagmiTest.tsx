import { WagmiConfig , useAccount, useConnect, useEnsName } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { createClient, configureChains, mainnet, goerli  } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { polygon, polygonMumbai, hardhat, localhost } from 'wagmi/chains'
import { Button } from '@mantine/core'
import Profile from './Profile'

import { alchemyProvider } from 'wagmi/providers/alchemy'
import { infuraProvider } from 'wagmi/providers/infura'
import SendTransaction from './SendTransaction'
import MintNFT from './MintNFT'
//import { logWarn } from './logger'
const yourAlchemyApiKey = 'xx';

const { provider, webSocketProvider } = configureChains(
  [polygon, goerli, polygonMumbai, localhost],
  [
    // priority =0, first rpc provider will be tried, after stallTimeout, will move to next RPC provider
    alchemyProvider({ apiKey: yourAlchemyApiKey, priority: 0, stallTimeout: 1_000 }), 

    infuraProvider({ apiKey: 'yourInfuraApiKey', priority: 1 }),
    publicProvider()],
)
 
const client = createClient({
  provider,
  webSocketProvider,
  
})

function WagmiTest() {


    return (
      <WagmiConfig client={client}>
        <Profile/>
        -------------------

        <SendTransaction />
        -------------------
        <MintNFT/>
        -------------------
       </WagmiConfig>
    );
  }
  
  export default WagmiTest;
  