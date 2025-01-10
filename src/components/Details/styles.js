// import { makeStyle } from "@material-ui/core";
// import { BorderBottom } from "@material-ui/icons";
// export default makeStyle(() => ({
//   income: {
//     BorderBottom: "10px solid rgba(0,255,0,0.5)",
//   },
//   expense: {
//     BorderBottom: "10px solid rgba(255,0,0,0.5) ",
//   },
// }));
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  income: {
    borderBottom: "10px solid rgba(0,255,0,0.5)",
  },
  expense: {
    borderBottom: "10px solid rgba(255,0,0,0.5)",
  },
}));
