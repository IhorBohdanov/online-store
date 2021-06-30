import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';

import "./ProductCard.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export function ProductCard(props) {
  const {title, description, price, photo, isNew, isSale, isInStock, categories, rating} = props.product
  const classes = useStyles();  

  return (
    <Card className={classes.root}>
      <CardMedia image={photo} title={title} className={classes.media}/>
      <CardContent>
        <Typography component="h3">
          {title}
        </Typography>
        <Typography component="p">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

ProductCard.propTypes = {};
