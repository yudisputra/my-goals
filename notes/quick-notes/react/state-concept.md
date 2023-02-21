# State (Hooks untuk menyimpan data dan perubahannya)

Kita tahu bahwa semua `komponen` di React hanyalah sebuah function yang mengembalikan jsx code. Dimana function tersebut hanya dibaca sekali oleh React dan tidak akan dibaca kembali (Reevaluate). Tetapi di web modern kita perlu banyak perubahan pada halaman kita sehingga kita perlu suatu cara agar perubahan pada komponen yang ada dibaca kembali. 

## A. Cara Penggunaan useState

Cara penggunaan useState yaitu dengan memanggil useState library dari React library

```js
import React, { useState } from 'react';
```

Kemudian kita gunakan array destructuring didalam useState yang berisi dia variabel yaitu `value` dan `function untuk set data`. 

```js
const ComponentA = () => {
  // Title adalah value dan setTitle adalah function untuk set value barunya
  const [title, setTitle] = useState('new title');

  const ubahTitle = () => {
    // Penggunaaan setTitle ini untuk menyimpan value baru dari title
    setTitle('More New title');
  }
};
```

## B. useState membuat reevaluasi komponen kembali

Ketika kita menggunakan function perubahan nilai baru pada useState maka `semua code dalam komponen` akan dievaluasi kembali dan React akan mendeteksi perubahan apa yang terjadi pada komponen tersebut.

## C. Console log setelah function perubahan nilai tidak akan langsung dieksekusi

Biasanya programmer menuliskan code seperti dibawah ini:

```js
 const [title, setTitle] = useState('new title');

 const ubahTitle = () => {
    setTitle('More New title');
    // Console log setelah function perubahan nilai state
    console.log(title)
  }
```

Console log diatas tidak akan langsung dieksekusi (nilai yang muncul adalah new title bukan more new title) hal ini dikarenakan perubahan state itu berupa schedule (dijadwalkan dan bisa saja tidak langsung)