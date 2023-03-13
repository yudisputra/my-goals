import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
  const [expenseItems, setExpenseItems] = useState(props.items)
  const [filteredYear, setFilteredYear] = useState("all");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    const filteredExpensesItem = props.items.filter((item) => {
        const itemDate = new Date(item?.date);
        return itemDate.getFullYear().toString() === selectedYear;
    });

    setExpenseItems(filteredExpensesItem);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeFilter={filterChangeHandler}
        selected={filteredYear}
      />
      <ExpensesChart expenses={expenseItems} />
      <ExpensesList items={expenseItems}/>
    </Card>
  );
}

export default Expenses;