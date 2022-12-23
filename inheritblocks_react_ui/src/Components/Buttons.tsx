import { Button } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';
import { useState } from 'react';

function Buttons() {

    const [loading, setLoading]= useState(false);
     const handleClick=() => {
        setLoading(true)
    } 


  return (
    <div className="App">

      <Button leftIcon={<IconSun/>} variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>Indigo cyan</Button>
      <Button loading={true} variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>Lime green</Button>
      <Button component="a" variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>Teal blue</Button>
      <Button styles = {(theme) => ({
        root: {
            border: 0,
            height: 50,
            paddingRight: 60,
            '&:hover': {
                paddingLeft:1000 
            }
        }
      })} variant="gradient" gradient={{ from: 'orange', to: 'red' }}>Orange red</Button>
      <Button variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}>Peach</Button>
        

    </div>
  );
}

export default Buttons;
