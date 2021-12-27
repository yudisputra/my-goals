# For..of VS for..in

For..of dan For..in merupakan dua looping baru pada javascript selain dari looping normal lainnya seperti for, while dan foreach.

## 1. For..of  

`Creates a loop iterating over iterable object`  by Mozila

Artinya For..of ini adalah looping yang bisa menelusuri object-object yang iterable.

### Iterable Object:
* String
* Array
* Arguments / NodeList
* TypedArray
* Map
* Set
* User-defined Iterables

### A. For..of pada array

Untuk melakukan looping pada array kita bisa menggunakan beberapa cara:

```js
const mhs = ['Putra' , 'Dikky', 'Yahya'];

// 1. Menggunakan For
for(let i = 0; i < mhs.length; i++ ){
    console.log(mhs[i]);
}

// 2. Menggunakan Foreach
mhs.forEach(m => console.log(m));

// 3. Menggunakan For..of
for(const m of mhs){
    console.log(m);
}
```

Selain itu pada penggunaan forEach kita bisa mendapat index ketika melakukan looping dengan memberikan satu lagi argument. Pada For..of kita bisa melakukan hal serupa tetapi dengan cara lain.

```js
const mhs = ['Putra' , 'Dikky', 'Yahya'];

mhs.forEach((m, i) => {
    console.log(`${m} adalah mahasiswa ke-${i + 1}`)
});
// Hasil:
// Putra adalah mahasiswa ke 1
// Dikky adalah mahasiswa ke 2
// Yahya adalah mahasiswa ke 3

for(const m of mhs.entries()){
    console.log(m)
}

//Hasil:
// [0, "Putra"]
// [1 , "Dikky"]
// [2, "Yahya"]

// Kita bia melakukan destructuring langsung pada for..of entries
for(const [i, m] of mhs.entries()){
    console.log(`${m} adalah mahasiswa ke-${i + 1}`)
}
// Hasil:
// Putra adalah mahasiswa ke 1
// Dikky adalah mahasiswa ke 2
// Yahya adalah mahasiswa ke 3
```

### B. For..of pada string
```js
const nama = 'Putra';

// 1. Menggunakan For..of
for(const n of nama){
    console.log(n);
}

//Tidak dapat menggunakan foreach karena hasilnya akan error.
```

### C. For..of pada arguments

Kita bisa memanggil arguments didalam sebuah fungsi untuk mengecek arguments apa saja yang dterima oleh suatu fungsi, misal:

```js
function jumlahkanAngka(){
    console.log(arguments)
}

jumlahkanAngka(1, 2, 3, 4, 5);
// Hasilnya adalah semua argument dari function tetapi tidak berbentuk array.
```

Arguments ini berbeda dengan array sehingga kita tidak bisa menggunakan array reduce untuk melakukan penjumlahan.

```js
function jumlahkanAngka(){
   return arguments.reduce((a, i) => a + 1);
}

console.log(jumlahkanAngka(1, 2, 3, 4, 5);
// Hasilnya ada error karena arguments bukan array
```

Solusinya adalah kita menggunakan for..of

```js
function jumlahkanAngka(){
    let jumlah = 0;
    for(a of arguments){
        jumlah += a;
    }
    return jumlah;
}

console.log(jumlahkanAngka(1, 2, 3, 4, 5));
// Hasil: 15;
```

## 2. for..in

`Creates a lopp only iterating over enumerable` by mozilla

Enumerable disini memiliki context yaitu properties pada object. Sehingga kita bisa menggunakan for..in untuk melakukan loop pada properties didalam object.

```js
const mhs = {
    nama: 'Yudistira Eka Putra',
    umur: 25,
    email: 'yudistiraputra95@gmail.com',
}

for (m in mhs){
    console.log(m)
}

// Hasilnya adalah nama properties: 
// nama
// umur
// email

// Tetapi jika kita mau meloop hasil nilai dari propertiesnya kita menggunakan
for (m in mhs){
    console.log(mhs[m]);
}

//Hasilnya adalah nilai properties
// Yudistira Eka Putra
// 25
// yudistiraputra95@gmail.com
```

### [Back To ES6 Index](./README.md)