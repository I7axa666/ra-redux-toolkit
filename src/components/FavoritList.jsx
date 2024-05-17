import { useSelector } from 'react-redux'
import MovieCards from './MovieCards'
import { useNavigate } from 'react-router-dom'

export default function FavoritList() {
  const  catalog = useSelector(state => state.catalog.favorites)
  const navigate = useNavigate()
  return (
    <div>
      <span onClick={() => navigate('/')}>X</span>

        {
        catalog.length > 0 ? (
          <div>
          {catalog.map((movie) => <MovieCards key={movie.imdbID} movie={movie}/>)}
        </div>
        ) : (
          <p>Нет избранных фильмов</p>
        )
        }
    </div>


  )
}