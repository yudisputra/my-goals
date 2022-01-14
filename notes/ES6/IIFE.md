# Immediately Invoked Function Expression ( IIFE )

Immediately Invoked Function Expression adalah javascript functions yang berisikan expressions yang langsung dijalankan.

Keuntungan dari memakai konsep ini adalah variables yang dideklarasikan didalam functions IIFE tidak bisa diakses dari luar sehingga tidak merusak scope global. Tetapi tujuan utamanya adalah eksekusi secara langsung sehingga adanya privacy data.

## Syntax

```js
(function(a,b){         
     return a + b; 
})(10,20);
```

Atau menggunakan arrow function:
```js
(() => {     
    //... 
})();
```

### [Back To ES6 Index](./README.md)