import React from 'react'
import './calculator.style.scss'
import NewButton from '../material/button.component'
import './calculator.util'
import $ from 'jquery'
import setCartItem from '../../redux/cart/cart.action'
import { connect } from 'react-redux'
class Calculator extends React.Component {

    state = {
        frame: "disabled",
        standee: "disabled",
        glowsign: "disabled",
        modal : false,
        forMaterial : true,
        forFSG : false,
        forDesignOption : false
    }
    changeAddDesign = (event) =>{
        event.preventDefault()
        this.setState({
            forDesignOption: !this.state.forDesignOption
        })
        $("#add-design").css("display","none")
                                
    }
    changeMaterialType = (event) =>{
        event.preventDefault();
        this.setState({
            forMaterial : true,
            forFSG : false
        })
        this.displayModal(event)
    }
    displayModal = (event) =>{
        event.preventDefault()
        const {target} = event
        console.log(target)
        this.setState({
            modal : !this.state.modal
        })
    }
    changeMaterial = (event) =>{
        const {target} = event
        console.log(target.value)
        if(target.value  !== "choose"){
            $(".description-box").css("display","block")
        }
        else{
            $(".description-box").css("display","none")
        }
    }
    changeFSGOption = (event) =>{
        const {target} = event
        if(target.value === "yes"){
            this.setState({
                forFSG:true,
                forMaterial:false
            })
            this.displayModal(event)
        }
        else{
            this.setState({
                modal : false
            })
        }
        
    }
    changeSelection = (event) => {
        const { target } = event
        this.setState({
            frame: target.id === "frame" ? "enabled" : "disabled",
            standee: target.id === "standee" ? "enabled" : "disabled",
            glowsign: target.id === "glowsign" ? "enabled" : "disabled",
        })
        $("#frame-select, #standee-select, #glowsign-select").val("no")
    };

    addToCart = () =>{
        const {setCartItem} = this.props
        setCartItem(["1","2"])
    }



    render() {

        return (
            <div className="size_section">
                <br />
                <h3 style={{
                    lineHeight: "0rem",
                    fontSize: "1.6rem"
                }}>Price Estimator</h3>
                <hr style={{
                    width: "100%"
                }} />
                <br />
                <form>

                    <div style={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center"
                    }}>
                        <label>Material Type</label>

                        <div style={{
                            display: "flex",
                            alignItems: "flex-start"
                        }}>
                            <div className="select" style={{
                                width: "18em"
                            }}>
                                <select name="material" id="material">
                                    <option defaultValue disabled>Choose an material</option>
                                    <option value="a">A</option>
                                    <option value="b">B</option>
                                </select>
                            </div>
                            <div style={{
                                position: "relative",
                                display: "flex",
                                alignItems: "center"
                            }}>
                                <button className="question_btn" onClick={this.changeMaterialType}><i className="fa fa-question" aria-hidden="true"></i></button>
                                <div className="question_div">
                                    How it matters ?
                    </div>
                            </div>
                        </div>
                    </div>
                    <br />


                    <div style={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center"
                    }}>
                        <label>Measurement</label>

                        <div className="select">
                            <select name="measure" id="measure">
                                <option defaultValue disabled>Choose an measurement</option>
                                <option value="ft">Feet</option>
                                <option value="in">Inchies</option>
                            </select>
                        </div>
                    </div>
                    <br />


                    <div style={{
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center"
                    }}>
                        <label>Select Size</label>
                        <div style={{
                            display: "flex",
                            marginLeft: "1rem",
                            width: "62%",
                            alignItems: "center"
                        }}>
                            <div className="input_field">
                                <input type="number" min="1" max="99" placeholder="Height" style={{
                                    width: "120px",
                                    padding: "none"
                                }} />

                            </div>
                            <label style={{
                                marginLeft: "1rem",
                                marginRight: "1rem"
                            }}>X</label>
                            <div className="input_field" style={{
                            }}>
                                <input type="number" min="1" max="99" placeholder="Width" style={{
                                    width: "120px",
                                    padding: "none"
                                }} />

                            </div>
                        </div>


                    </div>
                    <br />

                    <div style={{
                        display: "flex",
                        alignItems: "center"
                    }}>
                        <input type="radio" name="select-one" id="frame" style={{ marginRight: ".5rem" }}
                            onClick={this.changeSelection}
                        />
                        <div style={{
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center"
                        }}>
                            <label style={{
                                marginRight: "6rem"
                            }}
                                htmlFor="frame"
                            >Frame</label>

                            <div className="select">
                                <select name="frame-select" id="frame-select"
                                    disabled={this.state.frame === "disabled"}
                                    onChange={this.changeFSGOption}
                                >
                                    <option defaultValue disabled>Frame</option>
                                    <option value="no">No</option>
                                    <option value="yes">Yes</option>
                                </select>
                            </div>
                        </div>
                    </div>


                    <br />



