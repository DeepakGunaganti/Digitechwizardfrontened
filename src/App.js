import logo from './logo.svg';
import './App.css';
import MiniAdminDetails from './Components/Miniadmindetails.js';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Sidebar from './Components/Sidebar.js';
import MasterDetails from './Components/Master.js';
import SuperAgentDetails from './Components/SuperAgent.js';
import AgentMasterDetails from './Components/AgentMaster.js';
import ClientMasterDetails from './Components/ClientMaster.js';
import Login from './Credentials/Login.js';
import SignUp from './Credentials/Signup.js';
function App() {
  return (
    <div className="App">

        <BrowserRouter>
          <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/Signup' element={<SignUp/>}/>
            <Route path='/sidebar' element={<Sidebar/>}/>
            <Route path="/Miniadmin" element={ <MiniAdminDetails/>}/>
            <Route path="/Master" element={<MasterDetails/>}/>
            <Route path="/SuperAgent" element={<SuperAgentDetails/>}/>
            <Route path="/AgentMaster" element={<AgentMasterDetails/>}/>
            <Route path="/ClientMaster" element={<ClientMasterDetails/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
