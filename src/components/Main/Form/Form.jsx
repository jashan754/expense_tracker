// import React,{useState,useContext,useEffect} from 'react'
// import { TextField, Typography , Grid,Button,FormControl,InputLabel,Select,MenuItem} from '@material-ui/core';
// import useStyles from './styles';
// import { Expensetrackercontext } from '../../../context/context';
// import {v4 as uuidv4} from 'uuid';
// import { incomeCategories,expenseCategories }from '../../../constants/categories';
// import formatdate from '../../../utils/formatdate';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// const initialstate={
//     amount:'',
//     category:'',
//     type:'Income',
//     date: formatdate(new Date()),
// }

// const Form = () => {
//     const classes= useStyles();
//     const [formData,setFormData]=useState(initialstate);
//     const selectedcat = formData.type === "Income" ? incomeCategories : expenseCategories;

//     const {addtransaction}=useContext(Expensetrackercontext);
//     const create=()=>{
//         const trans={...formData,amount:Number(formData.amount),id:uuidv4()}
//        addtransaction(trans);
//        setFormData(initialstate);
//     }
//     const { transcript, resetTranscript } = useSpeechRecognition();
//     const handleTranscriptChange = (e) => {
//         setFormData({ ...formData, category: e.target.value });
//       };
    
//       useEffect(() => {
//         setFormData((prevFormData) => ({ ...prevFormData, category: transcript }));
//       }, [transcript]);
    
//       const startListening = () => SpeechRecognition.startListening();
    
//       if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
//         return <div>Your browser does not support speech recognition.</div>;
//       }
//   return (<Grid container spacing ={2} >
    
//     <Grid item xs={12}>
//         <Typography variant="subtitle2" align="center" gutterBottom>
//         {transcript}
//         </Typography>

//     </Grid>
//     <Grid item xs={12}>
//         <FormControl fullWidth>
//             <InputLabel>type</InputLabel>
//             <Select value={formData.type}onChange={(e)=>{setFormData({...formData,type:e.target.value})}}>
//                 <MenuItem value="Income">Income</MenuItem>
//                 <MenuItem value="Expense">Expense</MenuItem>
//             </Select>
//         </FormControl>

//     </Grid>
//     <Grid item xs={6}>
//         <FormControl fullWidth>
//             <InputLabel>Category</InputLabel>
//             <Select value={formData.category}onChange={(e)=>{setFormData({...formData,category:e.target.value})}}>
//             {selectedcat && selectedcat.map((item) => (
//               <MenuItem key={item.type} value={item.type}>
//                 {item.type}
//               </MenuItem>
//             ))}
//             </Select>

//             </FormControl>

//     </Grid>
//     <Grid item xs={6} >
//         <TextField type="number" label="Amount" fullWidth value={formData.amount}onChange={(e)=>{setFormData({...formData,amount:e.target.value})}}/>
//     </Grid>
//     <Grid item xs={6} >
//         <TextField type="date" label="Date" fullWidth value={formData.date}onChange={(e)=>{setFormData({...formData,date:formatdate(e.target.value)})}}/>
//     </Grid>
//     <Button className={classes.button} variant='outlined'color="primary" fullWidth onClick={create}> create</Button>
//   </Grid>
   
//   )
// }

// export default Form




// import React, { useState, useContext, useEffect } from 'react';
// import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// import { Expensetrackercontext } from '../../../context/context';
// import { v4 as uuidv4 } from 'uuid';
// import { incomeCategories, expenseCategories } from '../../../constants/categories';
// import formatdate from '../../../utils/formatdate';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

// const useStyles = makeStyles((theme) => ({
//   button: {
//     marginTop: theme.spacing(2),
//   },
// }));

// const initialState = {
//   amount: '',
//   category: '',
//   type: 'Income',
//   date: formatdate(new Date()),
// };

// const Form = () => {
//   const classes = useStyles();
//   const [formData, setFormData] = useState(initialState);
//   const selectedCategories = formData.type === 'Income' ? incomeCategories : expenseCategories;
//   const { addTransaction } = useContext(Expensetrackercontext);

//   const { transcript, resetTranscript } = useSpeechRecognition();
//   const { listening, finalTranscript, reset } = useSpeechRecognition();

