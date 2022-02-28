import React from 'react';
import { Routes,Route } from 'react-router-dom';
import { PageComponent } from './components/PageComponent';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Ajout from './components/Home/Ajout';
import List from './components/Home/List'
import Dasboard from './components/Home/Dasboard';

function App() {
  return (
    <div className="App">
       <Routes>
         <Route path='/' element={<PageComponent />}></Route>
         <Route path='/ajout' element={<Ajout />}></Route>
         <Route path='/list' element={<List />}></Route>
         <Route path='/dash' element={<Dasboard />}></Route>
       </Routes>
    </div>
  );
}

export default App;