                    <div style={{
                        display: "flex",
                        alignItems: "center"
                    }}>
                        <input type="radio" name="select-one" id="standee" style={{ marginRight: ".5rem" }}
                            onClick={this.changeSelection}
                        />
                        <div style={{
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center"
                        }}>
                            <label style={{
                                marginRight: "5rem"
                            }} htmlFor="standee">Standee</label>

                            <div className="select">
                                <select name="standee-select" id="standee-select"
                                    disabled={this.state.standee === "disabled"}
                                    onChange={this.changeFSGOption}
                                >
                                    <option defaultValue disabled>Standee</option>
                                    <option value="no">No</option>
                                    <option value="yes">Yes</option>

                                </select>
                            </div>
                        </div>
                    </div>

                    <br />


                    <div style={{
                        display: "flex",
                        alignItems: "center"
                    }}>
                        <input type="radio" name="select-one" id="glowsign" style={{ marginRight: ".5rem" }}
                            onClick={this.changeSelection}
                        />
                        <div style={{
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center"
                        }}>
                            <label style={{
                                marginRight: "4.5rem"
                            }} htmlFor="glowsign">Glowsign</label>

                            <div className="select">
                                <select name="glowsign-select" id="glowsign-select"
                                    disabled={this.state.glowsign === "disabled"}
                                    onChange={this.changeFSGOption}
                                >
                                    <option defaultValue disabled>glowsign</option>
                                    <option value="no">No</option>
                                    <option value="yes">Yes</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <br />







                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center"
                        }} >
                        <label>Quantity</label>
                        <div className="input_field" style={{
                            paddingLeft: "2rem",
                        }}>
                            <input type="number" min="1" max="99" placeholder="Quantity" />

                        </div>
                    </div>
                    <br />
                    {
                        this.state.forDesignOption === true ? (
                        <div>
                            <div style={{
                                display: "flex",
                                justifyContent: "space-around",
                                alignItems: "center"
                            }}>
                                <label style={{
                                    marginRight: "3rem"
                                }}
                                >Method</label>
    
                                <div className="select">
                                    <select name="design-select" id="design-select"
                                        onChange={()=>{
                                            alert("working")
                                        }}
                                    >
                                        <option defaultValue disabled>Choose method</option>
                                        <option value="upload">Upload</option>
                                        <option value="our-design">Select our designs</option>
                                        <option value="cotact">Conatct us</option>
                                    </select>
                                </div>
                            </div>
                            <br />
                        </div>
                        ) : (
                            null
                        )
                    }


                    <div
                        style={{
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            paddingLeft: "1.8rem"
                        }}>
                        <label>Total</label>
                        <label style={{
                            width: "10em",
                            marginLeft: "6.7rem"
                        }}>0</label>
                    </div>
                    <br />
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center",
                            paddingTop: "2rem",
                            paddingBottom: "1rem"
                        }}>
                        <NewButton variant="contained">Preview</NewButton>
                        <NewButton variant="contained" onClick={this.changeAddDesign}
                        id="add-design"
                        >Add design</NewButton>
                        <NewButton variant="contained" onClick={this.addToCart} >Submit</NewButton>
                    </div>
                        {

                            this.state.modal === true ? (
                                <div className="modal">
                        <div className="modal-content">
                            <div className="modal-header">
                                {
                                    this.state.forMaterial === true ? (<h3 style={{
                                        width: "50%",
                                        display: "inline",
                                        lineHeight: "3"
                                    }}>Material Type</h3>) : (<h3 style={{
                                        width: "50%",
                                        display: "inline",
                                        lineHeight: "3"
                                    }}>Frame / Standee / Glowsign</h3> )
                                }                                
                                <span className="close" onClick={this.displayModal}>&times;</span>
                            </div>
                            <div className="modal-body">
                                {
                                    this.state.forMaterial === true ? (
                                        <div>
                                            <div style={{
                                    display: "flex",
                                    justifyContent: "space-around",
                                    alignItems: "center"
                                }}>
                                    <label>Choose Material</label>

                                    <div className="select">
                                        <select name="measure" id="measure" onChange={
                                            this.changeMaterial
                                        }>
                                            <option defaultValue value="choose">Choose a material</option>
                                            <option value="a">A</option>
                                            <option value="b">B</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="description-box">
                                    <h2 style={{
                                        color:"black"
                                    }}>Description</h2>  
                                    <p>Description of material type comes here</p>
                                </div>
                                        </div>
                                    ):( <div>

                                        {
                                            this.state.frame !== "disabled" ? (<h2>Frames</h2>):(null)

                                        }
                                        {
                                            this.state.standee !== "disabled" ? (<h2>Standee</h2>):(null)

                                        }
                                        {
                                            this.state.glowsign !== "disabled" ? (<h2>Glowsign</h2>):(null)

                                        }
                                        


                            
                                    </div>)
                                }
                            </div>

                        </div>
                    </div>
                            ) : (null)

                        }

                    

                </form>
            </div>
        )
    }
};

const mapDispatchToProps = dispatch =>({
    setCartItem: user => dispatch(setCartItem(user))
  })

export default connect(null, mapDispatchToProps)(Calculator)