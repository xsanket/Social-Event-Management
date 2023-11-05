import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import RegistrationForm from "./components/RegistrationForm";
import Login from "./components/Login";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./components/Home";
import Footer from "./components/Footer";
import StartNavbar from "./components/StarterNavBar";
import About from "./components/About";
import BeachCleaningEvent from "./components/subComponens/BeachCleaningEvent";
import FortCleaningEvent from "./components/subComponens/FortCleaningEvent";
import YogaEvent from "./components/subComponens/YogaEvent";
import BloodDonationEvent from "./components/subComponens/BloodDonationEvent";
import MarathonEvent from "./components/subComponens/MarathonEvent";
import MusicEvent from "./components/subComponens/MusicEvent";





function App() {

  return (
    <>
      <BrowserRouter>
         <StartNavbar /> 
        
        <Routes>
          <Route path="/" element={<RegistrationForm />} />
          <Route path="/login" element={<Login />} />
          
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/BeachCleaningEvent" element={<BeachCleaningEvent/>}/>
          <Route path="/FortCleaningEvent" element={<FortCleaningEvent />}/>
          <Route path="/BloodDonationEvent" element={<BloodDonationEvent />}/>
          <Route path="/YogaEvent" element={<YogaEvent />}/>
          <Route path="/MarathonEvent" element={<MarathonEvent />}/>
          <Route path="/MusicEvent" element={<MusicEvent />}/>
          
        </Routes>
        <Footer/>
        <ToastContainer/>
      </BrowserRouter>
    </>
  );
}

export default App;
