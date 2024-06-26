// src/components/AddExpenseForm.js
import React, { useState } from 'react';
import '../styles/AddExpenseForm.css';

const AddExpenseForm = ({ onAddExpense }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleAmountChange = (e) => setAmount(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description && amount && category) {
      const expense = {
        id: Date.now(),
        description,
        amount: parseFloat(amount),
        category,
        date: new Date().toISOString(),
      };
      onAddExpense(expense);
      setDescription('');
      setAmount('');
      setCategory('');
    }
  };

  useState(() => {
    setIsValid(description && amount && category);
  }, [description, amount, category]);

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={handleDescriptionChange}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={handleAmountChange}
      />
      <select value={category} onChange={handleCategoryChange}>
        <option value="">Select Category</option>
        <option value="food">Food</option>
        <option value="transport">Transport</option>
        <option value="stationary">Stationary</option>
      </select>
      <button type="submit" disabled={!isValid}>Add Expense</button>
    </form>
  );
};

export default AddExpenseForm;
