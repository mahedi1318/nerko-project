import React from 'react'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Root from '../layout/root/Root'
import Home from '../pages/Home'
import About from '../pages/About'
import Minting from '../pages/Minting'
import Collection from '../pages/Collection'
import RoadMap from '../pages/RoadMap'
import Blog from '../pages/Blog'

const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Root/>}>
        <Route index element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/minting' element={<Minting/>}></Route>
        <Route path='/collection' element={<Collection/>}></Route>
        <Route path='/roadmap' element={<RoadMap/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
    </Route>
))

const Routers = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default Routers