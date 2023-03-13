# Outputting Conditional Content

Dalam beberapa kasus menampilkan data list yang ada, kita juga perlu membuat tampilan dimana data list tersebut tidak berisi apa atau kita sebut `no content`. Untuk melakukan hal ini kita bisa melihat dari panjang item list yang ada seperti dibawah ini:

```js
// Ini adalah hasil render content pertama dimana yaitu ketika data list nya kosong
let expensesContent = <p>No Expenses Found</p>;

// Disini adalah outputting conditional content yaitu dimana ketika datanya ada isinya
if(expenseItems.length > 0){
  expensesContent = expenseItems.map((expense) => (
    <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
  ))
}

return (
  // Kita gunakan variable content tadi disini
  {expensesContent}
)
```