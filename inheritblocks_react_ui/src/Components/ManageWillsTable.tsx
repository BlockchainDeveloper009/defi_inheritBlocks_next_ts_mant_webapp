import { Table } from '@mantine/core';
import { useAccount, useContract, useContractRead, useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi'

import {
 
  CreateBondandAdminRole_CONTRACT_ABI,
  CreateBondandAdminRole_CONTRACT_ADDRESS,
} from "../srcConstants";
interface ff{
  
}
function GetWillsByUsers(stttt:any) {
  const { data:functionData,status} = useContractRead({
    address: CreateBondandAdminRole_CONTRACT_ADDRESS,
    abi: CreateBondandAdminRole_CONTRACT_ABI,
    functionName: 'getUserCreatedBonds',
    args: [stttt]
    
  })
  console.log('---------')
  
  console.log('---getUserCreatedBonds-----')
  console.log(functionData as Array<string>)
  let retData = functionData as Array<string>;
  console.log(retData)
  return retData 
  
}

function ManageWillsTable() {
  const { address, connector, isConnected } = useAccount()
  GetWillsByUsers(address)
   
    const elements = [
        { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
        { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
        { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
        { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
        { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
      ];
    const rows = elements.map((element) => (
        <tr key={element.name}>
          <td>{element.position}</td>
          <td>{element.name}</td>
          <td>{element.symbol}</td>
          <td>{element.mass}</td>
        </tr>
      ));

  return (
    <div className="App">
         <Table>
        <thead>
            <tr>
            <th>Element position</th>
            <th>Element name</th>
            <th>Symbol</th>
            <th>Atomic mass</th>
            </tr>
        </thead>
        <tbody>{rows}</tbody>
        </Table>

    </div>
  );
}

export default ManageWillsTable;
