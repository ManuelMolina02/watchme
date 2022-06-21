import { memo } from "react";
import { Button } from "./Button";


//definindo tipagem do objeto 'GenreResponseProps'
type GenreResponseProps = {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

//interface de propriedades do sidebar
interface SidebarProps {
  buttonActive: (id: number) => void;
  genres: GenreResponseProps[];
  genreSelectedId: number
}


//componente sidebar
function SideBarComponent({ buttonActive, genres, genreSelectedId }: SidebarProps) {


  return (
    <>
      <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => buttonActive(genre.id)}
              selected={genreSelectedId === genre.id}
            />
          ))}

        </div>
      </nav>

    </>
  )
}

export const SideBar = memo(SideBarComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.genres, nextProps.genres);
});