import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Ajout from './Home/Ajout'
import List from './Home/List'
import Menu from './Home/Menu'
import { Navbar } from './Home/Navbar'

export const PageComponent = () => {
  return (
    <div>
        <div className='row'>
           <div className='col-12'>
               <Navbar />
           </div>
        </div>
       
       <div className='row'>
        <div className='col-4'>
            <Menu />
        </div>
        <div className='col-8 col-md-8'>
            <Routes>
                <Route path='/ajout' element={<Ajout/>}></Route>
                <Route path='/list' element={<List/>}></Route>
            </Routes>
       </div>
       </div>
    </div>
  )
}