//   const createTransaction = () => {
//     const transaction = { ...formData, amount: Number(formData.amount), id: uuidv4() };
//     addTransaction(transaction);
//     setFormData(initialState);
//   };

//   const handleTranscriptChange = (e) => {
//     setFormData({ ...formData, category: e.target.value });
//   };

//   useEffect(() => {
//     setFormData((prevFormData) => ({ ...prevFormData, category: transcript }));
//   }, [transcript]);

//   const startListening = () => SpeechRecognition.startListening();

//   useEffect(() => {
//     if (finalTranscript) {
//       // Mock segment object for the purpose of this example
//       const segment = {
//         intent: { intent: '' }, // Default empty intent
//         entities: [],
//         isFinal: true,
//       };

//       // Mock parsing of finalTranscript
//       if (finalTranscript.toLowerCase().includes('expense')) {
//         segment.intent.intent = 'add_expense';
//       } else if (finalTranscript.toLowerCase().includes('income')) {
//         segment.intent.intent = 'add_income';
//       } else if (finalTranscript.toLowerCase().includes('create')) {
//         segment.intent.intent = 'create_transaction';
//       } else if (finalTranscript.toLowerCase().includes('cancel')) {
//         segment.intent.intent = 'cancel_transaction';
//       }

//       // Mock entity extraction for the purpose of this example
//       const amountMatch = finalTranscript.match(/(\d+)/);
//       if (amountMatch) {
//         segment.entities.push({ type: 'amount', value: amountMatch[0] });
//       }
//       const categoryMatch = finalTranscript.match(/(food|rent|salary|groceries|utilities)/i);
//       if (categoryMatch) {
//         segment.entities.push({ type: 'category', value: categoryMatch[0] });
//       }
//       const dateMatch = finalTranscript.match(/(\d{4}-\d{2}-\d{2})/);
//       if (dateMatch) {
//         segment.entities.push({ type: 'date', value: dateMatch[0] });
//       }

//       // Processing the segment object
//       if (segment.intent.intent === 'add_expense') {
//         setFormData((prev) => ({ ...prev, type: 'Expense' }));
//       } else if (segment.intent.intent === 'add_income') {
//         setFormData((prev) => ({ ...prev, type: 'Income' }));
//       } else if (segment.isFinal && segment.intent.intent === 'create_transaction') {
//         createTransaction();
//       } else if (segment.isFinal && segment.intent.intent === 'cancel_transaction') {
//         setFormData(initialState);
//       }

//       segment.entities.forEach((s) => {
//         const category = `${s.value.charAt(0).toUpperCase()}${s.value.slice(1).toLowerCase()}`;
//         switch (s.type) {
//           case 'amount':
//             setFormData((prev) => ({ ...prev, amount: s.value }));
//             break;
//           case 'category':
//             if (incomeCategories.map((iC) => iC.type).includes(category)) {
//               setFormData((prev) => ({ ...prev, type: 'Income', category }));
//             } else if (expenseCategories.map((iC) => iC.type).includes(category)) {
//               setFormData((prev) => ({ ...prev, type: 'Expense', category }));
//             }
//             break;
//           case 'date':
//             setFormData((prev) => ({ ...prev, date: s.value }));
//             break;
//           default:
//             break;
//         }
//       });

//       if (segment.isFinal && formData.amount && formData.category && formData.type && formData.date) {
//         createTransaction();
//       }
//     }
//   }, [finalTranscript]);


//   if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
//     return <div>Your browser does not support speech recognition.</div>;
//   }

