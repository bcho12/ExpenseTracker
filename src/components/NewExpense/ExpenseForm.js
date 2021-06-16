import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // First way to set state
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // Second way to set state
  // const [userInput, setUserInput] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: '',
  // })

  const titleChangeHandler = (event) => {
    // First way
    // Recommended Way
    setEnteredTitle(event.target.value);

    // Second way
    // The prevState will always be the latest previous state snapshot
    // setUserInput((prevState) => {
    //     return {...prevState, enteredTitle: event.target.value };
    // })
  };

  const amountChangeHandler = (event) => {
    // First way
    setEnteredAmount(event.target.value);

    // Second way
    // The prevState will always be the latest previous state snapshot
    // setUserInput((prevState) => {
    //     return {...prevState, enteredAmount: event.target.value };
    // })
  };

  const dateChangeHandler = (event) => {
    // First way
    setEnteredDate(event.target.value);

    // Second way
    // The prevState will always be the latest previous state snapshot
    // setUserInput((prevState) => {
    //     return {...prevState, enteredDate: event.target.value };
    // })
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
