# Peraturan pada Custom Components

## 1. Naming Convention Pada Custom Components

Penamaan custom component menggunakan Pascal Case dikarenakan untuk membedakan tag HTML asli dan tag dari custom component yang dibuat.

![Naming Convention Custom Component](../../images/naming-convention-custom-component.png)

## 2. Satu Root Component

Jika custom component memiliki banyak tag html maka dibutuhkan satu root element yang sama yang menaungi semua tag html tersebut.

![Error One Root](../../images/error-one-root-element.png)

Solusi yang bisa dilakukan adalah dengan menambah div untuk menaungi semua tag html dan pada return diberikan syntax `return ()` agar kita bisa memberitahu bahwa kita melakukan return terhadap satu components full.

![Fix Error One Root](../../images/fix-one-root-element.png)

### [Back To React Index](../../README.md)