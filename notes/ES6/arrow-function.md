# Arrow Function

Ada beberapa cara penulisan function pada java script

## Function Declaration

```js
function tampilPesan(nama){
    alert('halo' + nama)
}
```

## Function Expression

```js
let tampilPesan = function (nama) {
    alert('halo' + nama);
}
```

## Arrow Function

```js
let tampilPesan = (nama) => {
    alert('halo' + nama);
}
```

### Penulisan Lain Arrow Function

* Implicit Return

```js
const tampilPesan = (nama) => `Halo, ${nama}`;
```