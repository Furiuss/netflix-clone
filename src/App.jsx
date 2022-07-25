import {Outlet} from 'reac-router-dom'
import { Header } from './components/Header'

import './App.css'

function App() {
  const [blackHeader, setBlackHeader] = useState(false)

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
    <div>
      <Header black={blackHeader} />
      <Outlet />

      <footer>
        Feito com <span role="img" aria-label="heart">❤️</span> por <a href="https://github.com/Furiuss">André</a> <br />
        Direitos de imagem para a <a href="https://www.netflix.com/br/">Netflix</a> <br/>
        Dados pegos do site Themoviedb.org
      </footer>
      
    </div>
  )
}

export default App
