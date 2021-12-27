# Template Literal

Pengertian Template Literal adalah string literal yang memungkinkan adanya expression di dalamnya.

## String Literal

String literal adalah bagaimana kita seperti biasanya membuat sebuah variable berisi string.

```js
let nama = 'Putra';
let ntp = "043";
let email = `yudistiraputra@gmail.com`;
```

Bisa dilihat dari code paling bawah menunjukkan penggunaan back tick ( ` ) untuk membuat sebuah string. Nantinya pembuatan template literal akan menggunakan back tick tersebut.<br /><br />

## Template Literal

### 1. Menggunakan `` back tick
Untuk memulai Template Literal harus menggunakan tanda back tick ``. 
  
```js
const example = `string text`;
```
<br />

### 2. Multi-line string

Dengan menggunakan template literal yang dulunya untuk membuat new line kita membutuhkan memberikan `/n`.

Dahulu untuk membuat line code kita akan seperti dibawah ini :
```js
console.log('String1\nString2');  
```
  
Tapi sekarang kita bisa menuliskan :
```js
console.log(`String1
String2`);
```

Contoh lain adalah seperti dibawah ini :
```js
const example = `string text baris 1
string text baris 2
string text baris 3`;
```
<br />


### 3. Embedded Expression

Dengan menggunakan template literal kita bisa melakukan embedded expression seprti dibawah ini.


```js
const example = `string text ${expression} string text`;
const name = 'Sandhika Galih';
let umur = 33;
console.log(`Halo, perkenalkan nama saya ${nama}, saya ${umur} tahun`);
```
<br />

### 4. HTML Fragments

Dalam penulisan HTML Fragments pun kita bisa menuliskan expression didalamnya dengan lebih mudah,

```js
const mhs = {
    nama: 'Yudistira Putra',
    umur: 33,
    nomahasiswa: '12345678',
    email: 'yudistiraputra95@gmail.com',
}

let el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span classs="nrp">${mhs.nrp}</span>
</div>;
```
<br />

### 5. Expression Interpolation

Sebelum menggunakan template literal, dalam penulisan operasi matematika di dalam string kita harus membungkus operasi matematika kita menggunakan kurung `()` seperti dibawah ini :

```js
console.log('Jika a = 10 dan b = 15, maka hasil penjumlahannya adalah: ' + ( a + b ) + ', bukan ' + (2 * a + b ));
```

Tetapi dengan menggunakan Template Literal kita bisa menuliskan :

```js
console.log(`Jika a = 10 dan b = 15, maka hasil penjumlahannya adalah: ${a + b}, bukan ${2 * a + b}`);
```
<br />

### 6. Tagged Template  
> Tagged Template adalah bentuk yang lebih kompleks dari template literals, yang memungkinkan kita untuk membaca template literals melalui sebuah function.

Untuk penjelasan nya bisa dilihat code dibawah ini:

```js
const nama = 'Yudistira Putra';
const umur = 25;

// Dibawah ini adalah template literal seperti pada umumnya 
const str = `Halo, nama saya ${nama}, saya ${umur} tahun`;

// Hasil dari console log adalah:
// Halo, nama saya Yudistira Putra, saya 25 tahun
console.log(str);

// Sekarang kita akan membuat suatu function
function coba(strings){
    return strings;
}

// Dan Sekarang kita akan menambahkan fungsi tersebut kedalam template literal tadi sehinggah menjadi tagged template
const str2 = coba `Halo, nama saya ${nama}, saya ${umur} tahun`;

// Hasil dari console log dibawah adalah: 
// [
//     0: "Halo, nama saya",
//     1: ", saya ",
//     2: "tahun",
// ]
// Bisa dilihat bahwa function coba dapat menerima sebuah parameter strings. Hasil dari tagged template tersebut adalah memecah template literal dipisahkan oleh expressionnya. Tetapi expressionnya tidak masuk kedalam hasil arraynya.
console.log(str2);

// Kemudian kita tambahkan parameter lainnya pada fungsi yang tadi.
function coba2(strings, nama, umur){
    return umur;
}

const str3 = coba `Halo, nama saya ${nama}, saya ${umur} tahun`;

//Hasil dari console log dibawah adalah :
// 33
// Artinya parameter selain pertama akan mengembalikan expression dengan nama yang dituliskan dan dalam konteks ini adalah umur.
console.log(str3);

// Tetapi jika yang diminta parameternya tidak sesuai dengan expression yang ada akan menghasilkan undefined.
function coba3(strings, nama, umur, email){
    return email;
}

// Karena parameter ini selalu dinamis maka diperkenalkan yang namanya adalah rest parameters. Rest parameters akan menjadi array yang mengambil semua parameter yang diberikan. Rest parameters dituliskan dengan menuliskan 3 titik dan sebuah nama parameter bebas.
function coba4(strings, ...values){
    return values;
}

const str4 = coba `Halo, nama saya ${nama}, saya ${umur} tahun`;

// Hasil dari console log dibawah adalah :
// [
//     0: Yudistira Putra,
//     1: 25,
// ]
console.log(str4);
```

Salah satu penggunaan tagged template adalah seperti dibawah ini. Dimana kita ingin memberikan highligh dari sebuah string untuk ditampilkan dalam html.

```js
const nama = 'Yudistira Putra';
const umur = 25;

function highlight(strings, ...values){
    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '')
}

const str = highlight`Halo, nama saya ${nama}, saya ${umur} tahun.`;

console.log(str);
```

Penggunaan Lain Tagged Template:

A. Escaping HTML Tags  
B. Translation & Internatioalization  
C. Styled Component

### [Back To ES6 Index](./README.md)