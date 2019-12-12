/*eslint-disable*/
import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import { Link } from "react-router-dom";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
   
   <Link to={"/login-page"} className={classes.link}>
        <Button
       
          color="white"
          target="_blank"
          className={classes.navLink}
        >
         Logout
        </Button>
</Link>
 
  
    
    </List>
  );
}
