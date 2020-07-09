import React, { Component } from 'react';
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import './mdbmodal.style.scss'
import NewButton from '../material/button.component';
class ModalPage extends Component {
  state = {
    modal: false,
  };
  render() {
      const {open, title, close, body, submit} = this.props
    return (
      <MDBContainer>
        <MDBModal isOpen={open} className="mdb_modal" >
        <MDBModalHeader>
            <CloseOutlinedIcon style={{
                float:"right",
                cursor:"pointer"
            }} onClick={close} />
            {title}
            </MDBModalHeader>
          <MDBModalBody>
            {body}
          </MDBModalBody>
          <MDBModalFooter className="mdb_modal_footer">
            <NewButton variant="outlined" parentStyle={{
                 color:"#888888",
                 border:"1px solid #888888",
                 marginRight:"10px"
            }} onClick={close} >
                Close
            </NewButton>
            <NewButton variant="contained" onClick={submit}>
                Save
            </NewButton>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}
export default ModalPage;