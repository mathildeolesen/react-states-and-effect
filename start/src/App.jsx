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

  const getData = async() => {
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const data = await response.json()
    setContent(data.results)
  } 

  useEffect(()=>{
    getData()
  }, [])


  const [count, setCount] = useState(0)

  return (
    <Layout>
      <Routes>
        <Route index element={<Home content={content}/>}/>
        <Route path="categories/*" element={<Categories/>}>
          <Route index element={<CategoriesIndex/>}/>
          <Route path=":slug" element={<Category posts={posts} />}/>
          <Route path=":slug/:postid" element={<PostPage posts={posts} />}/>
        </Route>
      </Routes>
    </Layout>
    
  )
}

export default App
