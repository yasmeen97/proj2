import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';


import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import profile from "assets/img/faces/christian.jpg";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import logo from 'assets/img/ds.jpg';
import { Link } from "react-router-dom";
const useStyles = makeStyles(styles);
export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>

     
      
      
      <div>
        <GridContainer>
        <GridItem xs={12} sm={12} md={4}> 
        <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="300"
          image="https://www.seragpsych.com/wp-content/uploads/2014/11/Laptop-on-books.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          AI 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           id: 19887749
           
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           Dr.Emad Natsheh
           
          </Typography>
        </CardContent>
      </CardActionArea>
      <Link to={"/co"} className={classes.link}>
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
          <GridItem xs={12} sm={12} md={4}>
          <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="300"
          image="https://www.seragpsych.com/wp-content/uploads/2014/11/Laptop-on-books.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Digital 1
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
      id : 27448292
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Dr.Emad Natsheh
           
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to={"/co"} className={classes.link}>
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
          <GridItem xs={12} sm={12} md={4}>
          <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="300"
          image="https://www.seragpsych.com/wp-content/uploads/2014/11/Laptop-on-books.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           C Programming
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            id : 4442923
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Dr.Emad Natsheh
           
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to={"/co"} className={classes.link}>
        <Button size="small" color="primary">
         View
        </Button>
        </Link>
        <Button size="small" color="primary">
          delete
        </Button>
      </CardActions>
    </Card>
          </GridItem>
        
        </GridContainer>


     
      </div>
    </div>
  );
}
