import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import { Link } from "react-router-dom";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/completedStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCompletedExamples() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
        
            <h4>
             If you don't have an account, join us now and try E-Class 🖤
            </h4>

            <GridItem md={12} className={classes.textCenter}>
          <Link to={"/reg-page"} className={classes.link}>
            <Button color="primary" size="lg" >
              Register 
            </Button>
          </Link>
        </GridItem>
       


          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
