# Optimizing dengan useMemo()

## 1. Perkenalan useMemo()

Kita sudah mengetahui cara mengoptimisasi components menggunakan `React.memo` dan `useCallback` tetapi bagaimana kalau kita menemukan kasus seperti dibawah ini:

App.js

```ts
function App() {
  const [listTitle, setListTitle] = useState('My List');

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  return (
    <div className="app">
        // Items props menggunakan array static
      <DemoList title={listTitle} items={[5, 3, 1, 10, 9]} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}
```

Demolist.ts

```ts
const DemoList = (props) => {
    // Sorted list melakukan sorting terhadap props item
  const sortedList = props.item.sort((a, b) => a - b);
  console.log('DEMO List Running');

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
```

Bisa kita lihat pada file App.js diatas kita memberikan komponent `Demolist` sebuah props yang berupa array. Kemudian ketika running aplikasi tersebut kita akan melihat ketika button `changeTitleHandler` ditekan maka title akan berubah dan juga pada `Demolist` component, sorting terjadi lagi dikarenakan re-render state parentnya.

Untuk cara pertama kita bisa memberikan React.memo terhadap component Demolist.

```ts
export default React.memo(Demolist)
```

React.memo akan berjalan semestinya dikarenakan memang value dari state nya berubah yaitu title. `Tetapi bagaimana dengan sorting ?` Apakah sort harus berjalan kembali dikarenakan componentnya re-evaluate. Seharusnya tidak. Untuk mengoptimize hal ini kita dapat menggunakan sebuah hooks bernama `useMemo`.

useMemo sebenarnya mirip dengan useCallback dimana useCallback digunakan untuk sebuah function, `useMemo digunakan untuk data`.

## 2. Contoh Penggunaan useMemo

Pada component `Demolist` kita akan menggunakan nya seperti ini:

```ts
const DemoList = (props) => {
  const { items } = props;

  const sortedList = useMemo(() => {
    console.log('Items sorted');
    return items.sort((a, b) => a - b);
  }, [items]); 
  console.log('DemoList RUNNING');

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);
```

Bisa kita lihat bahwa mengwrap proses sort kita menggunakan `useMemo` dengan wrap ini menandakan bahwa selama items nilainya tidak berubah kita tidak perlu melakukan sort kembali. Dan juga yang perlu kita ingat dalam dependensinya kita melakukan `destructuring` terlebih dahulu `items` dari `props` sebelum digunakan.

Selain itu di file App kita juga perlu menggunakan useMemo terhadap items arraynya seperti dibawah ini:

```ts
function App() {
  const [listTitle, setListTitle] = useState('My List');

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
```

Kita melakukan wrap useMemo juga karena setiap App dirender ulang array yang diberikan static tersebut, `akan dibuat lagi dengan menggunakan reference yang berbeda`. Sehingga useMemo di Demolist akan menganggap props yang diterima selalu sama.

## 3. Penggunaan useMemo < useCallback

Ada yang perlu diingat dalam penggunaan useMemo dan useCallback adalah kita akan jarang menggunakan useMemo dibandingkan dengan useCallback. `Hal ini dikarenakan untuk menyimpan sebuah function itu adalah hal yang bagus tetapi untuk menyimpan sebuah data perlu diperhatikan skenario dari proses yang dijalankan.`

### [Back To React Index](../../README.md)
