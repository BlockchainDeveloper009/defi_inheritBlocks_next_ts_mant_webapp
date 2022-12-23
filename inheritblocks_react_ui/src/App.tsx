import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, ColorScheme, ColorSchemeProvider, Loader, MantineProvider, Paper, Text } from '@mantine/core';
import Cards from './Components/Cards';
import LightDarkButton from './Components/LightDarkButton';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import Buttons from './Components/Buttons';
import Header from './Components/Header';
import AppShellExample from './Components/AppShell';

import '@rainbow-me/rainbowkit/styles.css';


//import { createStylesServer, ServerStyles } from '@mantine/ssr';


function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <div className="App">
      <header className="App-header">
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={    toggleColorScheme} > 
            <MantineProvider theme={{colorScheme}}>
              <Paper radius={0} style = {{minHeight: "100vh"}}>
                <AppShellExample/>
                
                
                <LightDarkButton/>
                
                <Buttons/>
  
                
              </Paper>
            </MantineProvider>
        </ColorSchemeProvider>


        
      </header>
    </div>
  );
}

export default App;
function setColorScheme(arg0: string) {
  throw new Error('Function not implemented.');
}

        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}