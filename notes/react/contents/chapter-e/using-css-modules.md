# Perkenalan CSS Modules

Cara lain yang dapat kita gunakan selain menggunakan styled component adalah suatu konsep yang bernama `CSS Modules`. Ketika kita membuat project menggunakan perintah `create-react-app` library ini sudah ikut terinstal.

## Cara Penggunaan:

1. Cara yang pertama adalah file css kita yang berisi styling dari komponent kita, kita ubah dengan menambahkan nama yaitu module. Contoh `Button.css` menjadi `Button.module.css`.

![Rename CSS Module](../../images/rename-css-to-module-css.png)

2. Kemudian kita panggil file tersebut dengan menggunakan nama styles dan kita import dari file css module tersebut.

![Import Styles From CSS Module](../../images/import-styles-from-modules-css.png)


3. Kemudian pada tag HTML yang kita inginkan kita panggil `styles` diikuti dengan nama selector class yang kita inginkan.

Dibawah ini sudah disediakan selector dengan nama `button`.

![Selector CSS Modules](../../images/selector-css-modules.png)

Dan pada tag HTML nya kita panggil `styles.button`

![Using CSS Module](../../images/using-css-modules-as-styles.png)

Hasilnya adalah seperti dibawah ini:

![Button CSS Module Result](../../images/button-css-module-result.png)

## Bagaimana dengan dinamis style ?

Untuk melakukan styling dinamis kita bisa memberikan logika tambahan didalam classname nya dan hasilnya adalah stylesnya yang telah disediakan.

![Dynamic Style CSS Module](../../images/dynamic-style-css-module.png)

### [Back To React Index](../../README.md)
