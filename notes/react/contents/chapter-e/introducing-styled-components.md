# Memperkenalkan Styled Components

Kita sudah mengenal cara memberikan style pada komponen kita menggunakan regular css, untuk membeerikan CSS ini kita biasa menggunakan selector class atau bahkan tag.

![Class Tag Selector](../../images/class-tag-selector.png)

Ada satu hal yang perlu diperhatikan ketika melakukan import file CSS dalam komponen kita, yaitu style tersebut tidak benar-benar hanya mempunyai `scope` pada komponen tersebut.

![Scope Style CSS](../../images/scope-style-css.png)

Yang artinya adalah jika ada class atau juga tag yang mempunyai nama sama pada komponen lain, maka style tersebut akan bocor pada komponen lainnya.

Untuk mengatasi hal ini ada beberapa cara yang paling populer dilakukan:

## 1.Styled Components

Salah satu cara yang dapat kita lakukan adalah menambahkan sebuah library yang bernama `styled-components`. `Styled Components` memberikan kita cara agar kita dapat membuat suatu komponen HTML yang dapat kita berikan suatu style dan hasilnya akan menghasilkan komponen HTML tersebut dengan `class` spesifik dengan style yang kita sudah inputkan.

![Styled Components Button](../../images/styled-components-button.png)

Yang perlu kita lakukan dalam menggunakan styled components adalah pertama kita instal library styled components. Kemudian kita tinggal library terus dengan menggunakan `styled` kemudian diberi dot dan kita panggil nama komponen HTML apa yang kita mau buat. Setelah kita berikan `backtick` yang ditengahnya dapat diisi dengan style dari komponen HTML yang ingin kita buat. Yang perlu diperhatikan dalam styled ini adalah dia menggunakan `Tagged Template` untuk code style nya dan juga css didalam nya sudah support penulisan seperti `SCSS`.

![Styled Components Result](../../images/styled-components-result.png)

### a. Styled Components Dengan Dynamic Props

Kita sudah mempelajari bagaimana memberikan css class dan inline secara dinamis pada suatu komponen. Tetapi bagaimana jika kita ingin memberikan style dinamis pada styled component. Cara yang bisa kita lakukan yaitu adalah memberikan props terhadap styled component yang telah kita buat.

![Dynamic Props Styled Component](../../images/dynamic-props-styled-component.png)

Pada styled component yang telah kita buat kita bisa memperikan sebuah props seperti diatas yaitu `invalid`. Kemudian pada css nya kita bisa memberikan curly braces dan kondisi seperti gambar dibawah ini.

![Dynamic Props Styled Component CSS](../../images/dynamic-props-styled-component-css.png)

### b. Media Queries

Salah satu konsep CSS lain yang sering dipakai adalah `media queries` yaitu bagaimana cara CSS bereaksi terhadap ukuran dari media yang digunakan. Pada styled component kita juga bisa menambahkan media queries secara mudah yaitu seperti dibawah ini.

![Media Queries Styled Component](../../images/media-queries-styled-component.png)

### [Back To React Index](../../README.md)

