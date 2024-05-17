import { useRef, useState} from 'react'
import getInfo from '../utilits/getInfo';
import MovieCards from './MovieCards';
import { useSelector, useDispatch } from 'react-redux'
import { setMovie } from '../store/catalogSlice';


function SerchIn() {
  const inputRef = useRef(null)
  const movie = useSelector(state => state.catalog.foundMovie)
  
  const dispatch = useDispatch()

  const [load, setLoad] = useState(false)
  const onClick = async(e) => {
    e.preventDefault();
    const inputValue = inputRef.current.value.trim()
    if (inputValue === '') return

    setLoad(true);

    try {
      const res = await getInfo(inputValue)

      if (res.Response === 'False') {
        setLoad(false)
        dispatch(setMovie({}))
        return
      }

      dispatch(setMovie(res))
      setLoad(false)

    } catch (err) { 
      console.error(err)
      setLoad(false)
      dispatch(setMovie({}))
    }
  }


  return (
    <>
      <label className="input input-bordered flex items-center gap-2">
        <input ref={inputRef} type="text" className="grow" placeholder="Введите название фильма или id" />
        <svg onClick= {onClick} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
      </label>

      {load ? (
        <p>Loading...</p>
      ) : (
        <>
          {movie.Response === 'True' ? (
            <>     
               <MovieCards movie={movie} />
            </>
          ) : (
            <p>Нет фильмов соответсвтующих критерию поиска</p>
          )}
        </>
      )}
        
    </>
  )
}
  export default SerchIn;
