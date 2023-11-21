import { useEffect, useState } from "react"
import '../src/style.css'
 
const catEndPointFact = 'https://catfact.ninja/fact';
const imagePrefix = 'https://cataas.com/cat';

export function App() {
    const [fact, setFact] = useState()
    const [imageUrl, setImageUrl] = useState()


    useEffect(() => {
        fetch(catEndPointFact)
        .then(res => res.json())   
        .then(data => {
            const { fact } = data;
            setFact(fact)      
    })         
    }, [])
    
    useEffect(() => {
        if (!fact) return
        const firstWords = fact.split(' ', 3).join(' ')
        fetch(`https://cataas.com/cat/says/${firstWords}?size=50&color=red&json=true`)
        .then(res => res.json())
        .then(response => {
            const { url } = response
            setImageUrl(url)
        })
    }, [fact])

    return (
        <main>
        <h1>Example</h1>
        {fact && <p>{fact}</p>}
        <img src={`${imagePrefix}`} alt={`Image extracted using the first three words for ${fact}`} />
        </main>

    )
}