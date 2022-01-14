# Hoisting

Hoisting memiliki arti yaiu ` mengkatrol` atau `menaikkan`. Dalam javascript hoisting memiliki makna yaitu kita bisa memanggil function atau variable sebelum didefined tanpa menampilkan `ReferenceError`. Hal ini dapat dilakukan karena Javascript Intrepeter memindahkan deklarasi variable dan function ke bagian paling atas dari scope saat ini ( global maupun local ) sebelum dilakukan eksekusi.

Contoh:

```js
// Kita bisa memanggil function onePlusOne walaupun function tersebut definenya setelah pemanggilannya.
onePlusOne();

function onePlusOne(){
    console.log(1 + 1); 
}
//2 is returned in console
```

```js
// Console log dibawah akan mengembalikan nilai undefined karena javascript akan melakukkan hoisting declarationnya bukan initialisasi nilainya. 
console.log(num);

var num; // Declaration
num = 6; // Initialization

// Console.log ini baru akan menghasilkan nilai 6
console.log(num);
```

### [Back To ES6 Index](./README.md)