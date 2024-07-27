import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';  // Adjust the import path according to your file structure
import axios from "axios"
const MasterDetails = () => {
  const data = [
    // { code: 'AD185', name: 'Ayush', admin: 'demo (ADM133)', contact: '91897654321', doj: '03-07-24', pwd: 'Ayush@112255', matchShr: 10, casinoShr: 10, commType: 'NOC', commMatch: 0.00, commSSN: 0.00, chips: 0.00, status: 'Inactive' },
    // { code: 'AD186', name: 'vikaskumar', admin: 'demo (ADM133)', contact: '7210093620', doj: '05-07-24', pwd: 'SuperDuper', matchShr: 6, casinoShr: 5, commType: 'NOC', commMatch: 0.00, commSSN: 0.00, chips: 39.00, status: 'Active' },
    // { code: 'AD189', name: 'test', admin: 'demo (ADM133)', contact: '0987654321', doj: '14-07-24', pwd: 'A123', matchShr: 6, casinoShr: 1, commType: 'NOC', commMatch: 0.00, commSSN: 0.00, chips: 10.00, status: 'Active' },
    // { code: 'AD190', name: 'Yuvraj', admin: 'demo (ADM133)', contact: '0987654321', doj: '14-07-24', pwd: 'QWERT4321', matchShr: 50, casinoShr: 50, commType: 'BBB', commMatch: 1.00, commSSN: 2.00, chips: 30.00, status: 'Active' },
  ];
  const [meta, setmeta] = useState([])
  const userdata = async () => {
    const data =await axios.get("http://localhost:6005/api/getMasterMaster")
    setmeta(data.data.data)
    console.log(data.data.data)
  }
  useEffect(()=> {
      userdata()
  },[])
  const [search, setSearch] = useState()
  const [filterdata, setfilterdata] = useState([])
  const handlefilter = () => {
    const filterdetails = meta.filter((item)=>item.Name.toLowerCase().includes(search.toLowerCase()) )
    setfilterdata(filterdetails)
  }
  useEffect(()=>{
     handlefilter()
  },[search])
  console.log(filterdata)
  console.log(meta)

  return (
    <div style={{ display: 'flex'  }} >
        <Sidebar/>
      <div style={{ marginLeft: '20%', padding: '20px', width: 'calc(100% - 250px)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2>Master Master</h2>
          <input type='text'  value= {search} onChange={(e)=> setSearch(e.target.value)}></input>
          <button style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px' }}>+ Create</button>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead>
            <tr>
              {['#', 'Code', 'Name', 'Admin', 'Contact', 'D.O.J', 'P.W.D', 'Subadmin Share % Match Shr', 'Casino Shr', 'Subadmin Comm % Type', 'Match', 'SSN', 'Chips', 'Status'].map(header => (
                <th key={header} style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
          {filterdata.length > 0 ? filterdata.map((item, index)=>{
               return <tr key={item?.code}>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                  <button style={{ backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', padding: '5px' }}>+</button>
                </td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item?.Code}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item?.Name}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item?.Admin}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item?.Contact}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item?.DateOfJoining}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item?.PWD}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item?.SubAdminShare}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item?.CasinoShr}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item?.SubAdminComm}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item?.Match}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item?.SSN}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item?.Chips}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item?.Status}</td>
              </tr>
            }) :meta?.map((item, index) => (
              <tr key={item?.code}>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                  <button style={{ backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', padding: '5px' }}>+</button>
                </td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item?.Code}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item?.Name}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item?.Admin}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item?.Contact}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item?.DateOfJoining}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item?.PWD}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item?.SubAdminShare}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item?.CasinoShr}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item?.SubAdminComm}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item?.Match}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item?.SSN}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item?.Chips}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item?.Status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MasterDetails;
