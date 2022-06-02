import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
    const [expensesItem, setExpensesItem] = useState(props.item);

    const chooseExpensesYear = (expensesYear) => {
        const filteredExpensesItem = expensesItem.filter((item) => item.date === expensesYear);

        setExpensesItem(filteredExpensesItem);
    }

    return (
        <div className='expenses'>
        <div className='expenses__filter'>
            <ExpensesFilter
                onChooseExpenseYear={chooseExpensesYear}
            />
        </div>
            {props.items.map((expense) => {
                return (
                    <ExpenseItem
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                )
            })}
        </div>
    )
}

export default Expenses;