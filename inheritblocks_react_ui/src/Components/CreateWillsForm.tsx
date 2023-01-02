import { ActionIcon, Loader, Select, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';

import { useState } from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Button, Box, Code } from '@mantine/core';

import { useAccount, useContract, useContractRead, useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi'
import {
 
  CreateBondandAdminRole_CONTRACT_ABI,
  CreateBondandAdminRole_CONTRACT_ADDRESS,
} from "../srcConstants";

function GetAllAssets(stttt:any):[] {
  const { data,status} = useContractRead({
    address: CreateBondandAdminRole_CONTRACT_ADDRESS,
    abi: CreateBondandAdminRole_CONTRACT_ABI,
    functionName: 'getAllAsset',
    
  })
  console.log('---------')
  console.log(data)
  console.log('----getAllAssets-----')
  console.log(stttt)
  console.log('---------')
  return data;
}
function GetWillsByUsers(stttt:any) {
  const { data,status} = useContractRead({
    address: CreateBondandAdminRole_CONTRACT_ADDRESS,
    abi: CreateBondandAdminRole_CONTRACT_ABI,
    functionName: 'getUserCreatedBonds',
    args: [stttt]
    
  })
  console.log('---------')
  
  console.log('---getUserCreatedBonds-----')
  console.log(data)
  console.log('---------')
  return data;
}
function CreateWillsForm() {

  
  const { address, connector, isConnected } = useAccount()
  const [assetId, setAssetId] = useState<string|null>(null);
  const [willStartDate, setWillStartDate] = useState('');
  const [willEndDate, setWillEndDate] = useState('');
  const [benefitorAddr, setbenefitorAddr] = useState('');


  const [submittedValues, setSubmittedValues] = useState('');
  

  const assetIds = async () => {
    console.log(assetIds)
  }
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
  // const { data:Result, error:Error ,isError:boolean, status} = useContractRead({
  //   address: CreateBondandAdminRole_CONTRACT_ADDRESS,
  //   abi: CreateBondandAdminRole_CONTRACT_ABI,
  //   functionName: 'checkAssetisAvailable',
  //   args: [assetId],
  // })

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
  let assets =[] 
  assets = GetAllAssets(address)
  const wills = GetWillsByUsers(address)
  const willDatas = Array(50).fill(0).map((_, index) => `Item ${index}`);
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
          withAsterisk
          {...form.getInputProps('AssetId')}
          // rightSection={<Loader size="xs" />}
          
          // onBlur={(event) => ValidateUserAssetId(event.currentTarget.value)}
        />
        <Select 
          label="Your fav"
          placeholder="ca-01"
          value={assetId}
          onChange={setAssetId}
          data= {
            [
              { value: 'react', label: 'React'},
              { value: 'ng', label: 'Angular'},
              { value: 'vie', label: 'Vue'},
            ]
          }
        />
        <Select 
          label="Wills"
          placeholder="ca-01"
          value={assetId}
          onChange={setAssetId}
          data= {[assets]}
        />

        <TextInput
          label="Will Start Date"
          placeholder="MM-DD-YYYY"
          withAsterisk
          {...form.getInputProps('willStartDate')}
        />
        <TextInput
          label="Will End Date"
          placeholder="MM-DD-YYYY"
          withAsterisk
          {...form.getInputProps('willEndDate')}
        />
        <TextInput
          
          label="Benefitor"
          placeholder="0x Address"
          mt="md"
          withAsterisk
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
