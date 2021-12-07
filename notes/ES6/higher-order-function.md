# Higher Order Function

Pengertian dari Higher Order Function adalah function yang beroperasi pada function yang lain. Baik itu digunakan dalam argument maupun sebagai return value.

Contoh:

```js
function kerjakanTugas (matakuliah, selesai){
    console.log(`Mulai mengerjakan tugas ${mataKuliah}`);
    selesai();
}

function selesai(){
    alert(`Selesai mengerjakan tugas!`);
}

kerjakanTugas('Pemrograman Web', selesai);
```

![Higher Order Example](images/higher-order-example.PNG)

Pada contoh diatas `function kerjakan tugas()` merupakan Higher Order Function karena dia mempunyai `function selesai()` sebagai argumennya. Sedangkan `function selesai()` disebut sebagai Callback.

Contoh Lain:

```js
setTimeout(function() {
    console.log('Hello World')
}, 1000)
```

Pada function setTimeout menerima dua argumen yaitu salah satu nya adalah fungsi. Sehingga function `setTimeout` juga dapat disebut sebagai Higher Order Function.


