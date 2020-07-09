import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';

import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { connect } from 'react-redux';
import setAdminActive from '../../redux/admin/admin.action'

const drawerWidth = 240;

const useStyles ={
  drawer: {
    width: drawerWidth - 20,
    flexShrink: 0,
    zIndex:9,
    position:"absolute",
    paddingTop:"10px"
  },
  drawerPaper: {
    width: drawerWidth - 20,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  active:{
    backgroundColor:"#7AAFF7",
    color:"white"
  }
};

class ClippedDrawer extends React.Component{
  changeActive = (active)=>{
    const {setAdminActive} = this.props
    setAdminActive(active)
  }

  render(){
    const {classes, currentActive} = this.props

    

    return (
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {['Products', 'Manage Orders', 'Pending Orders', 'Chats'].map((text, index) => (
              <ListItem button key={text} className={index === currentActive ? (classes.active):(null)}
              onClick={()=>{this.changeActive(index)}}
              >
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
        </div>
      </Drawer>

  );
  }
}

const mapStateToProps = state =>({
  currentActive : state.admin.admin_active
})
const mapDispatchToProps = dispatch =>({
  setAdminActive : active => dispatch(setAdminActive(active))
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(useStyles)(ClippedDrawer))