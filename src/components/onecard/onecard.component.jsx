import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

import Typography from '@material-ui/core/Typography';
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import NewButton from '../material/button.component'
import './onecard.style.css'
const removeHover = {
    "&:hover": {
        backgroundColor:"transparent",
        cursor:'alias'
    }
}
const styles = 
{

media: {
  height: 0,
  paddingTop: '56.25%', // 16:9,
  marginTop:'30'
}
  };
// const showMsg= () =>{
//     $(".modal").fadeIn().fadeOut(1000)
// }
const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    marginTop: 50,
  },
  media: {
    height: 350,
  },
});
const theme = createMuiTheme({
    props:{
        MuiButtonBase:{
            disableRipple:true,
            disabled : true
        }
    }
})

function OneCard({imageUrl,link, bannerName, bannerDesc, currentUser, match, history}) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
        <MuiThemeProvider theme={theme}>
      <CardActionArea classes={{
          focusVisible : "disabled"
      }}
      style={removeHover}
      >
        <CardMedia
        style={styles.media}
          className={classes.media}
          image={process.env.PUBLIC_URL + imageUrl}
          title="Image Avatar"

        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {bannerName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {bannerDesc}
          </Typography>
        </CardContent>
      </CardActionArea>
      </MuiThemeProvider>
      <CardActions>
        {/* {
          currentUser != null ? (<NewButton size="small"  variant="outlined" >
          Add to Cart
        </NewButton>) :
        (
          <NewButton size="small" variant="outlined"  className="disable" onClick={showMsg}>
          Add to Cart
        </NewButton>
        )
        } */}
        
        <NewButton size="small" variant="outlined" onClick={()=>history.push(`${match.url}${link}`)}>
          Learn More
        </NewButton>
      </CardActions>
    </Card>
  );
}

const mapStateToProps = state =>({
  currentUser : state.user.currentUser
})
export default withRouter(connect(mapStateToProps)(OneCard));

