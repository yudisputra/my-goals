# Bagaimana React Bekerja ?

Seperti yang kita ketahui bahwa pada React kita akan membuat Custom HTML Element kita sendiri dan juga kita akan menuliskan secara declarative. Yang berarti kita hanya menuliskan bagaimana hasil akhir dari tampilan yang kita inginkan di layar dan membiarkan React yang menangani proses dibelakangnya. Sebagai contoh adalah seperti berikut kita menuliskan component App menunjukkan div yang berisi h2 dan p. Kemudian kita pada index.js kita menaruh component App pada div `root`.

```jsx
function App(){
    return (
        <div>
            <h2>Let's get started!</h2>
            <p>This is also visible!</p>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
```

Hal ini berbeda jika kita menggunakan vanilla js dimana kita bisa sebut menggunakan pendekatan imperative yaitu kita harus menuliskan secara urut apa yang kita inginkan pada element yang dibuat. Seperti dibawah ini kita ingin membuat element paragraf kemudian memberikan text kemudian kita tambahkan pada div bernama root. Contoh dibawah adalah contoh jika kita ingin membuat satu custom HTML element tetapi bagaimana jika custom HTML element yang diinginkan berjumlah banyak.

```js
const para = document.createElement('p');
para.textContent = 'This i also visible';
document.getElementById('root').append(para);
```