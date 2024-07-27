import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';  
import axios from "axios"
const AgentMasterDetails = () => {
  const [meta, setmeta] = useState([])
  const userdata = async () => {
    const data =await axios.get("https://digitechwizardbackend.onrender.com/api/getAgentMaster1")
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
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' , backgroundColor: '#8B6914', color:"white" }}>
          <h2>Agent Master</h2>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
            <input
                type='text'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder='Search...'
                style={{
                    width: '300px', 
                    padding: '10px 15px',
                    fontSize: '16px',
                    border: '1px solid #ccc',
                    borderRadius: '25px', 
                    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                    outline: 'none',
                    transition: 'all 0.3s ease',
                    marginRight: '10px'
                }}
            />
        </div>
          <button style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px' }}>+ Create</button>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead>
            <tr>
              {['#', 'Code', 'Name', 'Admin', 'Contact', 'D.O.J', 'P.W.D', 'Subadmin Share % Match Shr', 'Casino Shr', 'Subadmin Comm % Type', 'Match', 'SSN', 'Chips', 'Status'].map(header => (
                <th key={header} style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#8B6914', color:"white"  }}>{header}</th>
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

export default AgentMasterDetails;
