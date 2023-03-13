# Conditional Return Statements

Selain conditional content kita juga bisa membuat conditional return ketika kondisi tersebut berada pada suatu komponen. Hal ini digunakan ketika kita butuh memindahkan logika return content kedalam suatu file terpisah

```js
const ExpensesList = (props) => {
  if (props.items.length === 0) {
    // Return dengan conditional
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>
  }

  return (
    // Return default
    <ul className='expenses-list'>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  )
}
```