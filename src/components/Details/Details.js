import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import useStyles from './styles'; //hooks
import useTransactions from '../../useTransactions';

const Details = ({ title }) => {
  const classes = useStyles();
  const { total, ChartDATA } = useTransactions(title);
  return (
    <Card className={title === 'Income' ? classes.income : classes.expense}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">${total}</Typography>
        <Doughnut data={ChartDATA} />
      </CardContent>
    </Card>
  );
};

export default Details;
