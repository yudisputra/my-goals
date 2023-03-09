# Form Submit

Untuk melakukan submit kita berikan event onSubmit pada form dengan sebuah function.

```ts
 const submitHandler = (event) => {
    // Kita perlu mencegah event default dari submit yaitu merefresh halaman
    event.preventDefault();

    // Data yang kita ambil dari state yang sudah kita punya
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(expenseData);
  }

  return (
    // Kita pasang function tersebut pada event onSubmit
    <form onSubmit={submitHandler}>
      ....
    </form>
  )
```