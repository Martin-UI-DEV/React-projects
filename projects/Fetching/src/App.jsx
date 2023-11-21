import { useEffect, useState } from "react"

const catEndPointFact = 'https://catfact.ninja/fact'


export function App() {
    const [fact, setFact] = useState()

    useEffect(() => {
        fetch(catEndPointFact)
        .then(res => res.json())
        .then(data => setFact(data.fact))
    }, [])
   
    return (
        <main>
        <h1>Example</h1>
        {fact && <p>{fact}</p>}
        </main>

    )
}