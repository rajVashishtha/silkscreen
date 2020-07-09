import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import {Collapse, IconButton} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CardContent from '@material-ui/core/CardContent';  
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import Typography from '@material-ui/core/Typography';

const useStyles = {
  root: {
      width:"400px",
      marginTop:"20px"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 20,
  },
  pos: {
    marginTop: 10,
    marginBottom: 12,
  },
  icon:{
      float:"right"
  }
};

class OutlinedCard extends React.Component {
    state={
        expanded : false
    }
    changeExpand = ()=>{
        this.setState({
            expanded:!this.state.expanded
        })
    };
    removeCard = (event) =>{
      console.log(event.target.id)
    }
    render(){
    const {classes, smallDesc, mainDesc, name, deletable, pid} = this.props
  return (
    <Card className={classes.root} variant="outlined">
      
      <CardContent>
        {
          deletable ?(<IconButton id={pid} style={{
            float:"right"
          }} onClick={this.removeCard}>
            <DeleteOutlineOutlinedIcon style={{
              color:"#71b5ef"
            }} id={`i-${pid}`} onClick={this.removeCard} />
          </IconButton>):(null)
        }
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Product
        </Typography>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Description
        </Typography>
        <Collapse in={!this.state.expanded} timeout="auto" unmountOnExit>
            <Typography variant="body2" component="p">
            {smallDesc}
            </Typography>
        </Collapse>
        <IconButton onClick={this.changeExpand} className={classes.icon}>
            <ExpandMoreIcon onClick={this.changeExpand}  />
        </IconButton>
      </CardContent>
      <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {mainDesc}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
}
export default withStyles(useStyles)(OutlinedCard)
