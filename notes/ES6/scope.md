# Scope

Scope mempunyai referense ke access dari suatu variable, dimana variables yang kamu punya dpat diakses dari bermacam contexts.

Scope digambarkan sebagai sebuah kotak yang membatasi variables, object dan functions yang akan menentukan apakah developer bisa mengakses dari suatu sisi atau tidak.

Scope bisa saja `local` atau `global`. `Local` scope memperbolehkan access terhadap siapapun yang mengakses didalam batasan yang sama. Sedangkan `Global` scope tidak dapat mengakses variables yang berada pada scope local.

Contoh : 
```js
// sayHello berada di level global
const sayHello = () => {
    
    //greeting berada pada level local dengan batasan yaitu function sayHello
    let greeting = "Hello";
}

// Disini function sayHello dapat diakses secara global karena dia berada di level global
sayHello();

// Console log dibawah akan menghasilkan pesan error dikarenakan console.log berusaha memanggil greeting yang mempunya scope local
console.log(greeting);
```

### [Back To ES6 Index](./README.md)