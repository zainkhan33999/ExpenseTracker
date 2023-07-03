import React, {useState} from "react";
import "./Expenseform.css"

const Expenseform = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  
  const titleChangeHander = (e) =>{
   setEnteredTitle(e.target.value) 
      }
  
  const amountChangeHander = (e) =>{
    setEnteredAmount(e.target.value) 
    }
  
  const dateChangeHander = (e) =>{
    setEnteredDate(e.target.value) 
    }
  
  
    const expenseSubmitHandler = (e) => {
      e.preventDefault();
      const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date (enteredDate),
      };
  props.onSaveExpenseData(expenseData)
      setEnteredAmount("");
      setEnteredDate("");
      setEnteredTitle("");
    };
    
    return (
    <form onSubmit={expenseSubmitHandler}>
      <div className="input-form-controls">
        <div className="input-form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" required value={enteredTitle} onChange={titleChangeHander} />
        </div>
        <div className="input-form-control">
          <label htmlFor="amount">Amount</label>
          <input
            value={enteredAmount}
            type="number"
            id="amount"
            min="1"
            step="1"
            required
            onChange={amountChangeHander}
          />
        </div>
        <div className="input-form-control">
          <label htmlFor="date">Date</label>
          <input type="date" id="date" min="2019-1-1" max="2023-12-31" value={enteredDate} onChange={dateChangeHander} />
        </div>
      </div>
      <div className="add-expense-btn">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default Expenseform;
