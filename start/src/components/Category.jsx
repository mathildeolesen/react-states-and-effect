import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import PostCard from "./PostCard"

export default function Category({posts}) {

    const {slug} = useParams()
    const [post, setPost] = useState()

    useEffect(()=>{
        setPost(posts.filter(post => post.category === slug))
    }, [])

    console.log("Sjekk", post)

    return (
    <section>
        <h1>{slug}</h1>
        {post?.map(item => <PostCard key={item.id} title={item.title} category={item.category} ingress={item.ingress} id={item.id}/>)}
    </section>
    
    )


}