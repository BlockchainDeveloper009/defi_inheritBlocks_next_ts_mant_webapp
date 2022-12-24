import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';
import * as React from 'react'
import { usePrepareContractWrite } from 'wagmi'
import { useDebounce } from './useDebounce'

function MintNFTForm() {
  
  const [tokenId, setTokenId] = React.useState('')
  const debouncedTokenId = useDebounce(tokenId, 500)
  const { config } = usePrepareContractWrite({
    address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
    abi: [
      {
        name: 'mint',
        type: 'function',
        stateMutability: 'nonpayable',
        inputs: [{ internalType: 'uint32', name: 'tokenId', type: 'uint32' }],
        outputs: [],
      },
    ],
    functionName: 'mint',
    args: [parseInt(tokenId)],
    enabled: Boolean(tokenId),
  })

  return (
    <form>
    <label >Token ID</label>
    <input
      id="tokenId"
      onChange={(e) => setTokenId(e.target.value)}
      placeholder="420"
      value={tokenId}
    />
    <button>Mint</button>
  </form>
  );
}

export default MintNFTForm;
