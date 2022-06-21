import { memo, useState } from "react";
import { Star, Clock, PlayCircle } from "react-feather";

import "../styles/movie-modal.scss";

interface MovieModalProps {
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
  };
  setOpenModal: any;
}

function MovieModalComponent({ movie, setOpenModal }: MovieModalProps) {
  const [style, setStyle] = useState({});

  function closeModal() {
    setStyle({ transform: "scale(.85)", transition: "all .5s linear" });

    setTimeout(() => {
      setOpenModal(false);
    }, 200);
  }

  return (
    <>
      <div className="modal-overlay" onClick={() => closeModal()} />
      <div className="modal" style={style}>
        <img src={movie.Poster} alt={movie.Title} />

        <div className="modal-content">
          <h2>{movie.Title}</h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              alignItems: "initial",
            }}
          >
            <p>
              <h4>Sinopse: </h4>

              {movie.Plot}
            </p>

            <p>
              <h4>Atores: </h4>
              {movie.Actors}
            </p>

            <p>
              <h4>Direção: </h4>
              {movie.Director}
            </p>
          </div>

          <div>
            <div>
              <Star />
              <span>{movie.Ratings[0].Value}</span>
            </div>

            <div>
              <Clock />
              <span>{movie.Runtime}</span>
            </div>
          </div>

          <button
            onClick={() => alert("Opss! Isso ainda é apenas uma demonstração.")}
          >
            <PlayCircle />
            <span>Assistir</span>
          </button>
        </div>
      </div>
    </>
  );
}

export const MovieModal = memo(MovieModalComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.movie, nextProps.movie);
});
