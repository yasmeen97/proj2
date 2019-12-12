import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
import { Link } from "react-router-dom";
import styles2 from "assets/jss/material-kit-react/views/landingPage.js";
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Explore from "@material-ui/icons/Explore";
import styles1 from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
//import Button from '@material-ui/core/Button';
import profile from "assets/img/faces/christian.jpg";
import HeaderLinks from "components/Header/HeaderLinks2.js";
const dashboardRoutes = [];

const useStyles = makeStyles(styles);
const useStyles1 = makeStyles(styles1);
const useStyles2 = makeStyles(styles2);
export default function LandingPage(props) {
  const classes = useStyles();
  const classes1 = useStyles1();
  const classes2 = useStyles2();
  const { ...rest } = props;  



  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
  <Header
        color="transparent"
        brand="E-CLASS"
        rightLinks={<HeaderLinks />}
        fixed
     
        {...rest}
      />
      <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
             
              </GridItem>
            </GridContainer>

      <div className={classNames(classes.main)}>
        <div className={classes2.container}>
       
        <GridContainer>
        <GridItem xs={12} sm={12} md={3}> 
        <Card className={classes2.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="300"
          image="https://i2.wp.com/www.quicklook4u.com/bawaba/wp-content/uploads/2019/01/PDF-1.jpg?fit=480%2C480&ssl=1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2"  textAlign="center">
        Chapter1
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           
          </Typography>
        </CardContent>
      </CardActionArea>
      <Link to={"/pdf"} className={classes2.link}>
      <CardActions>
      
        <Button size="small" color="primary">
         View
        </Button>
       
        <Button size="small" color="primary">
         Delete
        </Button>
      </CardActions> </Link>
    </Card>
    </GridItem>
          <GridItem xs={12} sm={12} md={3}>
          <Card className={classes2.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="300"
          image="https://i2.wp.com/www.quicklook4u.com/bawaba/wp-content/uploads/2019/01/PDF-1.jpg?fit=480%2C480&ssl=1"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
         Examples
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
      
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to={"/pdf"} className={classes2.link}>
        <Button size="small" color="primary">
         View
        </Button>
        </Link>
        <Button size="small" color="primary">
         Delete
        </Button>
      </CardActions>
    </Card>
          </GridItem>




          <GridItem xs={12} sm={12} md={3}>
          <Card className={classes2.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="300"
          image="https://cdn0.iconfinder.com/data/icons/documents-files/100/document_file_UI_Text_Word_upload-512.png"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Add new file
          </Typography>
        
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to={"/co"} className={classes.link}>
        </Link>
      </CardActions>
    </Card>
          </GridItem>
        



        
        </GridContainer>
   
        </div>
      </div>
   
    </div>
   
    </div>
    </div>
    </div>
  );
}
