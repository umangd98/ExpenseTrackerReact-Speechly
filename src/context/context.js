import React, { useReducer, createContext } from 'react';
import contextReducer from './contextReducer.js';
const initialState = JSON.parse(localStorage.getItem('transactions')) || [
  {
    amount: 100,
    category: 'Clothes',
    type: 'Expense',
    date: '2021-03-21',
    id: '2e3323e2-c098-4271-a5ea-45d8686a942c',
  },
  {
    amount: 100,
    category: 'Salary',
    type: 'Income',
    date: '2021-03-15',
    id: '50dbf96d-80a8-4716-9487-40c740aed50d',
  },
];
export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);
  //actions
  const deleteTransaction = (id) => {
    dispatch({ type: 'DELETE_TRANSACTION', payload: id });
  };
  const addTransaction = (transaction) => {
    dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
  };
  console.log(transactions);
  const balance = transactions.reduce(
    (acc, currval) =>
      currval.type === 'Expense' ? acc - currval.amount : acc + currval.amount,
    0
  );
  return (
    <ExpenseTrackerContext.Provider
      value={{ deleteTransaction, addTransaction, transactions, balance }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
