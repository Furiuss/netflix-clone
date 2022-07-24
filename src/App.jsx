import { useState, useEffect } from 'react'
import Tmdb from './Tmdb'
import {MovieRow} from './components/MovieRow'
import {FeatureMovie} from './components/FeatureMovie'

import {BsFillArrowRightSquareFill} from 'react-icons/bs'

import './App.css'
import { Header } from './components/Header'

function App() {

  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false)

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

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener)
    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  return (
    <div className="page">
      
      <Header black={blackHeader} />

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
      
      <footer>
        Feito com <span role="img" aria-label="heart">❤️</span> por <a href="https://github.com/Furiuss">André</a> <br />
        Direitos de imagem para a <a href="https://www.netflix.com/br/">Netflix</a> <br/>
        Dados pegos do site Themoviedb.org
      </footer>
    </div>
  )
}

export default App
