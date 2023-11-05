import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Slider from './Slider';
import EventCards from './EventCards';
import '../App.css';
import NavBar from './Navbar';
import { useEffect } from 'react';


function Home() {
 

  return (

    <div>
      
      <div>
        <Slider />
        <EventCards />
      </div>
    </div>
  );
}

export default Home;
