# Hubungan State dan Components

Secara konsep semuanya kembali terhadap `State` jika hubungannya dengan re-rendering `components` untuk apa yang ingin ditampilkan di layar. Dan tentu saja dua hal ini adalah core konsep dari React. Dan juga perlu diingat bahwa kedua hal ini diatur oleh `React`.

Contohnya adalah ketika kita menggunakan sebuah React Hook yaitu `useState` dimana kita menghubungkan state dan component. Sebenarnya ketika kita menggunakan `useState` kita mengikat sebuah state dengan component yang kita tuju.

```ts
const App = () => {
    const [usingState, setUsingState] = useState(false);
}
```

Penjelasan lebih dalam dengan code diatas adalah ketika kita merender `pertama kali` React akan mengikat state `usingState` dengan component `App` dan dia mengambil nilai default `false`. Kemudian jika ada re-render terjadi pada component karena adanya perubahan state tersebut, `App` tidak meninitalize ulang state tersebut tetapi React mengingat bahwa state tersebut sudah ada dan React `hanya mengupdate state yang ada tersebut`.

### [Back To React Index](../../README.md)
