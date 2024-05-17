import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom"
import { setCatalog } from "../store/catalogSlice"

export default function ViewMovie() {
  const navigate = useNavigate()
  const movie = useSelector(state => state.catalog.foundMovie)
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
          
          <figure><img src={Poster} alt="Poster"/></figure>
          
          <div className="card-body">
            <h2 className="card-title">{Title}</h2>
            <h3>{Year}</h3>
            <p>Genre {Genre}</p>
            <p>Runtime {Runtime}</p>
            <p>Director {Director}</p>
            <p>Actors {Actors}</p>
            <div className="card-actions justify-end">
              <button onClick={onClick} className="btn btn-primary">В избранное</button>
          </div>
          
          </div>
          <span onClick={() => navigate(-1)}>X</span>
        </div>
      
    </>
  )
}