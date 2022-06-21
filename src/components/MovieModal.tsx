import { memo, useState } from 'react'
import { Star, Clock, ChevronsUp } from 'react-feather';

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

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'space-around', width: '100%', height: '80%', margin: '0 40px' }}>
          <h2>{movie.Title}</h2>

          <div>
            <div>
              <Star />
              <span>{movie.Ratings[0].Value}</span>
            </div>

            <div>
              <Clock />
              {movie.Runtime}
            </div>
          </div>

          <span>asdasd
            asasasd adsas sa asssd asdas asd asas asdas asd asdas dasdas as dasd asdas asda asd asas asddsaadssda sad asd sadsaas saas asdasdas sa sads asddsa asas asd adassadds aads asd ads
          </span>

          <button>assistir</button>
        </div>

      </div>
    </>
  )
}


export const MovieModal = memo(MovieModalComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.movie, nextProps.movie);
});