import React from "react";
// plugin that creates slider
import Slider from "nouislider";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


import GridItem from "components/Grid/GridItem.js";
//import Pdf from "components/Pdf/pdff.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";
import { Link } from "react-router-dom";
import './App.css';
import Button from "components/CustomButtons/Button.js";
import logo from 'assets/img/pp.jpg';
import GridContainer from "components/Grid/GridContainer.js";

const useStyles = makeStyles(styles);



export default function SectionBasics() {
  const classes = useStyles();

 
  

  return (
    <div className={classes.sections}>
      <div className={classes.container}>
      <div className={classes.title}>
              <h1>What is E-CLASS?</h1>
              </div>
        
         
          <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
           
                <form className={classes.form}>
                 

            <h4>
              E-class app saves teachers’ time,
                 effort and the day 
                to day hustle and bustle of 
                communicating with students by powering 
                them with a free simple tool for
                 them and their students 
                to connect and share on the go
            </h4>
            </form>
            </GridItem>
            </GridContainer>
          </div>
          <GridContainer justify="center">
          <img   flex="1" 
    
                  justify-content= "center"
                  align-items= "center"
                 src={logo} width="1000" height="500" />
                 </GridContainer>
      
      
       
       
        
    
      </div>
    </div>
  );
}
