import { useNav } from "../hooks/useNav"
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../styles/Body.css'
const Home = () => {
  const homeRef = useNav("Home")

  return (
    <section ref={homeRef} id="homeSection" className="home">
      <img src="./home-image.jpg"/>
      
    </section>
  )
}

export default Home