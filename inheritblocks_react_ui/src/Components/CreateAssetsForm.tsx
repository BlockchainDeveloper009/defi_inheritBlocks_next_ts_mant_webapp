import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';

import { useState } from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Button, Box, Code } from '@mantine/core';

import {
 
  CreateBondandAdminRole_CONTRACT_ABI,
  CreateBondandAdminRole_CONTRACT_ADDRESS,
} from "../../constants";

function CreateAssetsForm() {



  const [submittedValues, setSubmittedValues] = useState('');

  const form = useForm({
    initialValues: {
      assetName: 'asset',
      Amount: '0'
    },

    transformValues: (values) => ({
      AssetName: `${values.assetName}`,
      Amount: Number(values.Amount) || 0,
    }),
  });

  return (
    <Box sx={{ maxWidth: 400 }} mx="auto">
      <form
        onSubmit={form.onSubmit((values) => setSubmittedValues(JSON.stringify(values, null, 2)))}
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
      </form>

      {submittedValues && <Code block>{submittedValues}</Code>}
    </Box>
  );
}

export default CreateAssetsForm;
