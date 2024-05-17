import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import { setCatalog } from '../store/catalogSlice'

function MovieCards({movie}) {
  const  catalog = useSelector(state => state.catalog.favorites)

  const {
    Poster, 
    Title, 
    Year, 
    Genre, 
    Runtime, 
    Director, 
    Actors,
    imdbRating,
    imdbID,
  } = movie;

  const dispatch = useDispatch();
  
  const onClick = () => {
    dispatch(setCatalog(movie))
  }

  return (
     <>
      
        <div className="card card-side bg-base-100 shadow-xl">
          <Link to={`/${imdbID}`}>
            <figure><img src={Poster} alt="Poster"/></figure>
          </Link>
          <div className="card-body">
            <h2 className="card-title">{Title}</h2>
            <h3>{Year}</h3>
            <div className="card-actions justify-end">
              <button onClick={onClick} className="btn btn-primary">
                {
                catalog.some(m => m.imdbID === imdbID) ? 
                'Удалить из избранного' : 'Добавить в избранное'
                }
              </button>
          </div>
          </div>
        </div>
      
    </>
  )
}

export default MovieCards