import React from 'react';
import ExpenseDate from "./ExpenseDate"
import Card from '../UI/Card';
import "./ExpenseItem.css"

const ExpenseItem = (props) => {
  return (
    <Card className='expense-Item'>
     <ExpenseDate date = {props.date}/>
      <div className='expense-Item_description'>
        <h2>{props.title}</h2>
        <p>${props.amount}</p>
        
      </div>
    </Card>
  );
}

export default ExpenseItem;
