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

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import unicornbikeImg from './../assets/images/unicornbikeImg.jpg';
   

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    marginTop: theme.spacing(5),
  },
  title: {
    padding: theme.spacing(3, 2.5, 2),
    color: theme.palette.openTitle,
  },
  media: {
    minHeight: 400,
  },
}));

export default function Home(){ 
const classes = useStyles()
return (
<Card className={classes.card}>
  <Typography variant="h6" className={classes.title}>Meow Munchies</Typography>
    <h2>Welcome to Meow Munchies!</h2>
    <p>Explore our wide range of high-quality pet food products for your furry friends.</p>

<CardMedia className={classes.media}
image={unicornbikeImg} title="Unicorn Bicycle"/>
<CardContent>
<div class="product-card">
            <img src="pet_food1.jpg" alt="Pet Food 1"></img>
            <h3>Premium Cat Food</h3>
            <p>Healthy and delicious cat food for your feline friend.</p>
            <p>$15.99</p>
            <button>Add to Cart</button>
        </div>

        <div class="product-card">
            <img src="pet_food2.jpg" alt="Pet Food 2"></img>
            <h3>Nutritious Dog Food</h3>
            <p>Specially formulated dog food to keep your dog happy and healthy.</p>
            <p>$19.99</p>
            <button>Add to Cart</button>
        </div>
</CardContent>
</Card> 
)
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

