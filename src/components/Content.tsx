import { MovieCard } from "./MovieCard"


type moviesProps = {
  imdbID: string;
  Title: string;
  Poster: string;
  Plot: string;
  Actors: string;
  Director: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

type genreProps = {
  id: number,
  name: string,
  title: string
}


interface ContentProps {
  genreActive: genreProps,
  movies: moviesProps[]
}


export function Content({ genreActive, movies }: ContentProps) {

  return (
    <>
      <div className="container">
        <header>
          <span className="category">Categoria:<span> {genreActive.title}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </div>
        </main>
      </div>
    </>
  )
}