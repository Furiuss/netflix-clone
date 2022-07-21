import { useState, useEffect } from 'react'
import Tmdb from './Tmdb'
import './App.css'

function App() {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList()
      setMovieList(list)
    }

    loadAll()
  }, [])

  return (
    <div className="App">
      {movieList.map((movie) => (
        <p>{movie.slug}</p>
      ))}
    </div>
  )
}

export default App
