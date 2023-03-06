# Multiple State VS One Sate Object

Dalam penggunaan form kita menggunakan state sebanyak input yang kita miliki, jika kita memiliki 3 input maka akan kita buat juga 3 state. Alternatif dalam hal ini, kita bisa membuat suatu state berupa object dengan tiap input nya sebagai parameter dari objectnya.

```js
// Multiple State
const [enteredTitle, setEnteredTitle] = useState('');
const [enteredAmount, setEnteredAmount] = useState('');
const [enteredDate, setEnteredDate] = useState('');

// One State Object
const [userInput, setUserInput] = useState({
  enteredTitle: '',
  enteredAmount: '',
  enteredDate: '',
});
```

Dalam handlernya pun juga ada perbedaan yaitu:

```js
// Multiple State
const titleChangeHandler = (event) => {
  // Kita assign nilai barunya menggunakan setState state yang spesifik
  setEnteredTitle(event.target.value);
};

//One State Object
const titleChangeHandler = (event) => {
  // Untuk melakukan assign kedalam object baru kita perlu menggunakan `prevState` sehingga nilai dari object state tersebut kita mendapat nilai yang paling terupdate

  // Kemudian kita melakukan pengcopyan nilai object menggunakan spread operator (...)
  setUserInput((prevState) => {
    return {
      ...prevState,
      enteredTitle: event.target.value,
    }
  });
};

```

## Kesimpulan

Penggunaan kedua approach sama - sama boleh dilakukan. Pengelompokkan state menjadi suatu object terkadang digunakan ketika suatu sekumpulan data memang diharapkan berubah secara bersama-sama dalam suatu waktu.

More about version:

Prior to React 18, it was recommended to group state variables that were expected to change together. React used to batch state updates but only those directly within React events such as onClick, onChange, etc. and lifecycle methods such as useEffect. Multiple state updates within async methods e.g. fetch() weren't batched.

However with React 18, all state updates occurring together are automatically batched into a single render. This means it is okay to split the state into as many separate variables as you like.

Source: https://reactjs.org/blog/2022/03/29/react-v18.html#new-feature-automatic-batching