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
import { useContract, 
  useContractRead, useContractWrite,
   usePrepareContractWrite, useWaitForTransaction } from 'wagmi'
//import { logWarn } from './logger'

import {
 
  CreateBondandAdminRole_CONTRACT_ABI,
  CreateBondandAdminRole_CONTRACT_ADDRESS,
} from "../srcConstants";
import { useLocation } from "react-router-dom";

const yourAlchemyApiKey = '3b2s_ycI-VRJbbV-stREOv_x1w3XC5LQ';

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

function WillsFormEdit() {
  const { address, connector, isConnected } = useAccount()
  console.log('===RedeemButton0000000000000000000000====')
  const location = useLocation();
  // const { assetId } = location.state || { assId: "none" };
  let userId = location.state.userId.toString();
  console.log(userId);
  console.log('================')
  

  const { 
    config,
    error: prepareError,
    isError: isPrepareError, } = usePrepareContractWrite({
    address: CreateBondandAdminRole_CONTRACT_ADDRESS,
    abi: CreateBondandAdminRole_CONTRACT_ABI,
    functionName: 'settleAssets',
    args: [userId],
    enabled: Boolean(userId),
  })
  console.log('===RedeemButton====')
  const { data, write , error, isError } = useContractWrite(config)

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  })
  console.log(data)
  console.log(error)
  console.log(isSuccess)
  console.log('================')
    return (
      <WagmiConfig client={client}>
        ------------------
     
        -------------------
      
         {isSuccess && (
                          <div>
                            Successfully created Will, check here!!
                            <div>
                              <a href={`https://mumbai.polygonscan.com/tx/${data?.hash}`}>Polygon Scan</a>
                            </div>
                            <div>
                              <a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
                            </div>
                            
                          </div>
                    )
                  }

                {(isPrepareError || isError) && (
                  <div>Error: {(prepareError || error)?.message}</div>
                )}

        ------------------
       </WagmiConfig>


    );
  }
  
  export default WillsFormEdit;
  