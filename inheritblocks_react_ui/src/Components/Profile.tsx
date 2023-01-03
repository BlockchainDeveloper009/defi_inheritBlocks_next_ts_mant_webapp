import { useEffect, useState } from 'react'
import { useAccount, useBalance, useConnect, useDisconnect, useEnsAvatar, useEnsName } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { LedgerConnector } from 'wagmi/connectors/ledger'

function Profile() {
  const [ Connector, setConnector] = useState()
  const { address, connector, isConnected } = useAccount()
  const { data: ensAvatar } = useEnsAvatar({ address })
  const { data: ensName } = useEnsName({ address })
  
  const { disconnect } = useDisconnect()

 
  const { connect, connectors, error, isLoading, pendingConnector } = useConnect({
    connector: new InjectedConnector({
      options: {
        shimDisconnect: false,
      },
    }),
  })


  if (isConnected) 
  {
    return (
      <div>
        {/* <img src={ensAvatar} alt="ENS Avatar" /> */}
        {/* <div>{ensName ? `${ensName} (${address})` : address}</div> */}
        <div>{address}</div>
        {/* <div>Connected to {connector.name}</div> */}
        <button onClick={()=>disconnect}>Disconnect</button>
      </div>
    )
  }
  return (
    <div>
      {connectors.map((connector) => (
        <button
          disabled={!connector.ready}
          key={connector.id}
          onClick={() => connect({ connector })}
        >
          {connector.name}
          {!connector.ready && ' (unsupported)'}
          {isLoading &&
            connector.id === pendingConnector?.id &&
            ' (connecting)'}
        </button>
      ))}
 
      {error && <div>{error.message}</div>}
    </div>
  )
}

export default Profile;
