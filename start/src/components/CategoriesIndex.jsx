import { useState } from "react"
import { Link } from "react-router-dom"

export default function CategoriesIndex({content, setQuery}) {

    console.log("Sjekk: ",content)

    const [search, setSearch] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setQuery(search)
    }

    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    console.log("Search: ", search)

    return(
        <>
        <h1>Characters</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="search">Search for character:</label>
            <input type="text" id="search" placeholder="Rick" onChange={handleChange}></input>
            <input type="submit" value="Search"></input>
        </form>
        <ul className="category-list">
            {content?.map(item => <li key={item.id}><Link to={item.name}>{item.name}</Link></li>)}
        </ul>
        </>
        
        
    )
}