import React,{useContext} from 'react'
import{List as MUIList, ListItem,ListItemAvatar,ListItemText,Avatar,ListItemSecondaryAction,IconButton,Slide} from '@material-ui/core';
import {Delete ,MoneyOff} from '@material-ui/icons';
import useStyles from './styles';
// import {format} from 'date-fns/format';
import { Expensetrackercontext } from '../../../context/context';
const List = () => {
  const {deletetransaction,transactions}=useContext(Expensetrackercontext);
    const classes=useStyles();
    console.log(global);
    
    return (
        <MUIList dense={false} className={classes.list}>
          {transactions.map((transaction) => (
            <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                    <MoneyOff />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`} />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete" onClick={()=>{deletetransaction(transaction.id)}}>
                    <Delete />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </Slide>
          ))}
        </MUIList>
      );
}

export default List