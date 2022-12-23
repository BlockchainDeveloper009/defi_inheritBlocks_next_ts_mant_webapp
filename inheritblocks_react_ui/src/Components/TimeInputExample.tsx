import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { Calendar, TimeInput, TimeRangeInput } from '@mantine/dates';
import { GitHubLogoIcon } from '@modulz/radix-icons';

function TimeInputExample() {
    const [time, setTIme] = useState<any>(new Date());
    const now = new Date();
    const then = dayjs(now).add(30,'minutes').toDate();

    const [value, setValue] = useState<[Date,Date]>();

    useEffect(()=> {
        console.log(time)
    })
  return (
    <div className="App">
        <TimeInput icon={<GitHubLogoIcon/>} styles={(theme) => ({
          icon: {
            color: theme.colors.orange[7]
          },
          filledVariant: {
            backgroundColor: theme.colors.blue[5]
          }
      })
    }
        format="12" label="this is label" description="this is desc" value={time}>
      
      </TimeInput>
      <TimeRangeInput value={value} onChange={setValue} styles={(theme) => ({
          icon: {
            color: theme.colors.orange[7]
          },
          filledVariant: {
            backgroundColor: theme.colors.blue[5]
          }
          })
        }
      />



    </div>
  );
}



export default TimeInputExample;
