import './ExpensesList.css';

const ExpenseList = (props) => {
    let expensesContent = <p>No Expenses</p>;
    
    if(props.items.length === 0){
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
    }
}