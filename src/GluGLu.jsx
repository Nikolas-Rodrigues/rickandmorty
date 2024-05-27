import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function GluGLu() {
    const [aba, setAba] = useState(null)
    let { id } = useParams()

    useEffect(() => {
        buscarFilmePeloId()
    }, [])

    const buscarFilmePeloId = async () => {
        const resultado = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        setAba(resultado.data)
        console.log(resultado.data)
    }

    return (
        <>
            <Link to={`/`}>

                <h3>Voltar</h3>

            </Link>

            {aba && (
                <>

                    <h1>Dados do Personagem</h1>
                    <img src={aba.image}></img>
                    <h1>name: {aba.name}</h1>
                    <h1>status: {aba.status}</h1>
                    <h1>species: {aba.species}</h1>
                    <h1>gender: {aba.gender} </h1></>
            )}
            {!aba && (
                <p>Carregando...</p>
            )}
        </>
    )
}

export default GluGLu
