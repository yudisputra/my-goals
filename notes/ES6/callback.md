# Callback

Callback adalah Function yang dikirimkan sebagai parameter pada function yang lain. Pengertian lain juga dapat dituliskan seperti ini, Function yang dieksekusi setelah fungsi lain selesai dijalankan.

Contoh Callback:
```js
// Function halo akan dipanggil di fungsi lain sebagai argumen ( callback ).
function halo(nama){
    alert(`Halo, ${nama}`);
}

function tampilkanPesan(callback){
    // Prompt adalah meminta user untuk menginputkan sesuatu
    const nama = prompt('Masukan Nama : ');
    callback(nama);
}

// Disini tampilkanPesan memanggil function halo sebagai callbacknya
tampilkanPesan(halo);

// Penulisan function yang digunakan sebagai callback dalam argumen berpengaruh dalam penggunaannya. Jika dituliskan seperti dibawah maka function halo akan dieksekusi secara langsung.
tampilkanPesan(halo());

// Contoh diatas merupakan bentuk dari Synchronous Callback yang jarang digunakan.
```

Penulisan lebih singkat case diatas bisa dilakukan seperti ini:

```js
tampilkanPesan(nama => alert(`Halo, ${nama}`));
```

Contoh lain callback:

```js
const mhs = [
    {
        "nama": "Erik",
        "nrp": "00001",
        "email": "erik@gmail.com",
        "jurusan": "Teknik Industri",
        "idDosenWali": 1,
    },
    {
        "nama": "Putra",
        "nrp": "00002",
        "email": "putra@gmail.com",
        "jurusan": "Teknik Informatika",
        "idDosenWali": 2,
    },
];

console.log("mulai");
mhs.forEach(m => console.log(m.nama));
console.log("selesai");

// Hasil dari code diatas bersifat synchronus karena forEach diats bersifat blocking sehingga console.log("selesai") akan dipanggil setelah forEach selesai.
```

Contoh Asynchronous CallBack yaitu pada ajax API:

```js
console.log('mulai');
$.ajax({
    url: 'data/mahasiswa.json',
    success: (mhs) => {
      mhs.forEach(m => console.log(m.nama));  
    },
    error: (e) => {
        console.log(e.responseText);
    }
});
console.log('selesai');

//Pada code diatas code akan berjalana pada console.log(mulai) kemudian perintah ajax akan dilakukan tetapi tidak melakukan blocking sehingga console.log(selesai) akan dijalankan tanpa perlu menunggu ajax selesai. Kemudian didalam code aja terdapat success dan erorr sebagai callback yang akan dipanggil sesuai hasil yang didapat dari pemanggilan URL
```

<br />  

`Untuk latihan Callback lebih lanjut bisa lihat :`
https://www.youtube.com/watch?v=jRsSVw3Ibhw&list=PLFIM0718LjIUGpY8wmE41W7rTJo_3Y46-&index=22 

### [Back To ES6 Index](./README.md)