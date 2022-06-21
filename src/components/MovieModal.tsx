import { memo, useState } from 'react'
import { Star, Clock, PlayCircle } from 'react-feather';

import '../styles/movie-modal.scss';

interface MovieModalProps {
  movie: {
    Title: string;
    Poster: string;
    Ratings: Array<{
      Source: string;
      Value: string;
    }>;
    Runtime: string;
  }
  setOpenModal: any


}

function MovieModalComponent({ movie, setOpenModal }: MovieModalProps) {
  const [style, setStyle] = useState({})

  function closeModal() {
    setStyle({ transform: 'scale(.85)', transition: 'all .5s linear' })

    setTimeout(() => {
      setOpenModal(false)
    }, 200)

  }

  return (
    <>

      <div className='modal-overlay' onClick={() => closeModal()} />
      <div className='modal' style={style}>
        <img
          src={movie.Poster}
          alt={movie.Title}
        />

        <div className='modal-content'>
          <h2>{movie.Title}</h2>

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

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.
          </p>

          <button onClick={() => alert('Opss! Isso ainda é apenas uma demonstração.')}>
            <PlayCircle />
            <span>Assistir</span>
          </button>
        </div>

      </div>
    </>
  )
}


export const MovieModal = memo(MovieModalComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.movie, nextProps.movie);
});