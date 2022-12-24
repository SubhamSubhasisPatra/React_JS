import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";

// List are rendered in the home page 
const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "Car Rent",
    amount: 100.12,
    date: new Date(2020, 2, 20),
  },
  {
    id: 2,
    title: "Coffee",
    amount: 2.5,
    date: new Date(2020, 2, 21),
  },
  {
    id: 3,
    title: "Gas",
    amount: 10.0,
    date: new Date(2020, 2, 22),
  },
  {
    id: 4,
    title: "Video Games",
    amount: 50.0,
    date: new Date(2020, 2, 23),
  },
  {
    id: 5,
    title: "The Batman",
    amount: 35.10,
    date: new Date(2021, 2, 23),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div>
      <NewExpense onSaveExpenseHandler={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
