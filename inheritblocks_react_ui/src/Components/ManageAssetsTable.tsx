import { Table } from '@mantine/core';
import { BigNumber } from 'ethers';
import { useState } from 'react';
import { useAccount, useContract, 
  useContractRead, useContractWrite,
   usePrepareContractWrite, useWaitForTransaction } from 'wagmi'

import {
 
  CreateBondandAdminRole_CONTRACT_ABI,
  CreateBondandAdminRole_CONTRACT_ADDRESS,
} from "../srcConstants";
import Profile from './Profile';
import { useNavigate, useParams } from "react-router-dom";


interface WillsData{
  willId:number,
  assetId:string,
  s_baseStatus: string,
  willStartDate: BigNumber,
  willMaturityDate:BigNumber,
  Benefitors: number,
  willOwner:BigInteger,
  willManager:BigInteger,
  
  
}
function GetWillsByUsers(stttt:any) {
  const { data:functionData,status} = useContractRead({
    address: CreateBondandAdminRole_CONTRACT_ADDRESS,
    abi: CreateBondandAdminRole_CONTRACT_ABI,
    functionName: 'getUserCreatedBonds',
    args: [stttt]
    
  })
  
  
  console.log('---getUserCreatedBonds-----')
  console.log(functionData)
  console.log('---------')
  let retData:WillsData[];
  retData = functionData as Array<WillsData>;
  console.log(retData)
  return retData 

}


function ManageAssetsTable() {
  const { address, connector, isConnected } = useAccount()
  const [assetId, setAssetId] = useState('')
  const [willsId, setWillsId] = useState()
  let { asId } = useParams();
  const navigate = useNavigate();
  const handleProceed = (assetId:string) => {
    // console.log(id, "home");
    setAssetId(assetId)
    console.log('---handleProceed---')
    console.log(assetId)
    console.log('----------')
    navigate("/WillsFormEdit",  
    {
      state: {
        userId: assetId,
      }
    }
    );
  };

  try {


    let d = GetWillsByUsers(address)
    if(isConnected && d.length>=0)
    {
            console.log(d[0].assetId);
            
          const trows = d.map((element) => (
            <tr key={element.assetId}>
              
              <td ><a href="" target="_blank">{element.assetId}</a></td>
              <td>{element.willId}</td>
              <td>{element.s_baseStatus}</td>
              <td>{element.willMaturityDate.toString()}</td>
              <td>{element.willStartDate.toString()}</td>
              <td>{element.Benefitors}</td>
              <td><button onClick={()=>handleProceed(element.assetId)}></button></td>
              {/* <td>{element.willManager}</td>
              <td>{element.willOwner}</td> */}
              
            </tr>
          ));
      //
 
          return (
            <div className="App">
          
            
                ---------
                <Table  highlightOnHover withColumnBorders>
                <thead>
                    <tr>
                    <th>assetId</th>
                    <th>status</th>
                    <th>startDate</th>
                    <th>endDate</th>
                    <th>Benefitors</th>
                    <th>manager</th>
                    {/* <th>owner</th>
                    <th>manager</th>
                    */}
                    </tr>
                </thead>
                <tbody>{trows}</tbody>
                </Table>

               


                
            </div>
          );
    } else{
     return (
       <div className="App">
         <Profile/>
         
     
       </div>
     );
    }



    
  } catch (error) {
    console.log(`Ex-1: GetWillsByUsers - ${error}`)
  }
  return null;
 
    
   
}

export default ManageAssetsTable;