//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={12}>
//         <Typography variant="subtitle2" align="center" gutterBottom>
//           {transcript}
//         </Typography>
//       </Grid>
//       <Grid item xs={12}>
//         <FormControl fullWidth>
//           <InputLabel>Type</InputLabel>
//           <Select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
//             <MenuItem value="Income">Income</MenuItem>
//             <MenuItem value="Expense">Expense</MenuItem>
//           </Select>
//         </FormControl>
//       </Grid>
//       <Grid item xs={6}>
//         <FormControl fullWidth>
//           <InputLabel>Category</InputLabel>
//           <Select value={formData.category} onChange={handleTranscriptChange}>
//             {selectedCategories.map((item) => (
//               <MenuItem key={item.type} value={item.type}>
//                 {item.type}
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>
//       </Grid>
//       <Grid item xs={6}>
//         <TextField
//           type="number"
//           label="Amount"
//           fullWidth
//           value={formData.amount}
//           onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
//         />
//       </Grid>
//       <Grid item xs={6}>
//         <TextField
//           type="date"
//           label="Date"
//           fullWidth
//           value={formData.date}
//           onChange={(e) => setFormData({ ...formData, date: formatdate(e.target.value) })}
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <Button className={classes.button} variant="outlined" color="primary" fullWidth onClick={createTransaction}>
//           Create
//         </Button>
//       </Grid>
//       <Grid item xs={12}>
//         <Button className={classes.button} variant="outlined" color="secondary" fullWidth onClick={startListening}>
//           Start Listening
//         </Button>
//       </Grid>
//     </Grid>
//   );
// };

// export default Form;


// import React, { useState, useContext, useEffect } from 'react';
// import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// import { Expensetrackercontext } from '../../../context/context';
// import { v4 as uuidv4 } from 'uuid';
// import { incomeCategories, expenseCategories } from '../../../constants/categories';
// import formatdate from '../../../utils/formatdate';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

// const useStyles = makeStyles((theme) => ({
//   button: {
//     marginTop: theme.spacing(2),
//   },
// }));

// const initialState = {
//   amount: '',
//   category: '',
//   type: 'Income',
//   date: formatdate(new Date()),
// };
// const Form = () => {
//     const classes = useStyles();
//     const [formData, setFormData] = useState(initialState);
//     const selectedCategories = formData.type === 'Income' ? incomeCategories : expenseCategories;
//     const { addtransaction } = useContext(Expensetrackercontext);
  
//     const { transcript, resetTranscript, finalTranscript } = useSpeechRecognition();
  
//     const createTransaction = () => {
//       const transaction = { ...formData, amount: Number(formData.amount), id: uuidv4() };
//       addtransaction(transaction);
//       setFormData(initialState);
//       resetTranscript(); // reset the transcript after creating the transaction
//       SpeechRecognition.stopListening(); // stop listening after creating the transaction
//     };
  
//     useEffect(() => {
//       if (finalTranscript) {
//         const segment = {
//           intent: { intent: '' },
//           entities: [],
//           isFinal: true,
//         };
  
//         if (finalTranscript.toLowerCase().includes('expense')) {
//           segment.intent.intent = 'add_expense';
//         } else if (finalTranscript.toLowerCase().includes('income')) {
//           segment.intent.intent = 'add_income';
//         } else if (finalTranscript.toLowerCase().includes('create')) {
//           segment.intent.intent = 'create_transaction';
//         } else if (finalTranscript.toLowerCase().includes('cancel')) {
//           segment.intent.intent = 'cancel_transaction';
//         }
  
//         const amountMatch = finalTranscript.match(/(\d+)/);
//         if (amountMatch) {
//           segment.entities.push({ type: 'amount', value: amountMatch[0] });
//         }
//         const categoryMatch = finalTranscript.match(/(food|rent|salary|groceries|utilities)/i);
//         if (categoryMatch) {
//           segment.entities.push({ type: 'category', value: categoryMatch[0] });
//         }
//         const dateMatch = finalTranscript.match(/(\d{4}-\d{2}-\d{2})/);
//         if (dateMatch) {
//           segment.entities.push({ type: 'date', value: dateMatch[0] });
//         }
  
//         if (segment.intent.intent === 'add_expense') {
//           setFormData((prev) => ({ ...prev, type: 'Expense' }));
//         } else if (segment.intent.intent === 'add_income') {
//           setFormData((prev) => ({ ...prev, type: 'Income' }));
//         } else if (segment.isFinal && segment.intent.intent === 'create_transaction') {
//           createTransaction();
//         } else if (segment.isFinal && segment.intent.intent === 'cancel_transaction') {
//           setFormData(initialState);
//           SpeechRecognition.stopListening(); // stop listening after cancelling the transaction
//         }
  
