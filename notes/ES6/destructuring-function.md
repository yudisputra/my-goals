# Destructuring Function

Ada beberapa penggunaan Destructuring pada function yaitu :
## A. Destructuring Return Function

Contoh kasus: Kita diharuskan membuat function yang memiliki fungsi kalkulasi penjumalahan, pengurangan, perkalian dan pembagian.

Dengan menggunakan destructuring kita dapat membuat fungsi tersebut seperti dibawah ini.

```js
const kalkulasi = (a, b) => {
    return [a + b, a - b, a * b, a / b];
}

const [tambah, kurang, kali, bagi] = kalkulasi(2, 3);
// [5, -1, 6, 0,66667]
```

Tetapi masalahnya jika hasil returnya berupa array hal ini membuat kita harus memberi nama variable harus sesuai urutan return dari functionnya. 

Contoh kesalahan nama variable:

```js
const kalkulasi = (a, b) => {
    return [a + b, a - b, a * b, a / b];
}

const [kurang, tambah, kali, bagi] = kalkulasi(2, 3);
// [5, -1, 6, 0,66667]
// *Hasil array tidak sesuai namanya
```

Sehingga untuk kasus seperti ini lebih baik kita membuat return function yang berupa object.

```js
const kalkulasi = (a, b) => {
    return {
        tambah: a + b,
        kurang: a - b,
        kali: a * b,
        bagi: a / b,
    };
}

const {tambah, kurang, kali, bagi} = kalkulasi(2, 3);
// [5, -1, 6, 0,66667]
```

## B. Destructuring Function Arguments

### 1. Kasus Pertama
Contoh kasus : Ada data mahasiswa yang ingin kita cetak menggunakan sebuah function bernama cetakMhs.

```js
const mhs1 = {
    nama: 'Yudistira Eka Putra',
    umur: 25,
    email: 'yudistiraputra95@gmail.com',
}

const cetakMhs = (mhs) => {
    return `Halo, nama saya ${mhs.nama}, saya berumur ${mhs.umur} tahun.`;
}

console.log(cetakMhs(mhs1))
// Halo, nama saya Yudistira Eka Putra, saya berumur 25 tahun.
```

Fungsi di atas berjalan seperti semestinya tetapi kita bisa melakukan improvisasi dengan menggunakan destructuring agar argumens yang digunakan tidak perlalu melakukan pemanggilan variable secara manual `mhs.nama` dan `mhs.umur`.

Improvisasi yang dilakukan adalah seperti dibawah ini: 

```js
const mhs1 = {
    nama: 'Yudistira Eka Putra',
    umur: 25,
    email: 'yudistiraputra95@gmail.com',
}

const cetakMhs = ({nama, umur}) => {
    return `Halo, nama saya ${nama}, saya berumur ${umur} tahun.`;
}

console.log(cetakMhs(mhs1))
// Halo, nama saya Yudistira Eka Putra, saya berumur 25 tahun.
```

Argumens dari cetakMhs diberi destructuring secara langsung agar variable yang di destructuring dapat dipakai seacara langsung.


### 2. Kasus Kedua
Contoh kasus: Sama seperti kasus pertama tetapi data mahasiswa meliputi data nilai-nilainya. Data nilai adalah berbentuk object.

Dari kasus baru diatas kita memberikan satu argumen baru yaitu nilai. Dan data dari nilai object akan ditampilkan dalam fungsi cetakMhs.

```js
const mhs1 = {
    nama: 'Yudistira Eka Putra',
    umur: 25,
    email: 'yudistiraputra95@gmail.com',
    nilai: {
        tugas: 80,
        uts: 85,
        uas: 75,
    }
}

const cetakMhs = ({nama, umur, nilai}) => {
    return `Halo, nama saya ${nama}, saya berumur ${umur} tahun. Dan nilai uas saya adalah ${nilai.uas}`;
}

console.log(cetakMhs(mhs1))
// Halo, nama saya Yudistira Eka Putra, saya berumur 25 tahun. Dan nilai uas saya adalah 75
```

Tetapi untuk improvisasi lagi kita bisa mendestructuring variable nilai walaupun dia sudah berapa pada argumen yang sudah di destructure.


```js
const mhs1 = {
    nama: 'Yudistira Eka Putra',
    umur: 25,
    email: 'yudistiraputra95@gmail.com',
    nilai: {
        tugas: 80,
        uts: 85,
        uas: 75,
    }
}

const cetakMhs = ({nama, umur, nilai: {tugas, uts, uas}}) => {
    return `Halo, nama saya ${nama}, saya berumur ${umur} tahun. Dan nilai uas saya adalah ${uas}`;
}

console.log(cetakMhs(mhs1))
// Halo, nama saya Yudistira Eka Putra, saya berumur 25 tahun. Dan nilai uas saya adalah 75
```

### [Back To ES6 Index](./README.md)