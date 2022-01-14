# Closures

Closure adalah function didalam function lain yang dapat mengakses variables yang didefine didalam function luarnya. Inner function secara teknis adalah `closure` dan sekali lagi bisa dikatakan dapat mengakses variables yang dituliskan pada parentnya. Tetapi function parent tidak bisa mengakses variables yang dituliskan didalam inner function.

Closure berfungsi untuk melakukan passing variables, arrays atau method dari function yang luar kedalam function yang berada didalamnya.

Contoh:

```js
// Function init adalah function parent
function init() {
    
  // nameadalah variable local yang berada pada init
  let name = 'Mozilla'; 
  
  // displayName adalah inner function, sebuah closure
  function displayName() {
      
    // seperti yang dijelaskan tadi displayName dapat memakai variable name yang dideklarasikan di function parentnya.
    alert(name);
  }
  displayName();
}
init();

```

### [Back To ES6 Index](./README.md)