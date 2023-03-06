# Form Handler

Setelah kita sudah mempunyai inputan maka langkah selanjutnya adalah memberikan `handler` untuk menangkap event dan juga `state` untuk menyimpan data inputannya.

```js
  // 1. State
  const [enteredTitle, setEnteredTitle] = useState('');

  // 2. Hanlder
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  // 3. Gunakan handler pada onChange
  return (
      <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
  )
```