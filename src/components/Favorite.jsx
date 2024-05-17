import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
export default function Favorite() {
  const  catalog = useSelector(state => state.catalog.favorites) 
  const navigate = useNavigate()
  return (
    <div className="card-actions justify-end">
      <button onClick = {() => navigate('/favorites')} className="btn btn-primary">Избранное ({catalog.length})</button>
    </div>
  )
}