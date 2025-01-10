import React,{useContext} from 'react';
import{Card,CardHeader,CardContent,Typography,Grid,Divider} from '@material-ui/core';
 import useStyles from "./styles"; 
 import Form from './Form/Form';
 import List from './List/List'
 import { Expensetrackercontext } from '../../context/context';

const Main = () => {
    const classes=useStyles();
    const {balance}= useContext(Expensetrackercontext)
  return (
    <Card className={classes.root}>
        <CardHeader title="Expense Tracker" subheader="Utilising React Speech Recognition"/>
        <CardContent> 
            <Typography align='center' variant='h5'>Total Balance: ${balance}</Typography>
            <Typography variant='subtitle1' style={{lineHeight:'1.5em',marginTop:'20px'}}> Try saying : Add income for $100 in category salary for monday</Typography>
       <Divider/>
       <Form/>
        </CardContent>
        <CardContent className={classes.cartContent}>
        <Grid container spacing={2}>
            <Grid item xs={12}>
              <List/>

            </Grid>
        </Grid>
        </CardContent>
    </Card>
    
  )
}

export default Main