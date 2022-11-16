# Menangani HTTP Errors

Dalam hal pengambilan data pun juga pasti akan terdapat suatu hal seperti `Error`. Error ini bisa terjadi karena banyak hal mulai dari tidak adanya akses internet, unauthorized, forbidden dan lain-lain.

Untuk melihat semua response code yang ada kita bisa lihat daftarnya pada link dibawah ini:

[Response Code List](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

Status error yang biasanya kita dapat adalah yaitu 400 an dimana mulai dari Bad Request, Unauthorized, Forbidden, Not Found dan lain-lain. Maupun Error dengan code 500 an dimana yang berhubungan dengan server yaitu internal server error dan lain-lain.

Pada UI kita perlu menampilkan pesan `Error` agar user tahu bahwa ada error yang terjadi ketika mengambil data. Untuk melakukan hal ini kita akan melihat code dibawah ini: 

```ts
// Kita tambah satu state untuk menyimpan error
  const [error, setError] = useState(null);

   async function fetchMoviesHandler() {
    setIsLoading(true);
    setError(null);

    // Untuk menangkap error kita butuh melakukan wrap menggunakan try catch
    try {
      const response = await fetch('https://swapi.dev/api/films/');

      // Berbeda dengan menggunakan axios yaitu melakukan then catch, dalam fetch kita mengcek menggunakan if response.ok
      if(!response.ok){
        throw new Error('Something went wrong!');
      }

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

      // Kemudian di catch nya kita set error nya kedalam state yang telah kita buat
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };
```

### [Back To React Index](../../README.md)