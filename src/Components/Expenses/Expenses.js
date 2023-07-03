import React,{useState} from 'react';
import ExpenseItem from "./ExpenseItem"
import "./Expenses.css";
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
  const Expenses = (props ) =>{
  const [filtererdYear,setFilteredYear]=useState("2021")
  const filteredChangeHandler = (selectedyear) => {
    setFilteredYear(selectedyear)
  }
    
  const filteredByYear = props.expenses.filter(expense=>{
   return expense.date.getFullYear().toString() === filtererdYear;
  })
  return (
    <Card className='expenses'>
    <ExpenseFilter selected = {filtererdYear} onFilteredChangeYear={filteredChangeHandler}/>
    {filteredByYear.map(expense =>{
      return(
        <ExpenseItem 
        
        title = {expense.title} 
        amount = {expense.amount} 
        date = {expense.date}
        />)
        
     
    })}
     
    </Card>
  );
  
}
export default Expenses;