//         segment.entities.forEach((s) => {
//           const category = `${s.value.charAt(0).toUpperCase()}${s.value.slice(1).toLowerCase()}`;
//           switch (s.type) {
//             case 'amount':
//               setFormData((prev) => ({ ...prev, amount: s.value }));
//               break;
//             case 'category':
//               if (incomeCategories.map((iC) => iC.type).includes(category)) {
//                 setFormData((prev) => ({ ...prev, type: 'Income', category }));
//               } else if (expenseCategories.map((iC) => iC.type).includes(category)) {
//                 setFormData((prev) => ({ ...prev, type: 'Expense', category }));
//               }
//               break;
//             case 'date':
//               setFormData((prev) => ({ ...prev, date: formatdate(s.value) }));
//               break;
//             default:
//               break;
//           }
//         });
  
//         if (segment.isFinal && formData.amount && formData.category && formData.type && formData.date) {
//           createTransaction();
//         }
//       }
//     }, [finalTranscript]);

//   const startListening = () => SpeechRecognition.startListening();

//   if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
//     return <div>Your browser does not support speech recognition.</div>;
//   }

//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={12}>
//         <Typography variant="subtitle2" align="center" gutterBottom>
//           {transcript}
//         </Typography>
//       </Grid>
//       <Grid item xs={12}>
//         <FormControl fullWidth>
//           <InputLabel>Type</InputLabel>
//           <Select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
//             <MenuItem value="Income">Income</MenuItem>
//             <MenuItem value="Expense">Expense</MenuItem>
//           </Select>
//         </FormControl>
//       </Grid>
//       <Grid item xs={6}>
//         <FormControl fullWidth>
//           <InputLabel>Category</InputLabel>
//           <Select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
//             {selectedCategories.map((item) => (
//               <MenuItem key={item.type} value={item.type}>
//                 {item.type}
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>
//       </Grid>
//       <Grid item xs={6}>
//         <TextField
//           type="number"
//           label="Amount"
//           fullWidth
//           value={formData.amount}
//           onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
//         />
//       </Grid>
//       <Grid item xs={6}>
//         <TextField
//           type="date"
//           label="Date"
//           fullWidth
//           value={formData.date}
//           onChange={(e) => setFormData({ ...formData, date: formatdate(e.target.value) })}
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <Button className={classes.button} variant="outlined" color="primary" fullWidth onClick={createTransaction}>
//           Create
//         </Button>
//       </Grid>
//       <Grid item xs={12}>
//         <Button className={classes.button} variant="outlined" color="secondary" fullWidth onClick={startListening}>
//           Start Listening
//         </Button>
//       </Grid>
//     </Grid>
//   );
// };

// export default Form;


import React, { useState, useContext, useEffect } from 'react';
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Expensetrackercontext } from '../../../context/context';
import { v4 as uuidv4 } from 'uuid';
import { incomeCategories, expenseCategories } from '../../../constants/categories';
import formatdate from '../../../utils/formatdate';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Customisedsnack from '../../Snackbar/Snackbar';

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(2),
  },
}));

const initialState = {
  amount: '',
  category: '',
  type: 'Income',
  date: formatdate(new Date()),
};

