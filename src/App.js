// import React from "react";
// import { Grid } from "@material-ui/core";
// import useStyles from "./styles";
// import Main from "./components/Main/Main";

// import Details from "./components/Details/Details";
// import styles from "./styles";
// const App = () => {
//   const classes = useStyles();
//   return (
//     <div>
//       <Grid
//         className="classes.grid"
//         container
//         spacing={0}
//         alignItems="center"
//         justify="center"
//         style={{ height: "100vh" }}
//       >
//         <Grid item xs={9} sm={3}>
//           <Details title="income" />
//         </Grid>
//         <Grid item xs={12} sm={3}>
//           <Main />
//         </Grid>
//         <Grid item xs={9} sm={3}>
//           <Details title="expenses" />
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default App;
// import React,{useRef,useEffect} from "react";
// import { Grid } from "@material-ui/core";
// import useStyles from "./styles";
// import Main from "./components/Main/Main";
// import Details from "./components/Details/Details";
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// import SpeechRecognitionComponent from './SpeechRecognitionComponent'; // Import the new component


// const App = () => {  const classes = useStyles();
//   const main = useRef(null);
//   const { transcript } = useSpeechRecognition();

//   const executeScroll = () => {
//     if (main.current) {
//       main.current.scrollIntoView();
//     }
//   };

//   useEffect(() => {
//     if (transcript !== '') {
//       executeScroll();
//     }
//   }, [transcript]);


//   const startListening = () => {
//     SpeechRecognition.startListening();
//   };

//   useEffect(() => {
//     return () => {
//       SpeechRecognition.stopListening();
//     };
//   }, []);
 
//   return (
//     <div>
//       <Grid
//         className={classes.grid}
//         container
//         spacing={3} // Adjusted spacing for better layout
//         alignItems="center"
//         justifyContent="center" // Corrected justify to justifyContent
//         style={{ height: "100vh" }}
//       >
//         <Grid item xs={12} sm={4}>
//           <Details title="Income" />
//         </Grid>
//         <Grid item xs={12} sm={3}>
//           <Main />
//         </Grid>
//         <Grid item xs={12} sm={4}>
//           <Details title="Expense" />
//         </Grid>
//         <Grid item xs={12} sm={4} className={classes.last}>
//           <button onClick={startListening}>Start Listening</button>
//           <p>{transcript}</p>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default App;



// import React, { useRef, useEffect } from 'react';
// import { Grid, IconButton } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// import Main from './components/Main/Main';
// import Details from './components/Details/Details';
// import { useSpeechRecognition } from 'react-speech-recognition';
// import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'; // Import the recording icon

// const useStyles = makeStyles((theme) => ({
//   desktop: {
//     [theme.breakpoints.up('sm')]: {
//       display: 'none',
//     },
//   },
//   mobile: {
//     [theme.breakpoints.down('sm')]: {
//       display: 'none',
//     },
//   },
//   main: {
//     [theme.breakpoints.up('sm')]: {
//       paddingBottom: '5%',
//     },
//   },
//   last: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     [theme.breakpoints.down('sm')]: {
//       marginBottom: theme.spacing(3),
//       paddingBottom: '200px',
//     },
//   },
//   grid: {
//     '& > *': {
//       margin: theme.spacing(2),
//     },
//   },
//   iconButton: {
//     backgroundColor: theme.palette.primary.main,
//     color: theme.palette.common.white,
//     padding: theme.spacing(2),
//     borderRadius: '50%',
//     '&:hover': {
//       backgroundColor: theme.palette.primary.dark,
//     },
//   },
// }));

// const App = () => {
//   const classes = useStyles();
//   const main = useRef(null);
//   const { transcript, startListening, stopListening } = useSpeechRecognition();

//   const executeScroll = () => {
//     if (main.current) {
//       main.current.scrollIntoView();
//     }
//   };

//   useEffect(() => {
//     if (transcript !== '') {
//       executeScroll();
//     }
//   }, [transcript]);

//   useEffect(() => {
//     return () => {
//       stopListening();
//     };
//   }, [stopListening]);

//   return (
//     <div>
//       <Grid
//         className={classes.grid}
//         container
//         spacing={3} // Adjusted spacing for better layout
//         alignItems="center"
//         justifyContent="center" // Corrected justify to justifyContent
//         style={{ height: '100vh' }}
//       >
//         <Grid item xs={12} sm={4}>
//           <Details title="Income" />
//         </Grid>
//         <Grid item xs={12} sm={3}>
//           <Main />
//         </Grid>
//         <Grid item xs={12} sm={4}>
//           <Details title="Expense" />
//         </Grid>
//         <Grid item xs={12} sm={4} className={classes.last}>
//           <IconButton className={classes.iconButton} onClick={startListening}>
//             <FiberManualRecordIcon fontSize="large" />
//           </IconButton>
//           <p>{transcript}</p>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default App;




import React, { useRef, useEffect } from 'react';
import { Grid, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Main from './components/Main/Main';
import Details from './components/Details/Details';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles((theme) => ({
  desktop: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  mobile: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  main: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: '5%',
    },
  },
  last: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(3),
      paddingBottom: '200px',
    },
  },
  grid: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
  iconButton: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: theme.spacing(2),
    borderRadius: '50%',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

const App = () => {
  const classes = useStyles();
  const main = useRef(null);
  const { transcript, resetTranscript } = useSpeechRecognition();

  const executeScroll = () => {
    if (main.current) {
      main.current.scrollIntoView();
    }
  };

  useEffect(() => {
    if (transcript !== '') {
      executeScroll();
    }
  }, [transcript]);

  const startListening = () => {
    resetTranscript();
    SpeechRecognition.startListening({ continuous: true });
  };

  useEffect(() => {
    SpeechRecognition.stopListening();
    return () => {
      SpeechRecognition.stopListening();
    };
  }, []);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <div>Your browser does not support speech recognition.</div>;
  }

  return (
    <div>
      <Grid
        className={classes.grid}
        container
        spacing={3}
        alignItems="center"
        justifyContent="center"
        style={{ height: '100vh' }}
      >
        <Grid item xs={9} sm={3} className={classes.mobile}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={9} sm={3} className={classes.main}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.desktop}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={9} sm={3} className={classes.mobile}>
          <Details title="Expense" />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.last}>
          <IconButton className={classes.iconButton} onClick={startListening}>
            <FiberManualRecordIcon fontSize="large" />
          </IconButton>
          <p>{transcript}</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
