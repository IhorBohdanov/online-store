import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';

import "./ProductsList.scss";

import { ProductCard } from '../ProductCard'

export function ProductsList(props) {
  let { products } = props
  return (
    <Grid container spaces={2}>
      {
        products.map(product => (<Grid item xs={4} key={product.id}><ProductCard product={product}/></Grid>))
      }
    </Grid>
  );
}

ProductsList.propTypes = {};
