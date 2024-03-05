import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Episode from "./Episode"

export default function Category({currentID}) {

    const {slug} = useParams()
    const [post, setPost] = useState()

    const getCharacter = async() => {
        fetch(`https://rickandmortyapi.com/api/character/${currentID}`)
        .then(response => response.json())
        .then(data => setPost(data))
        .catch(error => console.error(error))
    }

    useEffect(()=>{
        getCharacter()
    }, [])

    console.log("sjekk", currentID)
    console.log(post)

    return (
    <section>
        <h1>{post?.name}</h1>
        <img src={post?.image} alt={post?.name} />
        <ul>
            {post?.episode?.map((item, i) => <li key={i}><Episode name={item}/></li>)}
        </ul>
        {/*post?.map(item => <PostCard key={item.id} title={item.title} category={item.category} ingress={item.ingress} id={item.id}/>)*/}
    </section>
    
    )


}