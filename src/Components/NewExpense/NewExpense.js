import React from 'react'
import "./NewExpense.css"
import ExpenseForm from "./Expenseform"
import Card from '../UI/Card'
const NewExpense = (props) => {
  const saveExpenseDataHandler= (expenseData)=>{
    const data = {
      ...expenseData,
      id:Math.floor(Math.random() * 1000) + 1
    }
    props.onGetExpenseData(data)}
  return (
    <Card className='new-Expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    </Card>
  )
}

export default NewExpense