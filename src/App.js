import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes , Route, Link } from "react-router-dom";
import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import ServicemanagerProfilePage from './Pages/ServiceManagerProfilePage';
import ProfileNavBar from './Components/ProfileNavBar';
import CarRegistration from './Pages/VehicleRegisterPage';
import EditVehicle from './Pages/EditVehicle';
import "antd/dist/antd.min.css";
import VehicleRegisterPage from './Pages/VehicleRegisterPage';
import UpdateVehiclePage from './Pages/UpdateVehiclePage';
import CustomerProfilePage from './Pages/CustomerProfilePage';
import Vehicles from './Pages/Vehicles';
// const cors = require("cors");

function App() {
   
  // app.use(cors());

  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<LandingPage/>} />
            <Route exact path="/login" element={<LoginPage/>} />
            <Route exact path="/navbar" element={<ProfileNavBar/>} />
            <Route exact path="/customerProfilePage" element={<CustomerProfilePage/>}/>
            <Route exact path="/register" element={<RegisterPage/>} />
            <Route exact path="/vehicleRegister" element={<VehicleRegisterPage/>} />
            <Route exact path="/updateVehicle" element={<UpdateVehiclePage/>} />
            <Route exact path="/vehicles" element={<Vehicles/>} />
          </Routes>
        </BrowserRouter> 

    </div>
  );
}

export default App;
