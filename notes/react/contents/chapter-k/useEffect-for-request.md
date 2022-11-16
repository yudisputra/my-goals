# Menggunakan useEffect untuk HTTP Request

Banyak halaman web saat ini ketika kita membuka suatu halaman kita akan langsung mengambil data untuk ditampilkan. Untuk melakukan hal ini dalam React kita akan menggunakan sebuah function yang sudah kita pelajari sebelumnya yaitu useEffect.

```ts
 useEffect(() => {
    fetchMoviesHandler();
  }, []);
```

Sebenarnya secara simple kita dapat menggunakan useEffect tanpa dependensi seperti diatas dimana yang artinya function tersebut akan dipanggil hanya sekali ketika awal render saja.

Tetapi kita tahu bahwa kita harus memasukkan semua variabel yang kita pakai kedalam dependensi useEffect. Hal ini juga termasuk dengan function yang kita gunakan.

Maka dari itu kita dapat mengubah function diatas seperti dibawah:

```ts
const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://swapi.dev/api/films/');

      if (!response.ok) {
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
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []
  );

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

```

Kita menggunakan useCallback karena function tersebut digunakan dalam suatu effect dan juga kita tidak memberikan dependesi apapun didalam function useCallback tersebut dikarenakan kita tidak menggunakan variabel dari luar sama sekali.

### [Back To React Index](../../README.md)
