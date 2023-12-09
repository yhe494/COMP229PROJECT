/*import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import unicornbikeImg from './../assets/images/unicornbike.jpg'

const useStyles = makeStyles(theme => ({ 
card: {
maxWidth: 600, 
margin: 'auto',
marginTop: theme.spacing(5) 
},
title: {
padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px 
${theme.spacing(2)}px`,
color: theme.palette.openTitle 
},
media: { 
minHeight: 400
} 
}))*/

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import acana from "./../assets/images/acana.png";
import logo from "./../assets/images/logo.jpg";
import Grid from "@material-ui/core/Grid";
import Orijen from "./../assets/images/Orijen.png";
import Orijen2 from "./../assets/images/Orijen2.png";
import fancyfeast from "./../assets/images/FancyFeast.jpg";
import hill from "./../assets/images/HillsScienceDiet.jpg";
import royal from "./../assets/images/royal.jpg";
import merrick from "./../assets/images/Merrick.jpg";
import naturelogic from "./../assets/images/NaturesLogic.jpg";
import vetdiet from "./../assets/images/Vetdiet.jpg";
import earthborn from "./../assets/images/Earthborn.jpg";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 600,
    margin: "auto",
    marginTop: theme.spacing(5),
  },

  media: {
    minHeight: 400,
  },
  gridMedia: {
    minHeight: 300,
    minWidth: 200,
    backgroundSize: "contain",
  },
  title: {
    padding: theme.spacing(3, 2.5, 2),
    color: theme.palette.openTitle,
    fontWeight: "bold",
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={logo} title="logo" />
      </Card>

      <Container>
        <Typography variant="h5" className={classes.title}>
          Hot Products
        </Typography>

        <Grid container direction="row" spacing={4}>
          <Grid item xs={3}>
            <Link to = "product/6573b77e4ebd427646d7a3e3">
            <Card className={classes.card}>
              <CardMedia
                className={classes.gridMedia}
                image={acana}
                title="acana"
              />
            </Card>
            </Link>
          </Grid>
          <Grid item xs={3}>
            <Link to = "product/6573b7de4ebd427646d7a471">
            <Card className={classes.card}>
              <CardMedia
                className={classes.gridMedia}
                image={Orijen}
                title="orijen"
              />
            </Card>
            </Link>
          </Grid>
          <Grid item xs={3}>
            <Link to = "product/6573b7ef4ebd427646d7a493">
            <Card className={classes.card}>
              <CardMedia
                className={classes.gridMedia}
                image={Orijen2}
                title="orijen2"
              />
            </Card>
            </Link>
          </Grid>
          <Grid item xs={3}>
          <Link to = "product/6573b7ff4ebd427646d7a4b1">
            <Card className={classes.card}>
              <CardMedia
                className={classes.gridMedia}
                image={royal}
                title="royal"
              />
            </Card>
            </Link>
          </Grid>
          <Grid item xs={3}>
            <Link to = "product/6573b7984ebd427646d7a401">
            <Card className={classes.card}>
              <CardMedia
                className={classes.gridMedia}
                image={fancyfeast}
                title="Fancy Feast"
              />
            </Card>
            </Link>
          </Grid>
          <Grid item xs={3}>
            <Link to = "product/6573b7a54ebd427646d7a415">
            <Card className={classes.card}>
              <CardMedia
                className={classes.gridMedia}
                image={hill}
                title="Hill's Science Diet"
              />
            </Card>
            </Link>
          </Grid>
          <Grid item xs={3}>
            <Link to = "product/6573b7ba4ebd427646d7a43f">
            <Card className={classes.card}>
              <CardMedia
                className={classes.gridMedia}
                image={merrick}
                title="Merrick"
              />
            </Card>
            </Link>
          </Grid>
          <Grid item xs={3}>
            <Link to = "product/6573b7cb4ebd427646d7a457">
            <Card className={classes.card}>
              <CardMedia
                className={classes.gridMedia}
                image={naturelogic}
                title="Nature's Logic"
              />
            </Card>
            </Link>
          </Grid>


        </Grid>
      </Container>
    </div>
  );
}

/*const MyComponent = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h6" className={classes.title}>
          Card Title
        </Typography>
        <CardMedia
          className={classes.media}
          image={unicornbikeImg}
          title="Unicorn Bike"
        />
        <Typography variant="body2" component="p">
          Card content goes here.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MyComponent;*/
