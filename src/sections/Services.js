import { useNav } from "../hooks/useNav"
import { useNavigate } from 'react-router-dom';
import '../styles/Body.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import { useRef, useEffect } from 'react';

const Services = () => { 
  const destinationRef = useNav("Services");



  return (
    <section ref={destinationRef} id="servicesSection" className="ServicesPics" >
      
      <div className="Services">
      
        <h2>Your Laundry,  Your schedule</h2>
        <h1>Book now</h1>
        <h3>and breeze through your visit!</h3>
        <p>Experience a new level of laundry convenience - where your time and comfort come first.</p>
        <button className="reserve-button" >
          Reserve Now
        </button> 
      <div className="ServicesHolder">
        <img src="./BookNow1.png" alt="hfh" />
      </div>
        
        
      </div>
      <div className="Serv">
        <h5>SERVICES</h5>

      </div>
      <div className="Servimage-container">
        <img src="WashDry.png" alt="Image 1"/>
        <img src="Self.png" alt="Image 2"/>
        <img src="Pickup.png" alt="Image 3"/>
        <h6>Wash, Dry & Fold</h6>
        <h5>Self-Service</h5>
        <h7>Pickup/Delivery</h7>
      </div>
      
    </section>
  )
}


export default Services
