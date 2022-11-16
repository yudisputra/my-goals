# Menangani Loading dan States Data

Kita tahu bahwa proses fetch data didalam server berjalan sesuai dengan kecepatan internet yang kita miliki. Maka dari itu untuk dalam sebuah proses fetch biasanya para developer memberikan loading kedalam content nya. Hal ini digunakan agar user dapat mengetahu bahwa ada sebuah proses yang sedang berjalan.

Selain loading kita juga dapat memberikan tulisan `No Content` ketika content kita fetch tidak mendapatkan hasil apapun.

Untuk melakukan kedua hal tersebut kita bisa lihat code dibawah ini:

```ts
 async function fetchMoviesHandler() {
    // Kita set loading menjadi true untuk menampilkan loading
    setIsLoading(true);
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

    // Disini kita ganti loading kita menjadi selesai
    setIsLoading(false);
  };

    return (
        <section>
            {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
            {!isLoading && movies.length === 0 && <p>Found no movies.</p>}
            {isLoading && <p>Loading</p>}
        </section>
    )
```

### [Back To React Index](../../README.md)
