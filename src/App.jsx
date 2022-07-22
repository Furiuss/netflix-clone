import { useState, useEffect } from 'react'
import Tmdb from './Tmdb'
import {MovieRow} from './components/MovieRow'
import {FeatureMovie} from './components/FeatureMovie'

import './App.css'

function App() {

  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList()

      setMovieList(list)
      
      let originals = list.filter(i => i.slug === 'originals')
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
      
      setFeatureData(chosenInfo)
    }

    loadAll()
  }, [])

  return (
    <div className="page">

    {featureData && 
      <FeatureMovie item={featureData}/>
    }

      <section className="lists">
        {movieList.map((item, key) => (
          <div>
            <MovieRow 
              key={key} 
              title={item.title}
              items={item.items}
             />
          </div>
        ))}
      </section>
    </div>
  )
}

export default App