const Form = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState(initialState);
  const selectedCategories = formData.type === 'Income' ? incomeCategories : expenseCategories;
  const { addtransaction } = useContext(Expensetrackercontext);
  const [open,setOpen]=useState(false)
  const { transcript, resetTranscript, finalTranscript } = useSpeechRecognition();

  const createTransaction = () => {
    const transaction = { ...formData, amount: Number(formData.amount), id: uuidv4() };
    setOpen(true);
    addtransaction(transaction);
    setFormData(initialState);
    resetTranscript(); 
   // reset the transcript after creating the transaction
    SpeechRecognition.stopListening(); // stop listening after creating the transaction
  };

  useEffect(() => {
    if (finalTranscript) {
      const segment = {
        intent: { intent: '' },
        entities: [],
        isFinal: true,
      };
  
      if (finalTranscript.toLowerCase().includes('expense')) {
        segment.intent.intent = 'add_expense';
      } else if (finalTranscript.toLowerCase().includes('income')) {
        segment.intent.intent = 'add_income';
      } else if (finalTranscript.toLowerCase().includes('create')) {
        segment.intent.intent = 'create_transaction';
      } else if (finalTranscript.toLowerCase().includes('cancel')) {
        segment.intent.intent = 'cancel_transaction';
      }
  
      const amountMatch = finalTranscript.match(/(\d+)/);
      if (amountMatch) {
        segment.entities.push({ type: 'amount', value: amountMatch[0] });
      }
  
      const categoryMatch = finalTranscript.match(new RegExp(`(${incomeCategories.map(iC => iC.type).join('|')}|${expenseCategories.map(eC => eC.type).join('|')})`, 'i'));
      if (categoryMatch) {
        segment.entities.push({ type: 'category', value: categoryMatch[0].toLowerCase() });
      }
  
      const dateMatch = finalTranscript.match(/(monday|tuesday|wednesday|thursday|friday|saturday|sunday)/i);
      if (dateMatch) {
        segment.entities.push({ type: 'date', value: dateMatch[0] });
      }
  
      if (segment.intent.intent === 'add_expense') {
        setFormData((prev) => ({ ...prev, type: 'Expense' }));
      } else if (segment.intent.intent === 'add_income') {
        setFormData((prev) => ({ ...prev, type: 'Income' }));
      } else if (segment.isFinal && segment.intent.intent === 'create_transaction') {
        createTransaction();
      } else if (segment.isFinal && segment.intent.intent === 'cancel_transaction') {
        setFormData(initialState);
        SpeechRecognition.stopListening(); // stop listening after cancelling the transaction
      }
  
      segment.entities.forEach((s) => {
        switch (s.type) {
          case 'amount':
            setFormData((prev) => ({ ...prev, amount: s.value }));
            break;
          case 'category':
            const matchedCategory = `${s.value.charAt(0).toUpperCase()}${s.value.slice(1).toLowerCase()}`;
            if (incomeCategories.map((iC) => iC.type.toLowerCase()).includes(s.value.toLowerCase())) {
              setFormData((prev) => ({ ...prev, type: 'Income', category: matchedCategory }));
            } else if (expenseCategories.map((eC) => eC.type.toLowerCase()).includes(s.value.toLowerCase())) {
              setFormData((prev) => ({ ...prev, type: 'Expense', category: matchedCategory }));
            }
            break;
          case 'date':
            const currentDate = new Date();
            const dayOfWeek = s.value.toLowerCase();
            const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
            const today = currentDate.getDay();
            const targetDay = daysOfWeek.indexOf(dayOfWeek);
            const daysUntil = (targetDay - today + 7) % 7;
            const targetDate = new Date(currentDate.setDate(currentDate.getDate() + daysUntil));
            setFormData((prev) => ({ ...prev, date: formatdate(targetDate) }));
            break;
          default:
            break;
        }
      });
  
      // Create the transaction if all necessary data is present
     
    }
  }, [finalTranscript]);
  useEffect(() => {
    if (formData.amount && formData.category && formData.type && formData.date) {
      createTransaction();
    }
  }, [formData]);
  const startListening = () => {
    resetTranscript(); // Reset the transcript before starting to listen
    SpeechRecognition.startListening();
  };

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <div>Your browser does not support speech recognition.</div>;
  }

  return (
    <Grid container spacing={2}>
        <Customisedsnack open={open} setOpen={setOpen}/>
      <Grid item xs={12}>
        <Typography variant="subtitle2" align="center" gutterBottom>
          {transcript}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
            {selectedCategories.map((item) => (
              <MenuItem key={item.type} value={item.type}>
                {item.type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField
          type="number"
          label="Amount"
          fullWidth
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          type="date"
          label="Date"
          fullWidth
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: formatdate(e.target.value) })}
        />
      </Grid>
      <Grid item xs={12}>
        <Button className={classes.button} variant="outlined" color="primary" fullWidth onClick={createTransaction}>
          Create
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button className={classes.button} variant="outlined" color="secondary" fullWidth onClick={startListening}>
          Start Listening
        </Button>
      </Grid>
    </Grid>
  );
};

export default Form;
