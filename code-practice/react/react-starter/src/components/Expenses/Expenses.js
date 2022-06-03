import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
    // const [expensesItem, setExpensesItem] = useState(props.items);
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
        // const filteredExpensesItem = props.items.filter((item) => {
        //     const itemDate = new Date(item?.date);
        //     return itemDate.getFullYear().toString() === expensesYear;
        // });

        // setExpensesItem(filteredExpensesItem);
    }

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter
                    onChangeFilter={filterChangeHandler}
                    selected={filteredYear}
                />
                {props.items.map((expense) => {
                    return (
                        <ExpenseItem
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
                    )
                })}
            </Card>
        </div>
    )
}

export default Expenses;