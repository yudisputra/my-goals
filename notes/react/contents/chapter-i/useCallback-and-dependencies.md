# useCallback dan Dependencies

Pada chapter sebelumnya kita sudah mengetahui cara memakai useCallback, dan pada chapter ini akan dijelaskan lebih lanjut tentang dependenciesnya. Sebelum lebih lanjut kita harus mengenal sebelumnya tentang konsep closure pada java script.

[Read About Closure](./../../../../notes/ES6/closure.md)

Sekarang kita akan membuat eksperimen sederhana pada code kita seperti dibawah ini:

```ts
function App() {
  const [isShowParagraph, setIsShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log('APP RUNNING');

  const toggleParagraphHandler = useCallback(() => {
    if(allowToggle){
      setIsShowParagraph(prevIsShowParagraph => !prevIsShowParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={isShowParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggle!</Button>
      <Button onClick={toggleParagraphHandler}>Toogle Paragraph!</Button>
    </div>
  );
}

export default App;
```

Dari code diatas kita bisa melihat, kita mempunyai dua state, button dan function handlernya. Secara alur adalah kita menggunakan button `allow toggle` untuk mengaktifkan button satunya yang memperbolehkan untuk `Toggle Paragraph`. Pada allowToggleHandler digunakan untuk meng set true allowToggle dan pada toggleParagraphHandler kita gunakan state allowToggle nya didalam `useCallback`.

Kemudian ketika kita coba code yang kita buat, ketika kita click `Allow Toggling` kemudian kita click `Toggle Paragraph`. `Tidak ada apapun yang terjadi!`. Hal ini terjadi karena kita menggunakan useCallback secara tidak benar.

Hal ini berhubungan dengan Closure yaitu Functions didalam Javascript ada closures. Sehingga ketika function toggleParagraphHandler dijalankan dia `menutup` akses dan memakai variabel yang ada didalamnya dan pada kasus ini adalah `allowToggle`. Sehingga karena useCallback menyimpan sebuah function, nilai `allowToggle` ketika function itu disimpan adalah selalu `sama`. 

Kemudian `Dependencies` ini berguna dalam kasus seperti ini. Fungsi dependencies pada Callback ini adalah untuk `re-create function yang distore karena nilai yang dipakai dalam function tersebut, nilainya sudah berubah`.

Jadi function yang benar adalah:

```ts
 const toggleParagraphHandler = useCallback(() => {
    if(allowToggle){
      setIsShowParagraph(prevIsShowParagraph => !prevIsShowParagraph);
    }
  }, [allowToggle]);
```

### [Back To React Index](../../README.md)
