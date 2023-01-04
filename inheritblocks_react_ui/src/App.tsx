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
import { WagmiConfig , useAccount, useConnect, useEnsName } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { createClient, configureChains, mainnet, goerli  } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { polygon, polygonMumbai, hardhat, localhost } from 'wagmi/chains'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { infuraProvider } from 'wagmi/providers/infura'
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';  
import Profile from './Components/Profile';

//import { createStylesServer, ServerStyles } from '@mantine/ssr';
const yourAlchemyApiKey = '3b2s_ycI-VRJbbV-stREOv_x1w3XC5LQ';

const { chains, provider, webSocketProvider } = configureChains(
  [polygon, goerli, polygonMumbai, localhost],
  [
    // priority =0, first rpc provider will be tried, after stallTimeout, will move to next RPC provider
    alchemyProvider({ apiKey: yourAlchemyApiKey, priority: 0, stallTimeout: 1_000 }), 

    infuraProvider({ apiKey: 'yourInfuraApiKey', priority: 1 }),
    publicProvider()],
)

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});
const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
  connectors
  
})
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
              <WagmiConfig client={client}>
                <Profile/>
                <AppShellExample/>
                
                
                <LightDarkButton/>
                
                <Buttons/>
  
                </WagmiConfig>
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