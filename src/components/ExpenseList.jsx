// src/components/ExpenseList.js
import React from 'react';
import '../styles/ExpenseList.css';

const ExpenseList = ({ expenses, onDeleteExpense, onEditExpense }) => {
  const totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <div className="expense-list">
      {expenses.length === 0 ? (
        <p>No expenses added yet.</p>
      ) : (
        expenses.map((expense) => (
          <div key={expense.id} className="expense-item">
            <div>
              <strong>{expense.description}</strong> - ${expense.amount.toFixed(2)}
            </div>
            <div>
              <small>{new Date(expense.date).toLocaleDateString()}</small>
              <small> - {expense.category}</small>
            </div>
            <button onClick={() => onDeleteExpense(expense.id)}>Delete</button>
            <button onClick={() => onEditExpense(expense)}>Edit</button>
          </div>
        ))
      )}
      <div className="total-amount">Total: ${totalAmount.toFixed(2)}</div>
    </div>
  );
};

export default ExpenseList;
