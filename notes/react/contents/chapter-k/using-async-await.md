# Menggunakan Async / Await

Sebenarnya promise bukan konsep yang khusus berasal dari react tetapi merupakan konsep dari javascript. Untuk memudahkan penulisan promise ini kita dapat menggunakan yang dinamakan `async / await`. Lihatlah kodingan dibawah ini :

```ts
    const [movies, setMovies] = useState([]);

    function fetchMoviesHandler() {
        fetch('https://swapi.dev/api/films/')
        // Karena fetch bersifat promise kita bisa berikan then, catch and finally.
        .then((response) => {
            // Kita melakukan convert response dari fetch menjadi json
            return response.json();
        })
        // Karena hasil convert juga bersifat promise maka kita bisa menambahkan then kembali dengan menerima data nya
        .then((data) => {
            const transformedMovies = data.results.map(movieData => {
            return {
                id: movieData.episode_id,
                title: movieData.title,
                openingText: movieData.opening_crawl,
                releaseDate: movieData.release_date,
            };
            });
            setMovies(transformedMovies);
        });
    };
```

Akan sama dengan kodingan dibawah ini :

```ts
 async function fetchMoviesHandler() {
    const response = await fetch('https://swapi.dev/api/films/');

    const data = await response.json();

    const transformedMovies = data.results.map(movieData => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date,
      };
    });

    setMovies(transformedMovies);
  };
```

Penggunaan `await` disini digunakan untuk membuat execution berhenti sejenak menunggu hasil promise selesai dahulu dan yang perlu kita ingat bahwa await hanya bisa digunakan didalam `async` function.

### [Back To React Index](../../README.md)
