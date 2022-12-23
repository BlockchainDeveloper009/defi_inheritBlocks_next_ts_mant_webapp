import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Loader, MantineProvider, Paper, Text } from '@mantine/core';

//import { createStylesServer, ServerStyles } from '@mantine/ssr';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <MantineProvider theme={{ 
         fontFamily: 'Open Sans',
         colorScheme: "dark",
         fontSizes: { md: 12},
         colors: {
          blue: ['#7AD1DD', '#5FCCDB', '#44CADC', '#2AC9DE', '#1AC2D9', '#11B7CD', '#09ADC3', '#0E99AC', '#128797', '#147885']  },
          
      
      }}>

      </MantineProvider>
        <Paper>
          <Text>harish</Text>
          <Text>G k</Text>
        </Paper>
        <Button>Hello World!</Button>
        <img src={logo} className="App-logo" alt="logo" />
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
        </a>
      </header>
    </div>
  );
}

export default App;
