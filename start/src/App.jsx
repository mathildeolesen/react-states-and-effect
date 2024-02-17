import { useState } from 'react'

import './App.css'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Categories from './components/Categories'
import Layout from './components/Layout'
import Category from './components/Category'
import CategoriesIndex from './components/CategoriesIndex'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="categories/*" element={<Categories/>}>
          <Route index element={<CategoriesIndex/>}/>
          <Route path=":slug" element={<Category/>}/>
        </Route>
      </Routes>
    </Layout>
    
  )
}

export default App
