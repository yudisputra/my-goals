# Limitasi JSX dan Wrapper Element

Ada satu limitasi dari jsx yang sudah pernah kita jumpai sebelumnya yaitu `kita tidak bisa mengembalikan lebih dari satu root JSX element. Contohnya:

```ts
return(
    <h2>Hi There</h2>
    <p>This does not work</p>
)
```

Untuk mengatasi hal ini kita bisa menambahkan div baru diatas kedua komponen tersebut sehingga menghasilkan satu root yang sama. Hal ini disebut dengan `Wrap`.Contoh :

```ts
return(
    <div>
        <h2>Hi There</h2>
        <p>This does not work</p>
    </div>
)
```

Hal ini dapata mengatasi limitasi dari jsx tersebut tetapi karena kita menambahkan sebuah div baru sebagai `Wrap`. Maka suatu saat kita akan bertemu dengan sebuah kasus yang bernama `div soup`. Ilustrasinya seperti dibawah ini:


```html
<div>
    <div>
        <div>
            <div>
                <div>
                    <h2>Hi There</h2>
                    <p>This does not work</p>
                </div>
            </div>
        </div>
    </div>
</div>
```

Karena semakin banyak div yang dirender maka proses dari aplikasi yang kita buat akan semakin lambat.

Untuk mengatasi hal ini ada sebuah trick yang dapat digunakan yaitu kita membuat sebuah function bernama `Wrapper` yang biasanya diletakkan didalam folder `Helpers` dan didalam folder `Components`.

```js
const Wrapper = props => {
    return props.children
};

export default Wrapper;
```

Kita bisa menggunakan function diatas untuk menggantikan div ketika kita ingin melakukan wrap pada component.

```html
<Wrapper>
    <h2>Hi There</h2>
    <p>This does not work</p>
</Wrapper>
```

Karena function wrapper hanya mengembalikan childrennya maka tidak akan ada render tambahan.

### [Back To React Index](../../README.md)

