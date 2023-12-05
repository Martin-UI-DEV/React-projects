import './App.css'
import { useEffect, useState, useRef } from 'react'
import { useMovies } from './hooks/useMovies.js'
import { Movies } from './components/Movies.jsx'

function useSearch() {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)
  
  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }
    if (search === '') {
      setError('Ingrese un nombre válido')
      return
    }

    if (search.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }

    setError(null)
  }, [search])

  return { search, updateSearch, error }
}

function App() {
  const [sort, setSort] = useState(false)
  const {search, updateSearch, error} = useSearch()
  const {movies, loading, getMovies} = useMovies({ search, sort })

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({search})
  }

  const handleChange = (event) => {
    updateSearch(event.target.value)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <div className='page'>

      <header>
        <h1>Buscador de películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input className={error ? 'danger' : ''} onChange={handleChange} value={search} name="query" placeholder='Avengers, Star Wars, The Matrix...' />
          <input type='checkbox' onChange={handleSort} checked={sort} />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        {
          loading ? <p>Cargando...</p> : <Movies movies={movies} />
        }
   
      </main>
    </div>
  )
}

export default App