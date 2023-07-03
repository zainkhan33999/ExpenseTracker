import React from 'react';
import "./ExpenseDate.css"
const ExpenseDate = ({date}) => {
const day = date.toLocaleString("en-US" , {day:"2-digit"}) 
const month = date.toLocaleString("en-US" , {month:"short"}) 
const year = date.getFullYear( )
  return (
    <div className='expense-item_date'>
      <div className="year">{year}</div>
      <div className="month">{month}</div>
      <div className="day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
