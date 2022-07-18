# Reducers

## 1. Perkenalan

![Reducers Definition](../../images/reducers-definition.png)

Kita sudah mengenal yang namanya adalah useState dimana yaitu sebuah hook oleh react yang dapat membantu kita dalam state management didalam react. Tetapi bagaimana jika kita mempunyai state yang lebih complex yaitu seperti ketika ada multiple state, banyak cara untuk mengubah statesnya atau dependencies terhadap states lainnya. Hal ini membuat useState lebih susah untuk digunakan, tidak efisien dan buggy di beberapa scenario.

Kemudian diperkenalkan sebuah library baru yang bernama `useReducers` dimana adalah sebuah pengganti `useState` jika kita memerlukan sebuah state management yang lebih powerful. Walaupun nantinya kita tahu `useReducers` lebih powerful kita disarankan tidak selalu menggunakan `useReducers`, karena lebih powerful kita membutuhkan lebih banyak setup untuk menggunakannya.

Untuk Penulisan useReducer adalah seperti dibawah ini:

![useReducer Code](../../images/useReducer-code.png)

<br />

## 2. Contoh Penggunaan Reducers

Jadi seperti apakah contoh state yang lebih complex yang dimaksudkan didalam `useReducers`, lihatlah contoh dibawah ini:

```tsx
    const [enteredEmail, setEnteredEmail] = useState('');
    const [emailIsValid, setEmailIsValid] = useState();
    const [enteredPassword, setEnteredPassword] = useState('');
    const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);
```

Kita bisa lihat diatas bahwa kita mempunyai 5 state yang sebenarnya berhubungan satu sama lain yaitu 

### a. enteredEmail dan emailIsValid 

enteredEmail dan emailIsValid berhubungan karena ketika user menuliskan email kita mengupdate state enteredEmail dan kita melakukan sebuah pengecekan menggunakan function dibawah:

```tsx
    const validateEmailHandler = () => {
        setEmailIsValid(enteredEmail.includes('@'));
    };
```

Kita tahu bahwa untuk melakukan update yang berhubungan dengan suatu state sebelumnya kita menggunakan `prevProps` tetapi pada kasus diatas kita menggunakan `dependencies` state lain (setState nya milik emailIsValid sedangkan state cek nya menggunakan enteredEmail) yang mungkin sangat jarang atau bahkan telat dalam update nilainya dan kita akan mendapat nilai yang tidak paling update.

### b. enteredPassword dan passwordIsValid 

enteredPassword dan passwordIsValid berhubungan karena ketika user menuliskan password kita mengupdate state enteredPassword dan kita melakukan sebuah pengecekan menggunakan function dibawah:

```tsx
    const validatePasswordHandler = () => {
        setPasswordIsValid(enteredPassword.trim().length > 6);
    };
```

Kita tahu bahwa untuk melakukan update yang berhubungan dengan suatu state sebelumnya kita menggunakan `prevProps` tetapi pada kasus diatas kita menggunakan `dependencies` state lain (setState nya milik passwordIsValid sedangkan state cek nya menggunakan enteredPassword) yang mungkin sangat jarang atau bahkan telat dalam update nilainya dan kita akan mendapat nilai yang tidak paling update.

### c. formIsValid

Sedangkan pada formIsValid kita lebih banyak menggunakan dependencies yaitu dua state yang bukan miliknya sehingga kita tidak bisa menggunakan `prevProps`

```tsx
    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);

        setFormIsValid(
        event.target.value.includes('@') && enteredPassword.trim().length > 6
        );
    };

    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);

        setFormIsValid(
        enteredEmail.includes('@') && event.target.value.trim().length > 6
        );
    };
```