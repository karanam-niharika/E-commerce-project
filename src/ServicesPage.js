import React from 'react'
import { Link } from 'react-router-dom'
import Navbarpage from './Navbarpage'
import './App.css'





const ServicesPage = () => {

    const services = [ { id: 1, name: 'Web Development', description: 'Building responsive and engaging websites.', icon: '🌐' },
         { id: 2, name: 'Graphic Design', description: 'Creating visually appealing graphics and designs.', icon: '🎨' },
          { id: 3, name: 'SEO Optimization', description: 'Improving search engine rankings and visibility.', icon: '🔍' },
         ];





    return (
        <>
            <Navbarpage />

            <h1>Our Services</h1> 
            <div className="service-list"> {services.map(service => ( <div key={service.id} className="service-card">
                 <div className="service-icon">{service.icon}</div> <h2>{service.name}</h2>
                  <p>{service.description}</p> </div> ))} 
                  </div>


           











           






        </>
    )
}

export default ServicesPage