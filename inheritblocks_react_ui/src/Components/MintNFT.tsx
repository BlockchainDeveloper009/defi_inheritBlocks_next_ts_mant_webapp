import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';

import * as React from 'react'
import { usePrepareContractWrite, useContractWrite, useWaitForTransaction } from 'wagmi'

function MintNFT() {
  const { config,
    error: prepareError,
    isError: isPrepareError, } = usePrepareContractWrite({
    address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
    abi: [
      {
        name: 'mint',
        type: 'function',
        stateMutability: 'nonpayable',
        inputs: [],
        outputs: [],
      },
    ],
    functionName: 'mint',
  })
  const { data, error,  isError, write } = useContractWrite(config)
 
  const { isLoading, isSuccess} = useWaitForTransaction({
    hash: data?.hash,
  })
 

  return (
    <div>
    <button disabled={!write || isLoading} onClick={() => write}>
      {isLoading ? 'Minting...' : 'Mint'}
    </button>
    {isSuccess && (
      <div>
        Successfully minted your NFT!
        <div>
          <a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
        </div>
      </div>
    )}
    {(isPrepareError || isError) && (
      <div>Error: {(prepareError || error)?.message}</div>
    )}
  </div>
  );
}

export default MintNFT;
