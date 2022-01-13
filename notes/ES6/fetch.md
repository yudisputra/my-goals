# Fetch

## 1. Pengertian

Fetch adalah sebuah API dalam javascript modern yang tugasnya mengambil data secara asynchronous atau ajax.


Karena `Fetch` bersifat asynchronous maka dia menghasilkan `Promise` sehingga kita harus memberikan `then` and `catch` nya. Contoh Simple Fetch :

```js
fetch('https://www.tes.com')
    // Hasil Flattening Response masih berupa promise
    .then(response => response.json())
    // Sehingga kita berikan then sekali lagi
    .then(response => console.log(response));
```

## 2. Syntax

Fetch memiliki dua parameter yaitu `fetch(resources, init)`. Dan init sebagai optional parameter. Selain itu dalam responsenya sendiri terdapat beberapa property dan method.

### A. Resources
Berisi resources yang akan kita lakukan `Fetch`.
* URL : alamat dari sumber yang kita akan ambil
* Request Object: Sama seperti promise yaitu object yang mempresentasikan ketika kita meminta dari sumber.

### B. Init
Konfigurasi tambahan pada sebuah request berbentuk object.
* method
* header
* body
* mode
* cache
* referrer
* referrerPolicy
* integrity
* keepalive
* signal

### C. Response ( Property )
* headers
* ok
* redirected
* status
* statusText
* type
* url
* body

### D. Response ( Method )
* clone()
* error()
* redirect()
* blob()
* formData()
* json()
* text()

### [Back To ES6 Index](./README.md)