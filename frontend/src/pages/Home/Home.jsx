import React from 'react'
import "./Home.css"
import Header from '../../components/header/Header'
const Home = () => {
  return (
    <div id='home'>
      <Header/>
      <section className="container hero" >
        <div className='hero-text'>
           <p className="flicker">Laissez-vous transporter dans l'univers magique de Ladurée</p>
            <button type="button" className="btn">Visit our Restaurant</button>
            <button type="button" className="btn">Visit our Boutique </button>

            </div>
      </section>
    </div>
    
 
  )
}

export default Home