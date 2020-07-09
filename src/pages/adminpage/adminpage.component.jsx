import React from 'react'
import MyHeader from '../../components/header/header.component'
import OutlinedCard from '../../components/admin product card/admin-product-card.component'
import './adminpage.style.scss'
import {Typography} from '@material-ui/core'
import NewButton from '../../components/material/button.component'
import ModalPage from '../../components/MDBModal/mdbmodal.component'
import FormInput from '../../components/form-input/form-input.component';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { AlertTitle } from '@material-ui/lab';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'
import {withStyles} from '@material-ui/core/styles'
import ClippedDrawer from '../../components/admin-page-drawer/drawer.component'
import OrdersTable from '../../components/admin-order-table/ordertable.component'
import { connect } from 'react-redux'
import PendingOrdersTable from '../../components/admin-order-table/pendingtable.component'

function Alert(props) {
    return <MuiAlert elevation={15} {...props} />;
  }

const useStyle = {
    forSnackbar:{
        backgroundColor:"white",
        color:"#71b3ef",
        borderColor:"#71b3ef"
    }
} 

class AdminPage extends React.Component{
    state={
        openModal:false,
        openSnackbar:false,
        product_name:"",
        description:"",
        activeRemove:false,
        price:""
    }
    toggleModal = () =>{
        this.setState({
            openModal:!this.state.openModal
        })
    };
    toggleRemove = () =>{
        this.setState({
            activeRemove:!this.state.activeRemove
        })
    }
    handleChange = event => {
        const { value, name } = event.target;
    
        this.setState({ [name]: value });
    };
    toggleSnackbar = () =>{
        this.setState({
            openSnackbar:!this.state.openSnackbar
        })
    }
    handleSubmit = ()=>{
        this.toggleSnackbar()
        this.toggleModal()  
    };
    render(){
        const {classes, currentActive} = this.props
        return(
            <div>
                <MyHeader />
                <ClippedDrawer />
                <div className="left_over_div">
                <Typography style={{
                    fontSize:"30px",
                    textAlign:"center"
                }} color="textSecondary" gutterBottom>
                    All Products
                </Typography>
                {
                    currentActive === 0? (<div className="product_cards_div">
                    <OutlinedCard pid="1" smallDesc="hello" mainDesc="main hello" name="name" deletable={this.state.activeRemove}/>
                    <OutlinedCard pid="2" smallDesc="hello" mainDesc="main hello" name="name" deletable={this.state.activeRemove}/>
                    <OutlinedCard pid="3" smallDesc="hello" mainDesc="main hello" name="name" deletable={this.state.activeRemove}/>
                    <OutlinedCard pid="4" smallDesc="hello" mainDesc="main hello" name="name" deletable={this.state.activeRemove}/>
                    <div className="remove_add_div">
                         <NewButton variant="outlined" disabled={false} onClick={this.toggleModal}>
                             Add Product
                         </NewButton>
                         <NewButton variant="outlined" disabled={false} parentStyle={{
                             color:"#888888",
                             border:"1px solid #888888"
                         }} onClick={this.toggleRemove}>
                             Remove Product
                         </NewButton>
                    </div>
                </div>):(null)
                }
                {
                    currentActive === 1?(<OrdersTable />):(null)
                }
                {
                    currentActive === 2?(<PendingOrdersTable />):(null)
                }
                
                </div>
                <ModalPage body={(
                    <div className="mdb_modal_body">
                        <FormInput
                        name='product_name'
                        type='text'
                        value={this.state.product_name}
                        onChange={this.handleChange}
                        label='Product Name'
                        required
                        style={{
                            width:"300px"
                        }}
                        />
                        <FormInput
                        name='price'
                        type='number'
                        value={this.state.price}
                        onChange={this.handleChange}
                        label='Basic Price'
                        min="0"
                        required
                        style={{
                            width:"300px"
                        }}
                        />
    
                        <FormInput
                        name="description"
                        type='text'
                        value={this.state.description}
                        onChange={this.handleChange}
                        label='Description'
                        required
                        />
                    </div>
                )} open={this.state.openModal} title="Add Product" submit={this.handleSubmit}
                 close={this.toggleModal} />
                <Snackbar open={this.state.openSnackbar} autoHideDuration={3000} onClose={this.toggleSnackbar}>
                    <Alert onClose={this.toggleSnackbar} iconMapping={{ success: <CheckCircleOutlineIcon style={{
                        color:"#71b3ef"
                    }} fontSize="inherit" /> }} variant="outlined"
                    className={classes.forSnackbar}
                    >
                    <AlertTitle>
                        Added Success
                    </AlertTitle>
                    </Alert>
                </Snackbar>
            </div>
            
        )
    }
};

const mapStateToProps = state =>({
    currentActive : state.admin.admin_active
  })

export default connect(mapStateToProps)(withStyles(useStyle)(AdminPage))