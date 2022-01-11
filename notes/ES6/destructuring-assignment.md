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

## A. Destructuring Assignment Pada Array

### 1. Destructuring pada array

Contoh:
```js
const coba = ['satu', 'dua', 'tiga'];

const [a, b, c] = coba;
console.log(a); // satu
console.log(b); // dua
console.log(c); // tiga

```
<br />

### 2. Skip Variable

Kita dapat mengskip variable yang tidak diinginkan dengan cara menuliskan string kosong pada tempat variable yang tidak dinginkan.

Contoh : 

```js
const perkenalan = ['Halo', 'nama', 'saya', 'Yudistira Putra'];

const [salam, , , nama] = perkenalan;
console.log(nama) // Yudistira Putra
```
<br />

### 3. Swap Items

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

### 4. Return Value Function Array

Ketika ada suatu function yang returnnya berupa array atau object kita bisa langsung mendapat variabel atau nilai properties dari function tersebut menggunakan destructuring assignment.

```js
const coba = () => {
    return [1, 2];
}

const [a, b] = coba();

// Kode diatas akan membuat a bernilai 1
```
<br />

### 5. Rest Parameter Array

Kita bisa menangkap jumlah variabel dinamis dalam sebuah array menggunakan salah satu fitur destructuring yaitu `Rest Parameter`. `Rest Parameter` ini dilambangkan dengan lambang `...`.

```js
const [a, ...values] = [1, 2, 3, 4, 5];

console.log(a);
// nilai a akan menjadi 1

console.log(values);
// nilai values akan berbentuk array berisi sisa variable yang ada 
```
<br />

## B. Destructuring Assignment Pada Object
<br />

### 1. Destructuring Object

Penggunaan Destructuring pada object sedikit berbeda dengan penggunaan pada array. Pemberian nama variable dalam destructuring object harus menggunakan nama yang sesuai dengan properti yang ada didalam object tersebut.

```js
const mhs = {
    nama: 'Yudistira Putra',
    umur: 33,
}

const { nama, umur } = mhs;
console.log(nama, umur);

// Nama Properties harus sesuai dengan nama properties yang ada dialam objectnya
```

### 2. Assignment tanpa Deklarasi Object

Kita bisa melakukan assingment variable tanpa perlu membuat object terlebih dahulu menggunakan destructuring.

```js
({ nama, umur} = { nama: 'Yudistira Putra', umur: 33});

console.log(nama, umur);
```

### 3. Assign Properties Object ke variable baru

Kita bisa assign properties dari object ke nama variable baru dengan memberikan tanda `nama baru: properties object` ketika melakukan destructuring.

```js
const mhs = {
    nama: 'Yudistira Putra',
}

const { nama: nama_mhs } = mhs;
console.log(nama_mhs);
// Properties nama dari object mhs akan disimpan kedalam variable baru bernama nama_mhs.
```

### 4. Memberikan nilai default jika properties pada object tidak ditemukan

Kita bisa memberikan nilai default ketika melakukan destructuring object jika properties yang dicari tidak ditemukan.

```js
const mhs = {
    nama: 'Yudistira Putra',
}

const { nama, email = 'Yudistira Eka Putra' } = mhs;

// Karena properties email tidak ditemukan makan nilai email akan menggunakan nilai default sesuai yang telah diberikan.
```

### 5. Menggabungkan pemberian nilai default dan perubahan nama variable pada object.

Kita bisa menggabungkan kedua fitur destructuring object yait pemberian nilai default dan perubahan nama variable.

```js
const mhs = {
     nama: 'Yudistira Putra',
}

const { nama: n, email: e = 'email@default.com' } = mhs;
console.log(e);

// Kita menggunakan nama varibale e sebagai pengganti nama variable email dan kita gunakan nilai default dikarenakan object mahasiswa tidak memiliki properties email.
```

### 6. Rest Parameter pada Object  

Sama seperti pada array, penggunaan rest parameter pada destrcuturing akan membuat sisa properties yang ditangkap oleh rest parameter akan berubah menjadi object baru.

```js
const mhs = {
    nama: 'Yudistira Putra',
    umur: 33,
    email: 'email@default.gmail.com',
};

const { nama, ...values } = mhs;
console.log(values);

// Nilai dari values adalah object berisi properties umur dan email.
```

### 7. Mengambil Field pada object sebagai parameter
Ketika kita mempunyai function yang menerima object sebagai parameternya, kita bisa melakukan destructuring langsung pada parameternya sehingga pada parameter kita tuliskan saja nama properties yang ingin kita ambil.

Contoh Function Umum:
```js
const mhs = {
    id: 123,
    nama: 'Yudistira Putra',
    umur: 33,
    email: 'email@gmail.com',
};

function getIdMhs(mhs) {
    return mhs.id;
}
```

Contoh Penggunaan Destructuring Pada Parameter Function:

```js
const mhs = {
    id: 123,
    nama: 'Yudistira Putra',
    umur: 33,
    email: 'email@gmail.com',
};

function getIdMhs({ id }) {
    return id;
}

console.log(getIdMhs(mhs));

// Bisa dilihat pada function getIdMhs langsung diambil properties yaitu id. Tetapi tetap function tersebut akan menerima object sebagai parameternya
```

### [Back To ES6 Index](./README.md)