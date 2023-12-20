/* eslint-disable react/prop-types */
import { useState, useId } from 'react'
import { useFilters } from '../hooks/useFilters.js'
import './Filters.css'

export function Filters () {
    const { setFilters }= useFilters()
    const [minPrice, setMinPrice] = useState(0)
    const minPriceFilterId = useId()
    const categoryFilterId = useId()
    
    const handleChangeMinPrice = (event) => {
        setMinPrice(event.target.value)
        setFilters(prevState => ({
            ...prevState, 
            minPrice: event.target.value
        }) )
    }

    const handleChangeCategory = (event) => [
        setFilters(prevState => ({
            ...prevState, 
            category: event.target.value
        }))
    ]
    return (
        <section className='filters'>
            <div>
                <label htmlFor={minPriceFilterId}>Precio a partir de</label>
                <input type='range' id={minPriceFilterId} min='0' max='2000' onChange={handleChangeMinPrice}></input>
                <span>${minPrice}</span>
            </div>
            <div>
                <label htmlFor={categoryFilterId}>Categoría</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value='all'>
                        All
                    </option>
                    <option value='laptops'>
                        Laptops
                    </option>
                    <option value='smartphones'>
                        Celulares
                    </option>
                </select>
            </div>
        </section>
    )
}