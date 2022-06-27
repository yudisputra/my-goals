# Bekerja dengan Breakpoints

Ada satu lagi cara yang dapat kita gunakan untuk melakukan debugging menggunakan browser kita sendiri, yaitu dengan cara memberikan `Breakpoints`. `Breakpoints` adalah dimana suatu titik yang kita tentukan membuat proses dari aplikasi kita berhenti sementara, kemudian kita bisa menganalisa proses apa saja yang sedang berlangsung dan juga variabel apa saja yang sedang tersedia. `Breakpoints` yang dapat kita berikan berjumlah tidak terbatas.

Hal pertama yang kita lakukan ketika akan memberikan `Breakpoints` adalah dengan membuka DevTools dari browser. Kemudian kita buka tab bagian `source`.

![Source Tab Dev Tools](../../images/source-tab-dev-tools.png)

Kemudian bagian paling kira kita cari file dimana kita akan memberikan `Breakpoints`.

![Files Dev Tools](../../images/files-dev-tools.png)

Kemudian jika kita klik suatu file yang kita inginkan, maka akan muncul code yang ada pada file tersebut.

![Code Preview Dev Tools](../../images/code-preview-dev-tools.png)

Untuk menambahkan `Breakpoints` kita hanya perlu mengklik angka baris kode yang ingikan. Jika berhasil maka akan muncul warna `biru` yang menandakan sudah diberinya `Breakpoints` selain itu bagian paling kanan tab tersebut akan menuliskan adanya `Breakpoints`.

![Breakpoints Added Dev Tools](../../images/breakpoints-added-dev-tools.png)

Kemudian untuk memulai lakukan pengecekan `Breakpoints` kita bisa mengtrigger function tersebut. Dan jika function tersebut tertrigger maka line code tersebut akan bernawa biru dan proses akan seketika berhenti agar kita bisa melakukan pengecekan atau debugging.

![Breakpoints Triggered Dev Tools](../../images/breakpoints-triggered-dev-tools.png)

Disini kita bisa melihat apa saja yang terjadi pada titik tersebut dan kemudian kita bisa menggunakan command pada tab paling kanan untuk melanjutkan proses, mulai dari next function atau prev function dll.

![Breakpoints Command Dev Tools](../../images/breakpoints-command-dev-tools.png)

### [Back To React Index](../../README.md)

