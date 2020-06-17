import React from 'react'
import './image_section.style.css'

import {withRouter} from 'react-router-dom'


const ImageSection = () =>{

    return(
        <div className="image_section">
                <div className="image">
                    <img src="" alt="Product_image" />
                </div>
            </div>
    )
};

export default withRouter(ImageSection);