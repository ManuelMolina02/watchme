import { memo, useState } from 'react'
import { Star, Clock, ChevronsUp } from 'react-feather';

import '../styles/movie-card.scss';
import { MovieModal } from './MovieModal';

interface MovieCardProps {
  movie: {
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

}

function MovieCardComponent({ movie }: MovieCardProps) {
  const [openModal, setOpenModal] = useState(false);

  function showModal() {
    setOpenModal(true);
  }

  return (
    <>
      <div className="movie-card" onClick={() => showModal()}>
        <img
          src={movie.Poster}
          alt={movie.Title}
        />

        <div>
          <div className="movie-info">
            <span >{movie.Title}</span>
            <div className="meta">
              <div>
                <Star />
                <span>{movie.Ratings[0].Value}</span>
              </div>
            </div>
          </div>
          <ChevronsUp className='viewMore' />
        </div>
      </div>

      {
        openModal &&
        <MovieModal movie={movie} setOpenModal={setOpenModal} />
      }
    </>
  )
}


export const MovieCard = memo(MovieCardComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.movie, nextProps.movie);
});