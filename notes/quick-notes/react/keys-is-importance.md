# Keys is Importance

Dalam penulisan komponen yang berupa list kita perlu memberikan props `key` yang dimana selalu ada didalam komponen html apapun.

Key ini harus selalu unik bisa berupa id dari data yang ada maupun jika terpaksa bisa menggunakan index dari array ketika di `map`.

```js
{props.items.map((expense) => (
  <ExpenseItem
    // Key berupa id
    key={expense.id}
    title={expense.title}
    amount={expense.amount}
    date={expense.date}
  />
))}
```

```js
// Index dari map
{props.items.map((expense, index) => (
  <ExpenseItem
    // Key berupa index jika terpaksa
    key={expense.index}
    title={expense.title}
    amount={expense.amount}
    date={expense.date}
  />
))}
```

Alasan lebih lanjut kenapa keys ini penting bisa dibaca pada:

[Understanding Keys](./../../react/contents/chapter-d/understanding-keys.md)
