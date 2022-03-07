# Custom Component

Kita sudah mengenal bahwa konsep berputar pada React. Jadi bagaimana cara agar kita membuat custom component milik kita sendiri ?

Yang pertama kita membuat folder baru pada folder src yaitu bernama `components` pada folder ini kita akan meletakkan semua custom components milik kita.

![Components Folder](./images/components-folder.png)

## A. Peraturan pada Custom Components

### 1. Naming Convention Pada Custom Components

Penamaan custom component menggunakan Pascal Case dikarenakan untuk membedakan tag HTML asli dan tag dari custom component yang dibuat.

![Naming Convention Custom Component](./images/naming-convention-custom-component.png)

### 2. Satu Root Component

Jika custom component memiliki banyak tag html maka dibutuhkan satu root element yang sama yang menaungi semua tag html tersebut.

![Error One Root](./images/error-one-root-element.png)

Solusi yang bisa dilakukan adalah dengan menambah div untuk menaungi semua tag html dan pada return diberikan syntax `return ()` agar kita bisa memberitahu bahwa kita melakukan return terhadap satu components full.

![Fix Error One Root](./images/fix-one-root-element.png)

## B. Langkah Pembuatan Custom Components

### 1. Penulisan Code Pada Custom Components

Penulisan code custom pada component sebenarnya sederhana yaitu sebuah function biasa yang memiliki return tag html.

### 2. Lakukan Export Component agar dapat dipakai di file lainnya.

Setelah penulisan code selesai jangan lupa lakukan export agar file tersebut dipanggil di file lainnya.

![Expense Item](./images/expense-item-example.png)

### 3. Lakukan Import Component pada file yang diinginkan.

Untuk melakukan import custom component kita bisa menggunakan syntax import nama custom component.

![Import Expense Item](./images/import-expense-item-example.png)

## C. Basic Styling Pada Custom Component

### 1. Pemberian Nama Class pada tag HTML

Seperti proses pemberian style pada html seperti umumnya kita harus memberikan nama class. Tetapi syntax pemberian class sedikit berbeda dengan html pada umumnya yaitu tidak menggunakan `classname` tetapi `className`. Hal ini terjadi dikarenakan tag html pada react tidak sepenuhnya adalah html biasa tetapi adalah sebuah jsx.

![Classname Basic Styling](./images/basic-styling-classname.png)

### 2. Import CSS kedalam custom component

Jika kita sudah memiliki file CSS, kita tinggal melakukan import kedalam custom component yang kita memiliki. Untuk melakukan import css sedikit berbeda dengan melakukan import custom components.

![Import CSS](./images/import-css.png)

## D. Dynamic Data Custom Components

Pada penggunaan custom components nantinya pastinya kita tidak mungkin menggunakan data yang di `hard code`. Maka dari itu pastinya kita akan menggunakan data dinamis. Untuk menggunakan data dinamis tersebut kita bisa menggunakan syntax `{}` diantara tag HTML. Syntax tersebut bersifat spesial dikarenakan kita bisa menuliskan logic javascript apapu didalamnya. Contoh :

![Dynamic Data 1 + 1](./images/dynamic-data-1+1.png)

Contoh custom component yang menggunakan stored variable pada const local

![Dynamic Data Example](./images/dynamic-data-example.png)

## E. Passing Data Menggunakan "Props"

Kita sudah bisa menggunakan custom component kita berkali berkali (reusable) dan juga kita sudah bisa memberikan data dinamis untuk custom component kita. Tetapi masalahnya data dinamis yang kita berikan bersifat local berada pada custom component tersebut. Bagaimana kah agar kita bisa memberikan data dari luar custom component tersebut.

Maka dari itu diperkenalkan sebuah fitur yang bernama `Props (Properties)`. Props ini memungkinkan kita dapat melakukan passing data dari suatu component ke component lainnya. Props ini penulisannya sama seperti `attributes` pada tag html umumnya.










