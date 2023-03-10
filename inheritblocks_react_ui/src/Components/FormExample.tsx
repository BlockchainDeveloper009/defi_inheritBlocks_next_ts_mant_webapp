import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';

import { useState } from 'react';
import { useForm } from '@mantine/form';
import { TextInput, Button, Box, Code } from '@mantine/core';

import {
 
  CreateBondandAdminRole_CONTRACT_ABI,
  CreateBondandAdminRole_CONTRACT_ADDRESS,
} from "../../constants";

function FormExample() {



  const [submittedValues, setSubmittedValues] = useState('');

  const form = useForm({
    initialValues: {
      firstName: 'Jane',
      lastName: 'Doe',
      age: '33',
      AssetId: '1'
    },

    transformValues: (values) => ({
      fullName: `${values.firstName} ${values.AssetId}`,
      age: Number(values.age) || 0,
    }),
  });

  return (
    <Box sx={{ maxWidth: 400 }} mx="auto">
      <form
        onSubmit={form.onSubmit((values) => setSubmittedValues(JSON.stringify(values, null, 2)))}
      >
        <TextInput
          label="First name"
          placeholder="First name"
          {...form.getInputProps('firstName')}
        />
        <TextInput
          type="number"
          label="AssetId"
          placeholder="AssetId"
          mt="md"
          {...form.getInputProps('AssetId')}
        />
        <TextInput
          type="number"
          label="Benefitor"
          placeholder="Address"
          mt="md"
          {...form.getInputProps('Benefitor')}
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

export default FormExample;
