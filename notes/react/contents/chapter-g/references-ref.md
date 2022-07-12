# References (Refs)

## A. Definisi

Definisi dari References (Refs) menurut website resmi React yaitu:

`
Refs provide a way to access DOM nodes or React elements created in the render method.
`

Yang mempunyai arti yaitu `refs` menyediakan sebuah cara untuk melakukan akses DOM Nodes atau react element yang dibuat didalam render method.

Banyak sekali fungsi yang dapat kita gunakan menggunakan Refs ini salah satu yang paling simpel dilakukan adalah mengambil nilai dari suatu DOM.

<br>

## B. Cara Menggunakan Refs

<br>

### 1. Import useRef

Untuk menggunakan ref pertama kita harus mengimport dari library React.

```tsx
    import React, { useRef } from 'react';
```

### 2. Buat Variabel Menggunakan useRef()

Sama seperti `useState` kita perlu menyediakan sebuah variabel yang nantinya digunakan untuk menyimpan nilai Refs yang diambil.

```tsx
    const nameInputRef = useRef();
```

### 3. Tambahkan Props ref pada elemeent DOM

Pada elemen dom yang ingin kita referensikan kita tambahkan sebuah props bernama `props` dan kita berikan nilai variabel yang kita siapkan sebelumnya.

```tsx
    <input
        id='username'
        value={enteredUsername}
        type='text'
        onChange={usernameChangeHandler}
        ref={nameInputRef}
    />
```

### 4. Gunakan variabel useRef

Jika berhasil kita bisa mengakses DOM tersebut menggunakan variabel yang kita tentukan sebelumnya seperti dibawah ini.

```tsx
const handleSomething = () => {
    console.log(nameInputRef);
    console.log(nameInputRef.current.value);
}
```

Yang perlu diingat adalah bentuk dari refs ini adalah sebuah object.

### [Back To React Index](../../README.md)
