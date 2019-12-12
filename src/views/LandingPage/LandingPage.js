import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import { Link } from "react-router-dom";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import ProductSection from "./Sections/ProductSection.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Explore from "@material-ui/icons/Explore";
import styles1 from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks2.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/faces/christian.jpg";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);
const useStyles1 = makeStyles(styles1);
export default function LandingPage(props) {
  const classes = useStyles();
  const classes1 = useStyles1();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div>

      
<Header
        color="transparent"
        brand="E-CLASS"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
         <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
          
            </GridContainer>



    
      <div className={classNames(classes.main)}>
        <div className={classes.container}>
          <ProductSection />
      
      
        </div>
      </div>
      <Footer />
    </div>
    </div>
    </div>
    </div>
  );
}
