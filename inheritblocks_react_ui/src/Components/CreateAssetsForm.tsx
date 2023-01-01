import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';

import { useState } from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Button, Box, Code } from '@mantine/core';
import { useContract, useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi'
import {
 
  CreateBondandAdminRole_CONTRACT_ABI,
  CreateBondandAdminRole_CONTRACT_ADDRESS,
} from "../srcConstants";

function CreateAssetsForm() {

  const contract = useContract({
    address: CreateBondandAdminRole_CONTRACT_ADDRESS,
    abi: CreateBondandAdminRole_CONTRACT_ABI,
  })

  const [submittedValues, setSubmittedValues] = useState('');
  const [assetName, setAssetName] = useState('');
  const [Amt, setAmount] = useState(0);

  const form = useForm({
    initialValues: {
      assetName: 'asset',
      Amount: '0',
      a: '-1',
      a1: '-2'
    },

    transformValues: (values) => ({
      AssetName: `${values.assetName}`,
      Amount: Number(values.Amount) || 0,
      Addr: CreateBondandAdminRole_CONTRACT_ADDRESS,
      a: assetName,
      a1: Amt
      
      
    }),
  });
  
  const { 
    config,
    error: prepareError,
    isError: isPrepareError, } = usePrepareContractWrite({
    address: CreateBondandAdminRole_CONTRACT_ADDRESS,
    abi: CreateBondandAdminRole_CONTRACT_ABI,
    functionName: 'createAsset',
    args: [assetName, parseInt(Amt.toString())],
    enabled: Boolean(Amt),
  })
  const { data, write , error, isError } = useContractWrite(config)
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  })
  console.log('(((((((((')
  console.log(data)
  console.log('))))))))))')
  return (
    <Box sx={{ maxWidth: 400 }} mx="auto">
      <form
        onSubmit={form.onSubmit((values) => {

          setSubmittedValues(JSON.stringify(values, null, 2))
          setAssetName(values.AssetName)
          setAmount(values.Amount)
          write?.();
          
        })}
      >
        <TextInput
          label="Asset name"
          placeholder="Asset name"
          {...form.getInputProps('assetName')}
        />
       
        <TextInput
          type="number"
          label="Amount"
          placeholder="Amt"
          mt="md"
          {...form.getInputProps('Amount')}
        />


        <Button type="submit" mt="md">
          Submit
        </Button>
        {isSuccess && (
        <div>
          Successfully created Asset, check here!!
          <div>
            <a href={`https://mumbai.polygonscan.com/tx/${data?.hash}`}>Polygon Scan</a>
          </div>
          <div>
            <a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
          </div>
          
        </div>
      )}

{(isPrepareError || isError) && (
        <div>Error: {(prepareError || error)?.message}</div>
      )}
      </form>

      {submittedValues && <Code block>{submittedValues}</Code>}


    </Box>
  );
}

export default CreateAssetsForm;
