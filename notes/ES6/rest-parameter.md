# Rest Parameter

`Merepresentasikan argument pada function dengan jumlah yang tidak terbatas menjadi sebuah array.` by Mozilla

Penggunaan Rest Parameter ini sesuai deskripsinya yaitu menangkap paramter sebuah function yang jumlahnya tidak terbatas. Sama seperti spread operators Rest Parameter dilambangkan dengan `...(titik tiga)`.

Contoh:
```js
function myFunc(a, b){
    return b;
}

function myFuncRest(a, b, ...myArgs){
    return myArgs;
}

console.log(myFunc(1, 2, 3, 4, 5));
// Hasil: 2

console.log(myFuncRest(1, 2, 3, 4, 5));
// Hasil: [3, 4, 5]
// Dengan menggunakan rest parameter my args mendapat sisa parameter yang diberikan
```

Contoh Penggunaan lain dari Rest Parameter yaitu: 

## A. Penjumlahan
Kita bisa membuat fungsi yang menerima berapapun jumlah dari parameter yang diberikan:

```js
function jumlahkan(...angka){
    return angka.reduce((a, b) => a + b);
}

console.log(jumlahkan(1, 2 ,3 ,4 ,5));
```

## B. Array Destructuring

Contoh kasus: Buatlah variabel ketua, wakil dan array anggota dari kumpulan data mahasiswa dibawah. Ketua adalah index no 1, wakil index no 2 dan sisanya adalah anggota.

```js
const mahasiswa = ['Sandhika', 'Doddy', 'Erik', 'Fajar', 'Hendra'];
const [ketua, wakil, ...anggota] = mahasiswa;
```

## C. Object Destructuring

Contoh kasus: Buatlah variabel project manager(pm), sisa anggota dari kumpulan data programmer dibawah. Ketua adalah dengan properti bernama pm;

```js
const team = {
    pm: 'Sandhika',
    frontEnd1: 'Doddy',
    frontEnd2: 'Eril',
    backEnd: 'Fajar',
    ux: 'Hendra',
    devOps: 'Ferry',
}

const {pm, ...myTeam} = team;
console.log(myTeam);
```

## D. Filtering

Buatlah sebuah function yang dapat melakukan filter berdasarkan type data yang diberikan.

```js
function filterBy(type, ...values){
    return values.filter(v => typeof v === type);
}

console.log(filterBy('boolean', 1, 2, 'Sandhika', false, 10, true, 'Doddy'));
// Hasil: true, false;
```
### [Back To ES6 Index](./README.md)
