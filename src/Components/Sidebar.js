

import React, { useState } from 'react';
import { BiSolidUpArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";
import { FcBusinessman } from "react-icons/fc";
import { IoFootballOutline } from "react-icons/io5";
import { FaRegNewspaper } from "react-icons/fa6";
import { SiCashapp } from "react-icons/si";
import { MdReportProblem } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { RxDashboard } from "react-icons/rx";
const Sidebar = () => {
  const [openSections, setOpenSections] = useState({
    adminDetails: false,
    sportsBetting: false,
    ledger: false,
    cashTransaction: false,
    report: false,
    wbtSettings: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div style={{ width: '250px', backgroundColor: '#8B6914', height: '100vh', padding: '20px', color: 'white', position: 'fixed' }}>
      <div style={{ marginBottom: '30px' }}>
        <h2 > <RxDashboard style={{marginRight:"15%"}}/>Dashboard</h2>
      </div>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        <li>
          <div onClick={() => toggleSection('adminDetails')} style={{ cursor: 'pointer', marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <FcBusinessman/> <span style={{marginRight:"40%"}}>Admin Details</span> {openSections.adminDetails ? <BiSolidUpArrow /> : <BiSolidDownArrow />}
          </div>
          {openSections.adminDetails && (
            <ul style={{ listStyleType: 'none', paddingLeft: '20px', textAlign:"start"}}>
              <li style={{ marginBottom: '10px' }}><a href="/Miniadmin" style={{ color: 'white', textDecoration: 'none' }}>MiniAdmin Master</a></li>
              <li style={{ marginBottom: '10px' }}><a href="/Master" style={{ color: 'white', textDecoration: 'none' }}>Master Master</a></li>
              <li style={{ marginBottom: '10px' }}><a href="/SuperAgent" style={{ color: 'white', textDecoration: 'none' }}>Super Agent Master</a></li>
              <li style={{ marginBottom: '10px' }}><a href="/AgentMaster" style={{ color: 'white', textDecoration: 'none' }}>Agent Master</a></li>
              <li style={{ marginBottom: '10px' }}><a href="/ClientMaster" style={{ color: 'white', textDecoration: 'none' }}>Client Master</a></li>
            </ul>
          )}
        </li>
        <li>
          <div onClick={() => toggleSection('sportsBetting')} style={{ cursor: 'pointer', marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <IoFootballOutline style={{color:"blue"}}/><span style={{marginRight:"40%"}}>Sports-Betting</span> {openSections.sportsBetting ? <BiSolidUpArrow /> : <BiSolidDownArrow />}
          </div>
          {openSections.sportsBetting && (
            <ul style={{ listStyleType: 'none', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Sub Item 1</a></li>
              <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Sub Item 2</a></li>
            </ul>
          )}
        </li>
        <li>
          <div onClick={() => toggleSection('ledger')} style={{ cursor: 'pointer', marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
           <FaRegNewspaper style={{color:"pink"}}/> <span style={{marginRight:"55%"}}>Ledger</span> {openSections.ledger ? <BiSolidUpArrow /> : <BiSolidDownArrow />}
          </div>
          {openSections.ledger && (
            <ul style={{ listStyleType: 'none', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Sub Item 1</a></li>
              <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Sub Item 2</a></li>
            </ul>
          )}
        </li>
        <li>
          <div onClick={() => toggleSection('cashTransaction')} style={{ cursor: 'pointer', marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
           <SiCashapp style={{color:"black"}}/> <span style={{marginRight:"30%"}}>Cash Transaction</span> {openSections.cashTransaction ? <BiSolidUpArrow /> : <BiSolidDownArrow />}
          </div>
          {openSections.cashTransaction && (
            <ul style={{ listStyleType: 'none', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Sub Item 1</a></li>
              <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Sub Item 2</a></li>
            </ul>
          )}
        </li>
        <li>
          <div onClick={() => toggleSection('report')} style={{ cursor: 'pointer', marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
           <MdReportProblem style={{color:"red"}}/> <span style={{marginRight:"55%"}}>Report</span> {openSections.report ? <BiSolidUpArrow /> : <BiSolidDownArrow />}
          </div>
          {openSections.report && (
            <ul style={{ listStyleType: 'none', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Sub Item 1</a></li>
              <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Sub Item 2</a></li>
            </ul>
          )}
        </li>
        <li>
          <div onClick={() => toggleSection('wbtSettings')} style={{ cursor: 'pointer', marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <CiSettings/><span style={{marginRight:"35%"}}>WBT Settings</span> {openSections.wbtSettings ? <BiSolidUpArrow /> : <BiSolidDownArrow />}
          </div>
          {openSections.wbtSettings && (
            <ul style={{ listStyleType: 'none', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Sub Item 1</a></li>
              <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Sub Item 2</a></li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
