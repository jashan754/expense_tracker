import React from "react";
import { Snackbar } from "@material-ui/core";
import  MuiAlert from '@material-ui/lab/Alert'
import useStyles from './styles'



const Customisedsnack = ({open,setOpen}) => {
  // eslint-disable-next-line
    const classes=useStyles();
    const handle=(event,reason)=>{
        if(reason==='clickaway') return ;
        setOpen(false)
    };
  return (
    <div className={classes.root}>
        <Snackbar
            anchorOrigin={{vertical:'top',horizontal:'right'}}
            open={true}
            autoHideDuration={3000}
            onClose={handle}
            >
                <MuiAlert onClose={handle} severity="success" elevation={6} variant="filled">
                    Transaction successfully created</MuiAlert>
        </Snackbar>
    </div>
  )
}

export default Customisedsnack;