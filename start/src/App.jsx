import { useEffect, useState } from 'react'

import './App.css'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Categories from './components/Categories'
import Layout from './components/Layout'
import Category from './components/Category'
import CategoriesIndex from './components/CategoriesIndex'
import { posts } from './assets/posts'
import PostPage from './components/PostPage'

function App() {

  const [content, setContent] = useState([])
  const [query, setQuery] = useState("beth")

  const getData = async() => {
    try{
      const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${query}`)
      const data = await response.json()
      setContent(data.results)

    } catch {
      console.error("Det har skjedd en feil")
    }
    
  } 

  useEffect(()=>{
    getData()
  }, [query])

  console.log("Query: ", query)

  return (
    <Layout>
      <Routes>
        <Route index element={<Home content={content}/>}/>
        <Route path="characters/*" element={<Categories/>}>
          <Route index element={<CategoriesIndex content={content} setQuery={setQuery}/>}/>
          <Route path=":slug" element={<Category posts={posts} />}/>
          <Route path=":slug/:postid" element={<PostPage posts={posts} />}/>
        </Route>
      </Routes>
    </Layout>
    
  )
}

export default App
