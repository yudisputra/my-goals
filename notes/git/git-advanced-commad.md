# Git Advanced Command

## 1. Git Config

Digunakan untuk melakukan perubahan nilai pada configurasi Git pada level Global maupun Local.<br /><br />

### Git Config Levels dan Files<br /><br />
* --local

Secara default semua perubahan akan berada pada level ini. Konteks perubahan ini hanya di simpan kedalam repo local saja. Yaitu didalam repo pada file `.git/config`

* --global

Konfigurasi level global bersifat user-specific terhadap user pada operating system yang digunakan. Konfigurasi ini disimpan di `C:\Users\\.gitconfig` ( jika pada windows )

* --system

Konfugrasi level system akan di apply di seluruh repo dan user yang ada pada device yang digunakan. Konfigurasi ini disimpan pada `C:\ProgramData\Git\config` ( jika pada windows )<br /><br />

### Contoh beberapa penggunaan :

1. Mengecek Semua Config
* `git config --list`
<br />
<br />

2.  Deklarasi username dan email
* `git config --global user.name "Yudistira Eka Putra"`
* `git config --global user.email "yudistira@tes.com"`
<br />
<br />

## 2. Git Log

Digunakan untuk melihat semua history commit yang dilakukan.

![Git Log](images/git-log.PNG)

* Melihat history 3 teratas menggunakan `git log -3`

![Git Log Count](images/git-log-count.PNG)

* Melihat history sebuah file menggunakan `git log -- style.css`

![Git File History](images/git-file-history.PNG)

* Melihat history dalam bentuk graph ( seperti pada aplikasi GUI github ) menggunakan 

* `git log -all --decorate --oneline --graph`

![Git Graph](images/git-graph.PNG)
<br />
<br />
## 3. Git Checkout Untuk mengembalikan file

Digunakan untuk kembali ke suatu keadaan commit yang telah dilakukan.

### A. Mengembalikan file yang telah dihapus pada commit
* Lihat history file yang ingin dikembalikan

![Git File History](images/git-file-history.PNG)

* Lakukan Checkout sesuai dengan 5 character sebuah commit dan tentukan file yang ingin dikembalikan

![Git Checkout Restore](images/git-checkout-restore.PNG)