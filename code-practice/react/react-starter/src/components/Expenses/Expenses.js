import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
    const [expensesItem, setExpensesItem] = useState(props.items);

    const chooseExpensesYear = (expensesYear) => {
        const filteredExpensesItem = props.items.filter((item) => {
            const itemDate = new Date(item?.date);
            return itemDate.getFullYear().toString() === expensesYear;
        });

        setExpensesItem(filteredExpensesItem);
    }

    return (
        <div className='expenses'>
        <div className='expenses__filter'>
            <ExpensesFilter
                onChooseExpenseYear={chooseExpensesYear}
            />
        </div>
            {expensesItem.map((expense) => {
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