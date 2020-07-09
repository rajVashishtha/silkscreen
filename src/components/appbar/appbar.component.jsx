import React from 'react';
import { makeStyles, useTheme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import {Link} from 'react-router-dom'
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
import SimpleExpansionPanel from '../expansion panel/expansionPanel.component'

const drawerWidth = "240"
const useStyles = makeStyles((theme) => ({
    hover:{
        color:"#7AAFF7",
        "&:hover":{
            backgroundColor :"#EAE8E8"
        }
    },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    letterSpacing:"2px"
  },
  theme:{
      backgroundColor:"#7AAFF7",
      color:"white"
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  fontIncrease:{
      fontSize:"10px"
  },
  forLink :{
      textDecoration:"none",
      color:"white"
  }
  ,
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }
}));

export default function ButtonAppBar({pageName, currentUser, signOut, displayModal, logo}) {
  const classes = useStyles();
  const theme = useTheme();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [open, setOpen] = React.useState(false);
  return (
    <div className={classes.root}>
        <CssBaseline />
      <AppBar position="static" className={classes.theme}>
        <Toolbar>
          <IconButton color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link className={classes.forLink} to="/" >{pageName}</Link>
          </Typography>
          {
              currentUser === null ? (
                <Link className={classes.forLink} to="/signin"><Button color="inherit">Sign Up</Button></Link>
              ):
              (<Button color="inherit" onClick={signOut}>Sign Out</Button>)
          }
          <Button color="inherit">{logo}</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon style={{
                color:"#7AAFF7"
            }} /> : <ChevronRightIcon style={{
                color:"#7AAFF7"
            }} />}
          </IconButton>
        </div>
        <Divider />
        <List>
            <SimpleExpansionPanel heading="Products" items={["Adhesive Banner","Advertising Banner"]}/>
          {['Contact', 'Why us ?', 'Quotes'].map((text, index) => (
            <ListItem button key={text} className={classes.hover}
            id={index === 1 ? "myBtn" : ""}
            onClick={
               (event)=>{
                   if(index !==2){
                        displayModal(event)
                   }
                   handleDrawerClose()
               }

            }>
              {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </Drawer>
    </div>
  );
}
