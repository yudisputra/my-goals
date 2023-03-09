# Two Way Binding

Two way binding adalah suatu teknik dimana kita mengatur value dari suatu input menggunakan state dalam React.

```js
const [enteredTitle, setEnteredTitle] = useState('');

const titleChangeHandler = (event) => {
  setEnteredTitle(event.target.value);
};

return(
  <input
    type="text"
    // Kita atur nilai baru nya dengan menggunakan handler
    onChange={titleChangeHandler}
    // Kita set value dari input dengan value state kita
    value={enteredTitle}
  />
)
```

Kita pasang setiap input yang kita gunakan dengan Two Way Binding