import { useNav } from "../hooks/useNav"
import style from '../styles/Body.css'
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
const Contact = () => {
  const bookingRef = useNav("Contact")

  return (
    <section ref={bookingRef} id="contactSection" classname="ContactContainer">
      <div classname="ContactUs">
      <h2>Contact</h2>
      <p>wtf huh dolor sit amet consectetur adipisicing elit. Hic optio dolorum exercitationem, harum repellat explicabo quis error excepturi porro soluta.</p>
      </div>
    </section>
  ) 
}

export default Contact