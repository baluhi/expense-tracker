// src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AddExpenseForm from "./components/AddExpenseForm";
import ExpenseList from "./components/ExpenseList";
import NotFound from "./components/NotFound";


const App = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    setExpenses(storedExpenses);
  }, []);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const editExpense = (editedExpense) => {
    setExpenses(
      expenses.map((expense) =>
        expense.id === editedExpense.id ? editedExpense : expense
      )
    );
  };

  return (
    <BrowserRouter>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<HeroSection />} />

          <Route
            path="/track"
            element={<AddExpenseForm onAddExpense={addExpense} />}
          />
          <Route
            path="/list"
            element={
              <ExpenseList
                expenses={expenses}
                onDeleteExpense={deleteExpense}
                onEditExpense={editExpense}
              />
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
