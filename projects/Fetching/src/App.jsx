import { useEffect, useState } from "react"
import '../src/style.css'
import { getRandomFact } from "./services/facts"
import { getRandomImageUrl } from "./services/facts"
import "bootstrap/dist/css/bootstrap.min.css"

export function App() {

    const [fact, setFact] = useState()
    const [image, setImage] = useState()
    
    useEffect(() => {
        handleClick()
    }, [])

    const handleClick = async () => {
       const newFact = await getRandomFact()
       setFact(newFact) 
       const newImage = await getRandomImageUrl()
       setImage(newImage)  
    }   

    return (
        <main>
        <h1>Cat fact</h1>
        <button className="btn btn-primary" onClick={handleClick}>Get new fact</button>
        {fact && <p>{fact}</p>}
        {image && <img src={image} alt={`Image extracted using the first three words for ${fact}`} loading="lazy" />}
        </main>
    )
}