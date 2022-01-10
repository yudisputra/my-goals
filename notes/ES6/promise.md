# Promise

Sebelum pembahasan promise, dibawah ini ada beberapa contoh cara memanggil API untuk melakukan fetch data.

### A. Menggunakan Ajax

```js
// Untuk menggunakan ajax kita butuh memanggil library ajax yang dapat kita download dari website resminya.Kemudian setelah kita panggil kita dapat gunakan seperti diabwah ini.

$.ajax({
   url: 'http://www.omdbapi.com/?apikey=dca61bcc&s=avengers',
   sucess: movies => console.log(movies), 
});
```

### B. Menggunakan Vanilla Javascript

```js
// Kita dapat menggunakan vanilla javascript tanpa bantuan ajax seperti dibawah ini:

const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    if(xhr.status === 200){
        if(xhr.readyState === 4){
            // response yang didapat berbentuk teks sehingga kita harus mengubah menjadi JSOn
            console.log(JSON.parse(xhr.response));
        }
    }else{
        console.log(xhr.responseText);
    }
}
```


Hasil dari console.log menggunakan AJAX maupun Vanilla JAvascript diatas adalah:  
![Ajax Result](images/ajax-result.PNG)

### C. Menggunakan Fetch

Ada cara baru memanggil API yaitu menggunakan fetch, tetapi hasil console.log fetch ini akan menghasilkan `Promise`.

```js
const movies = fetch('http://www.omdbapi.com/?apikey=dca61bcc&s=avengers');
console.log(movies);
```

![Promise Result](images/promise-result.PNG)
