import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleExpansionPanel({heading, items}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel elevation={0}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon style={{
            color:"#7AAFF7"
        }} />}
          aria-controls="panel1a-content"
          id={`${heading}-id`}
        >
          <Typography className={classes.heading} style={{
                color:"#7AAFF7"
            }}>{heading}</Typography>
        </ExpansionPanelSummary>
        {
            items.map((value)=>(
                <ExpansionPanelDetails key={value} style={{
                    color:"#7AAFF7"
                }}>
                    <Typography>
                        {value}
                    </Typography>
                </ExpansionPanelDetails>
            ))
        }
      </ExpansionPanel>
    </div>
  );
}
