import { useEffect, useState } from "react"
import '../src/style.css'
 
const catEndPointFact = 'https://catfact.ninja/fact';
const imagePrefix = 'https://cataas.com/';

export function App() {
    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState()

    const getRandomFact = () => {
        fetch(catEndPointFact)
            .then(res => res.json())
            .then(data => {
                const { fact } = data
                setFact(fact)
            })
    }

    useEffect(getRandomFact, [])

    useEffect(() => {
        if (!fact) return
        const threeFirstWords = fact.split(' ', 3).join(' ')
        fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)  
        .then(res => res.json())
        .then(response => {
            const { url } = response
            setImageUrl(url)
        })  
    }, [fact])

    const handleClick = () => {
        getRandomFact()
    }       
    
    return (
        <main>
        <h1>Cat fact</h1>
        <button onClick={handleClick}>Get new fact</button>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={`${imagePrefix}${threeFirstWords}`} alt={`Image extracted using the first three words for ${fact}`} />}
        </main>
    )
}