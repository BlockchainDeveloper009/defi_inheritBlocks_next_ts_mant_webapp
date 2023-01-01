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

function CreateWillsForm() {


   const [assetId, setAssetId] = useState('');
  const [willStartDate, setWillStartDate] = useState('');
  const [willEndDate, setWillEndDate] = useState('');
  const [benefitorAddr, setbenefitorAddr] = useState('');


  const [submittedValues, setSubmittedValues] = useState('');

  const form = useForm({
    initialValues: {
      willStartDate: '',
      willEndDate: '',
      Benefitor: '0x',
      AssetId: '1'
    },

    transformValues: (values) => ({
      AssetId: `${values.AssetId}`,
      willStartDate: `${values.willStartDate}`,
      willEndDate: `${values.willEndDate}`,
      Benefitor: `${values.Benefitor}`,
    }),
  });

   const { 
    config,
    error: prepareError,
    isError: isPrepareError, } = usePrepareContractWrite({
    address: CreateBondandAdminRole_CONTRACT_ADDRESS,
    abi: CreateBondandAdminRole_CONTRACT_ABI,
    functionName: 'a_createCryptoVault',
    args: [assetId, willStartDate,willEndDate,benefitorAddr],
    enabled: Boolean(assetId),
  })
  const { data, write , error, isError } = useContractWrite(config)
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  })

  return (
    <Box sx={{ maxWidth: 400 }} mx="auto">
      <form
        onSubmit={form.onSubmit((values) => {
          setSubmittedValues(JSON.stringify(values, null, 2))
          setAssetId(values.AssetId)
          setWillStartDate(values.willStartDate)
          setWillEndDate(values.willEndDate)
          setbenefitorAddr(values.Benefitor)
          write?.();

        })}
      >

        <TextInput
          
          label="AssetId"
          placeholder="AssetId"
          mt="md"
          {...form.getInputProps('AssetId')}
        />
        <TextInput
          label="Will Start Date"
          placeholder="MM-DD-YYYY"
          {...form.getInputProps('willStartDate')}
        />
        <TextInput
          label="Will End Date"
          placeholder="MM-DD-YYYY"
          {...form.getInputProps('willEndDate')}
        />
        <TextInput
          
          label="Benefitor"
          placeholder="0x Address"
          mt="md"
          {...form.getInputProps('Benefitor')}
        />

        <Button type="submit" mt="md">
          Submit
        </Button>
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
      )}

      {(isPrepareError || isError) && (
        <div>Error: {(prepareError || error)?.message}</div>
      )}

      </form>

      {submittedValues && <Code block>{submittedValues}</Code>}
    </Box>
  );
}

export default CreateWillsForm;
