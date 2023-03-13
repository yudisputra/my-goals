# Basic Rendering List

Data yang akan kita tampilkan akan selalu dinamis dan jarang sekali berbentuk static. Maka dari itu kita tidak mungkin menuliskan komponen berbentuk seperti dibawah ini:

```js
return (
  <>
   <ExpenseItem
      title={props.items[0].title}
      amount={props.items[0].amount}
      date={props.items[0].date}
    />
    <ExpenseItem
      title={props.items[1].title}
      amount={props.items[1].amount}
      date={props.items[1].date}
    />
    <ExpenseItem
      title={props.items[2].title}
      amount={props.items[2].amount}
      date={props.items[2].date}
    />
    <ExpenseItem
      title={props.items[3].title}
      amount={props.items[3].amount}
      date={props.items[3].date}
    />
  </>
)
```

Karena kita tidak tahu berapa jumlah dari array tersebut maka dari itu kita menuliskan komponen list menggunakan `map` seperti dibawah ini:

```js
 {props.items.map((expense) => (
    <ExpenseItem
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ))}
```