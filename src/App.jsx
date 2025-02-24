import React from 'react'
import MainLayout from './Layouts/MainLayout'
import MainSite from './Pages/MainSite'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'


const router = createBrowserRouter(createRoutesFromElements(
  <Route path= "" element= {< MainLayout />}>
          <Route path= "" element= {<MainSite />}/>
          <Route path= "home" element= {<MainSite />}/>
          <Route path= "charan kumar" element= {<MainSite />}/>
  </Route>
));

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
