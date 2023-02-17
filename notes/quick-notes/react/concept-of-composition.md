# The Concept of "Composition" ( Card / Children Props)

Konsep ini sering disebut dengan konsep composition atau children props. Secara praktik artinya adalah kita membuat sebuah komponen yang bersifat `container` atau sebagai wadah bagi komponen lainnya. Tujuannya adalah untuk mengurangi perulangan style maupun html yang ada pada semua komponen yang kita buat nantinya.

## 1. Pembuatan Container

Komponen container ini memiliki nama biasanya yaitu `Card`, kemudian yang harus diperhatikan disini adalah penggunaan props bernama `children`. Props Children adalah props yang tidak digunakan sebagai custom props yang dimana props ini digunakan untuk menampilkan isi content dari apa yang berada di opening dan closing tag dari komponen container.

Kemudian yang perlu kita tambahkan adalah suatu variabel yang menampung class dari props classname yang diberikan. Hal ini bertujuan agar className juga dapat diberikan secara custom.

Komponen Container:
```js
import './Card.css';

function Card(props){
  const classes = 'card' + props.className;

  return <div className={classes}>{props.children}</div>
}

export default Card;
```

Contoh Penggunaan:
```js
 return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </Card>
    );
```

## 2. Duplicate Style Reduction

Tujuan dari penggunaan konsep ini paling umum adalah untuk menyamakan style semua div yang ada. Bisa kita lihat dibawah ini kita mempunyai dua komponen yang memakai `box-shadow` dan `border-radius`. Maka kita bisa membuat sebuah wadah komponen dengan style tersebut sehingga jika ada perubahan data kita hanya perlu melakukan perubahan di `container` tersebut.

CSS komponen lain
```css
.expense-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  margin: 1rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  background-color: #4b4b4b;
}
```

```css
.expenses {
  padding: 1rem;
  background-color: rgb(31, 31, 31);
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
}
```

Kita pindahkan style yang sama kedalam style dari komponen `container`

```css
.card{
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
}
```

## 3. Duplicate Component/HTML reduction
Selain style reduction yang paling umum kita bisa melakukan pengurangan duplikasi dari suatu component ataupun HTML. Contoh yang paling sering digunakan adalah ketika beberapa komponen menggunakan header yang sama.

Komponen lain:
```js
function Card(props){
  return (
    <div className='container'>
      <header>Tes Header</header>
      {props.children}
    </div>
  )
}
```

Komponen Container:
```js
return (
  <div className='component-1'>
   <Card>
    <div>Isi Component1</div>
   </Card>
  </div>
)
```