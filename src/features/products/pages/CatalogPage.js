import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from "react-query";
import { getList } from "../api/ProductsAPI";

import Grid from '@material-ui/core/Grid';

import { CatalogFilters } from '../components/CatalogFilters';
import { ProductsList } from '../components/ProductsList'

export function CatalogPage() {
  let { data: products, error, isLoading } = useQuery("posts", async () => {
    let { data } = await getList();
    return data;
  });

  return (
    <div className="page">
      <Grid container spaces={1}>
        <Grid item xs={4}>
          <CatalogFilters />
        </Grid>
        <Grid item xs={8}>
          { 
            isLoading ? "Loading" :  
            error ? error.message :
            <ProductsList products={products}/> 
          }
        </Grid>
      </Grid>
    </div>
  );
}

CatalogPage.propTypes = {};
