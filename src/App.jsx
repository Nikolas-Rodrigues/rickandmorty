import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './index.css'



const urlTodes = "https://rickandmortyapi.com/api/character"
function App() {

  const [persona, setPersona] = useState([])
  const [status, setStatus] = useState("Alive")
  const [nome, setNome] = useState()



  const buscaTodos = async () => {
    const resultado = await axios.get(urlTodes)
    setPersona(resultado.data.results)
  }

  const busca = async () => {
    const resultado = await axios.get(`https://rickandmortyapi.com/api/character/?name=${nome}&status=${status}`)
    setPersona(resultado.data.results)
  }

  useEffect(() => {
    buscaTodos()
  }, [])

  return (
    <>
      <h1>Lista de Personagem</h1>
      <input type='text' id='busca' onChange={(evento) => setNome(evento.target.value)} />
      <select name="status"
        onChange={(evento) => setStatus(evento.target.value)}>
        <option value="Alive" selected>Vivo</option>
        <option value="Dead" >Morto</option>
        <option value="Unknown">???</option>
      </select>
      <button onClick={busca}>Search</button>


      {persona && (
        <>
          {persona.map((p, indice) => (

            <div className='lista' key={indice}>
              <Link to={`/gluglu/${p.id}`} className='lista'>

                <img style={{ borderRadius: "100%" }} src={p.image} />
                <h1>{p.name}</h1>
                
              </Link>
            </div>

          ))}
        </>


      )}
      {!persona && (
        <p>Carregando...</p>
      )}


    </>
  )
}

export default App
