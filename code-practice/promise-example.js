// Contoh 1 : Case Pertama ini adalah penulisan simple syntax promise
// Variable Ditepati adalah perumpamaan contoh hasil kondisi
let ditepati = true;

// Promise menerima dua fungsi call back yaitu resolve dan reject
const janji1 = new Promise((resolve, reject) => {
    if(ditepati){
        // Kita beri resolve jika kondisi terpenuhi
        resolve('Janji telah ditepati');
    } else {
         // Kita beri reject jika kondisi tidak terpenuhi
        reject('Ingkar Janji');
    }
});

janji1
    // Then akan memanggil response resolve jika promise terpenuhi
    .then(response => console.log('OK! : ' + response))
    // Catch akan memanggil response reject jika promise tidak terpenuhi
    .catch(response => console.log('NOT OK! : ' + response));
    
// Contoh 2: Case kedua ini adalah practice singkat menggunakan asynchronous
let ditepati2 = true;

// Promise menerima dua fungsi call back yaitu resolve dan reject
const janji2 = new Promise((resolve, reject) => {
    if(ditepati2){
        // Kita beri resolve jika kondisi terpenuhi tetapi setelah 2 detik
        setTimeout(() => {
            resolve('Janji telah ditepati');
        }, 2000)
    } else {
         // Kita beri reject jika kondisi tidak terpenuhi tetapi setelah dua detik
         setTimeout(() => {
            reject('Ingkar Janji');
        }, 2000)
    }
});

console.log('mulai');
janji2
    // Then akan memanggil response resolve jika promise terpenuhi
    .then(response => console.log('OK! : ' + response))
    // Catch akan memanggil response reject jika promise tidak terpenuhi
    .catch(response => console.log('NOT OK! : ' + response))
    // Finally akan tetap dipanggil apapun hasil aksi yang didapat
    .finally(() => console.log('selesai menunggu'));
console.log('selesai');


// Contoh 3: Case ketiga adalah penggunaan Promise.all
const film = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            judul: 'Avengers',
            sutradara: 'Yudistira Putra',
            pemeran: 'Doddy, Erik'
        }])
    }, 1000);
});

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'Bandung',
            temp: 26,
            kondisi: 'Cerah Berawan'
        }])
    }, 500);
});

// Jika mau menjalankan promise sendiri-sendiri kita bisa mennggunakan seperti dibawah
// Hasil promisenya akan tampil sesuai waktu tampilnya sendiri-sendiri
film.then(response => console.log(response));
cuaca.then(response => console.log(response));

// Tetapi jika ingin memanggil response bersamaan kita bisa menggunakan Promise.all
Promise.all([film, cuaca])
    .then(response => console.log(response))
// atau menggunakan spread untuk langsung memecah variablenya
    .then(response => {
        const [film, cuaca] = response;
    })


