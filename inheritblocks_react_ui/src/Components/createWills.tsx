import { Chip, createStyles, Input, TextInput } from '@mantine/core';
import { useEffect, useState } from "react";
import { GitHubLogoIcon, NotionLogoIcon } from "@modulz/radix-icons";
import { Calendar } from '@mantine/dates';

const useStyles = createStyles((theme, _params, getRef) => ({
    label: {
      '&[data-checked]': {
        '&, &:hover': {
          backgroundColor: theme.colors.blue[theme.fn.primaryShade()],
          color: theme.white,
        },
  
        [`& .${getRef('iconWrapper')}`]: {
          color: theme.white,
        },
      },
    },
  
    iconWrapper: {
      ref: getRef('iconWrapper'),
    },
  }));


function createWills() {
    const [value, setValue] = useState(['react']);
        const [calendarVal, setCalendarVal] = useState(new Date());
    const { classes } = useStyles();
    useEffect(()=> {
        console.log(calendarVal)
        
    })


  return (
    <div className="App">

      <TextInput
        icon= {<GitHubLogoIcon/>}
        rightSection={<NotionLogoIcon/>}
        label="enter firstName"
        description = "Enter your legal firstname"
        error="Name should aplhabets"
        required 
      />

      <TextInput
        icon= {<GitHubLogoIcon/>}
        rightSection={<NotionLogoIcon/>}
        label="enter LastName"
        description = "Enter your legal Last Name"
        error="Name should aplhabets"
        required 
      />



        <Input
        component="select" />
      
      <Calendar  value={calendarVal}  amountOfMonths={2} labelFormat="MM/YYYY"/>


    </div>
  );
}

export default createWills;
