import Expenses from "./Components/Expenses/Expenses"
import React,{useState} from "react";
import './App.css';
import NewExpense from "./Components/NewExpense/NewExpense";



function App() {
  const [expenses, setExpenses] = useState([])
  const getExpenseDataHandler = (data) =>{
    setExpenses  ((prevState)=>{
      return [data,...prevState]
      
    })
  };
  

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <NewExpense onGetExpenseData = {getExpenseDataHandler}/>
      <Expenses  id = {setExpenses.id} expenses = {expenses}  />
    </div>
  );
}

export default App;
