import { useState, useEffect } from 'react'
import Tmdb from '../Tmdb'
import {MovieRow} from '.;/components/MovieRow'
import {FeatureMovie} from '../components/FeatureMovie'

export const Home = () => {  
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
            <div key={key}>
              <MovieRow  
                title={item.title}
                items={item.items}
              />
            </div>
          ))}
      </section>  
      
      {movieList.length <= 0 &&
        <div className="loading">
          <img src="https://i.pinimg.com/originals/ce/b6/69/ceb66928c3cbf1354cc6c24252467cab.gif" alt="Loading" />
        </div>
      }
    </div>
  )
}
