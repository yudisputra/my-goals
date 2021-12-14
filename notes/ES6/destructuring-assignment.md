# Destructuring Assignment

Destructuring Assignment adalah expression pada javascript yang membuat kita dapat membongkar nilai dari array atau properti dari object kedalam variabel yang terpisah.

Contoh:
```js
const coba = ['satu', 'dua', 'tiga'];

const [a, b, c] = coba;
console.log(a); // satu
console.log(b); // dua
console.log(c); // tiga

const mhs = {
    nama: 'Yudistira Putra',
    umur: 33,
    email: 'yudistiraputra@gmail.com'
}

const { nama, umur, email} = mhs;
console.log(nama); // "Yudistira Putra"
console.log(umur); // 33
console.log(email); // yudistiraputra@gmail.com

// Gunakan [] untuk array dan {} untuk object
```
<br />

## Skip Variable

Kita dapat mengskip variable yang tidak diinginkan dengan cara menuliskan string kosong pada tempat variable yang tidak dinginkan.

Contoh : 

```js
const perkenalan = ['Halo', 'nama', 'saya', 'Yudistira Putra'];

const [salam, , , nama] = perkenalan;
console.log(nama) // Yudistira Putra
```
<br />

## Swap Items

Fungsi lain dari destructuring adalah melakukan swap nilai variable. Pada kasus umum hal ini dilakukan dengan membuat satu variable lain untuk penyimpanan sementara. 

Contoh: 
```js
let a = 1;
let b = 2;

// Buat variable lain untuk menampung.
let c;
c = a;
a = b;
b = c;
```

Tapi dengan menggunakan destructuring assignment kita bisa melalukan dengan cara lain.

Hasil:
```js
let a = 1;
let b = 2;
[a, b] = [b, a];
```
<br />

## Return Value Function
