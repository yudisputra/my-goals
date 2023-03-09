# Child To Parent Communication

Kita sudah mengetahui untuk melakukan komunikasi dari parent ke childrennya kita menggunakan prinsip `props`. Sedangkan untuk komunikasi sebaliknya kita tetap menggunakan `props` tetapi yang kita lempar bukan suatu `value` tetapi sebuah `function` yang dimana didalamnya terdapat sebuah logic yang digunakan untuk menyimpan data yang dapat dilempar dari parameternya.

Konsep ini dapat gunakan untuk melempar data dari form kita menuju parent paling atas dari komponen tree.

```js
// Component Parent
const NewExpense = (props) => {
  // Function dengan parameter yang dapat kita ambil nantinya
  const saveExpenseDataHandler = (enteredExpenseData) => {
    // Kita ambil data dari parameter dan dapat kita untuk kita proses
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    console.log(expenseData);
  };

  return (
    <div className="new-expense">
      // Function tersebut kita lempar sebagai proses
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
```

```js
// Component Children
const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    // Gunakan Props Function tersebut dengan kita lempar data yang ingin kita olah
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredDate('');
    setEnteredAmount('');
}
```