import React, {useState} from "react";
import '../styles/Services.css'

export function Services(){

    const [services, setServices] = useState(false);

    return(
        <div className='services-container'>
        <p className="services-title" onClick={()=>{setServices(!services)}}>Servicios🔻</p>
        {services && (
            <ul className="services-menu">
                <li className="services-item">Masajes</li>
                <li className="services-item">Rehabilitaciones</li>
                <li className="services-item">Citas</li>
          </ul>
        )}
        </div>
    )
}