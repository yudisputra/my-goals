import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    let expensesContent = <p>No Expenses</p>;

    if(filteredExpenses.length > 0){
        expensesContent = filteredExpenses.map((expense) => {
            return (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            )
        }
        )
    }

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter
                    onChangeFilter={filterChangeHandler}
                    selected={filteredYear}
                />
                {expensesContent}
            </Card>
        </div>
    )
}

export default Expenses;