import React from 'react'
import './desc.style.css'
import $ from 'jquery'

class Description extends React.Component{
    

    changeDesc = (event) => {
        const clicked = {
            "border-top": "1px solid #7AAFF7",
            "border-bottom" :"none"
        }
        const nonClicked = {
            "border-bottom":"1px solid #7AAFF7",
            "border-top":"none"
        }
        const {target} = event
        if(target.id === "desc"){
            $("#spec").css(nonClicked)
            $("#desc").css(clicked)
            $(".toogle_spec").css("display", "none")
            $(".toogle_desc").css("display", "block")
        }
        else{
            $("#spec").css(clicked)
            $("#desc").css(nonClicked)
            $(".toogle_spec").css("display", "block")
            $(".toogle_desc").css("display", "none")
        }

    }

    render(){

        return(
            <div className="desc">
                    <div className="toogle_button">
                        <button id="desc" onClick={this.changeDesc}>Description</button>
                        <button id="spec" onClick={this.changeDesc}>Specification</button>
                    </div>
                    <hr />    
                    <div className="toogle_desc">
                        <h2>Description</h2>
                    </div>
                    <div className="toogle_spec">
                        <h2>Specification</h2>
                    </div>
                </div>
        )
    }
};

export default Description