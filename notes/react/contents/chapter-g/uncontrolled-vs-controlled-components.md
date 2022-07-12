# Uncontrolled VS Controlled Components

Pada pembahasan sebelumnya kita sudah belajar menggunakan refs yang dimana kita bisa mengakses sebuah DOM menggunakan variabel yang kita buat. Dari sini ada `dua` pendekatan yang dapat dilakukan ketika melakukan handle pada form.

## 1. Uncontrolled Components

```tsx
    <input
        id='username'
        value={enteredUsername}
        type='text'
        onChange={usernameChangeHandler}
        ref={nameInputRef}
    />
```

Bisa kita lihat pada code diatas kita melakukan refs pada input tersebut, kemudian untuk memproses nilai dari input diatas kita bisa menggunakan kode seperti dibawah ini:

```tsx
    const handleAdd = () => {
        const enteredName = nameInputRef.current.value;
        props.onAdd(enteredName);
    }
```

Dari data diatas kita lihat bahwa kita hanya mengambil nilai dari DOM input tanpa melakukan kontrol terhadap nilainya sehingga dari input tersebut melakukan penyimpanan nilainya menggunakan internal statenya sendiri. Hal ini sering disebut dengan `Uncontrolled Components` karena kita tidak melakukan penambahan proses apapun internal state komponen tersebut.

## 2. Controlled Components

```tsx
     const [enteredUsername, setEnteredUsername] = useState('');

     return (
         <input 
            id='username'
            value={enteredUsername}
            type='text'
            onChange={usernameChangeHandler}
        />
     )
```

Berkebalikan dengan menggunakan refs, ketika kita menggunakan `state` untuk mengatur nilai dari suatu input maka input tersebut bisa kita sebut sebagai `Controlled Components`.

### [Back To React Index](../../README.md)
