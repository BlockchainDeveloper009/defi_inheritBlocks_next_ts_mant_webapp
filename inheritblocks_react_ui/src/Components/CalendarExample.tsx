import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { Calendar } from '@mantine/dates';

function CalendarExample() {
    const [caltime, setCalTIme] = useState<any>(new Date());

    useEffect(()=> {
        console.log(caltime)
    })
  return (
    <div className="App">
         <Calendar value={caltime} onChange={setCalTIme}  minDate={dayjs(new Date()).startOf('month').add(5, 'days').toDate()} 
         maxDate={dayjs(new Date()).endOf('month').subtract(5, 'days').toDate()} />

    </div>
  );
}

function withEvent(func: Function): React.ChangeEventHandler<any> {
    return (event: React.ChangeEvent<any>) => {
      const { target } = event;
      func(target.value);
    };
  }

export default CalendarExample;
