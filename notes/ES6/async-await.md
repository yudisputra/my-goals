# Async Await

## 1. Pengertian

Asyncronous Function adalah sebuah function yang bekerja secara asyncronous ( melalui event loop ), yang menghasilkan ( implisit ) promise sebagai return value-nya, tapi cara penulisan code nya menggunakan penulisan syncronous ( standard ).

Pengertian lainnya yang lebih rinci mengatakan bahwa sebuah `async` function dapat memiliki keyword `await` di dalamnya untuk memberhentikan sementara eksekusi fungsinya sambil menunggu `promise` nya selesai.

## 2. Code

```js
// Kita buat salah satu contoh promise yang bernama coba
const coba = new Promise(resolve => { 
    setTimeout(() => {
        resolve('selesai')
    }, 2000);
});

// Hasil dari console.log ini akan menghasilkan promise pending dikarenakan kita memanggilnya secara synchronous
console.log(coba);

// Untuk menjalankan console log secara asynchronous kita beri then
coba.then(() => console.log(coba));

// Sekarang kita coba menuliskan Promise tersebut kedalam sebuah variable
const cobaPromise = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('selesai')
        }, 2000);
    });
}

// Disini kita membuat function baru yang menerapkan async await
// Pertama kita beri async yang menandakan fungsi dibawah ini mempunyai proses asynchronous
const cobaAsync = async () => {
    // Kedua kita spesifik mana function yang bersifat asynchronous
    const coba = await cobaPromise();
    console.log(coba);
}

// Terakhir kita jalankan saja fungsi tersebut
cobaAsync();

// Selain itu juga ada kasus lain yang menggunakan error handling
// Disini kita menggunakan kedua parameter yaitu resolve dan reject
const cobaPromise2 = () => {
    return new Promise((resolve, reject) => {
        const waktu = 5000;
        if(waktu < 5000){
            setTimeout(() => {
                resolve('selesai')
            }, waktu);
        } else {
            reject('kelamaan!');   
        }
    });
}

// Untuk menangkap erro dari reject kita masukkan fungsi dalam try catch
const cobaAsync2 = async () => {
    try{
        const coba = await cobaPromise2();
        console.log(coba);
    } catch (err) {
        console.log(err);
    }
}

cobaAsync2();

```

### [Go To Code Practice](../../code-practice/async-await-example.js)
### [Back To ES6 Index](./README.md)