import React from 'react'
import './onecard.style.css'

const OneCard = ({imageUrl,link, bannerName, bannerDesc}) =>{
    return(
        <div className="flip-card" style={{cursor: "pointer"}}>
            <a href={link}>
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src={process.env.PUBLIC_URL + imageUrl} alt="Avatar" />
                        <h3>{bannerName}</h3>
                    </div>
                    <div className="flip-card-back">
                        <h1>{bannerName}</h1> 
                        <p>{bannerDesc}</p> 
                    </div>
                </div>
            </a>
        </div>
    )
}

export default OneCard