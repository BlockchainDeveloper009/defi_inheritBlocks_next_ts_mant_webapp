import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';

import { useState } from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Button, Box, Code } from '@mantine/core';

import {
 
  CreateBondandAdminRole_CONTRACT_ABI,
  CreateBondandAdminRole_CONTRACT_ADDRESS,
} from "../../constants";

function CreateWillsForm() {



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
      Benefitor: Number(values.Benefitor) || 0,
    }),
  });

  return (
    <Box sx={{ maxWidth: 400 }} mx="auto">
      <form
        onSubmit={form.onSubmit((values) => setSubmittedValues(JSON.stringify(values, null, 2)))}
      >

        <TextInput
          type="number"
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
          type="number"
          label="Benefitor"
          placeholder="0x Address"
          mt="md"
          {...form.getInputProps('Benefitor')}
        />

        <Button type="submit" mt="md">
          Submit
        </Button>
      </form>

      {submittedValues && <Code block>{submittedValues}</Code>}
    </Box>
  );
}

export default CreateWillsForm;
