import { useCallback, useEffect, useMemo, useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import { api } from './services/api';

import './styles/global.scss';
import './styles/sidebar.scss';
import './styles/content.scss';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface callApiProps {
  route: string;
  setData: any
  param?: string;
}

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  const [genresData, setGenres] = useState<GenreResponseProps[]>([]);
  const [moviesData, setMovies] = useState<MovieProps[]>([]);

  const handleClickButton = useCallback((id: number) => {
    setSelectedGenreId(id);
  }, [])

  function getApi({ route, setData }: callApiProps) {
    api.get(route).then(response => setData(response.data))
  }

  useEffect(() => {
    getApi({
      route: '/genres',
      setData: setGenres
    })
  }, []);

  useMemo(() => {
    getApi({
      route: `movies/?Genre_id=${selectedGenreId}`,
      setData: setMovies
    })

    getApi({
      route: `genres/${selectedGenreId}`,
      setData: setSelectedGenre
    })
  }, [selectedGenreId]);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar
        genres={genresData}
        buttonActive={handleClickButton}
        genreSelectedId={selectedGenreId}
      />
      <Content
        genreActive={selectedGenre}
        movies={moviesData}
      />
    </div>
  )
}