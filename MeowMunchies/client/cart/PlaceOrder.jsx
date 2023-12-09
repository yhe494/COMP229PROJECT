import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import auth from './../auth/auth-helper';
import cart from './cart-helper.js';
import { Redirect } from 'react-router-dom';
import { CardElement, injectStripe } from 'react-stripe-elements';

const useStyles = makeStyles(theme => ({
  subheading: {
    color: 'rgba(88, 114, 128, 0.87)',
    marginTop: '20px',
  },
  checkout: {
    float: 'right',
    margin: '20px 30px',
  },
  error: {
    display: 'inline',
    padding: '0px 10px',
  },
  errorIcon: {
    verticalAlign: 'middle',
  },
}));

const PlaceOrder = (props) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    order: {},
    error: '',
    redirect: false,
    orderId: '',
  });

  const placeOrder = () => {
    // Replace the following line with the actual function that communicates with your server to create an order
    const createOrderOnServer = async () => {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + auth.isAuthenticated().token,
        },
        body: JSON.stringify(props.checkoutDetails),
      });
    
      if (!response.ok) {
        throw new Error('Error creating order');
      }
    
      const data = await response.json();
      return data;
    };

    createOrderOnServer()
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error });
        } else {
          cart.emptyCart(() => {
            setValues({ ...values, orderId: data._id, redirect: true });
          });
        }
      })
      .catch((error) => {
        console.error('Error placing order:', error);
      });
  };

  if (values.redirect) {
    return <Redirect to={'/order/' + values.orderId} />;
  }

  return (
    <span>
      <Typography type="subheading" component="h3" className={classes.subheading}>
        Order details
      </Typography>
      <div className={classes.checkout}>
        {values.error && (
          <Typography component="span" color="error" className={classes.error}>
            <Icon color="error" className={classes.errorIcon}>
              error
            </Icon>
            {values.error}
          </Typography>
        )}
        <Button color="secondary" variant="contained" onClick={placeOrder}>
          Place Order
        </Button>
      </div>
    </span>
  );
};

PlaceOrder.propTypes = {
  checkoutDetails: PropTypes.object.isRequired,
};

export default PlaceOrder;