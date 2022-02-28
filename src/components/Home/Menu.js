import React from 'react'
import { Link } from 'react-router-dom'
import "./Menu.css"

const Menu = () => {
  return (
    <div className='col-4 bg-dark my-5'>
      <div className='menu'>
          <Link to="/dash">
            <p className='bord'>Tableau de bord</p>
          </Link>
          <Link to="/ajout">
            <p className='ajout'>Ajout</p>
          </Link>
          <Link to="/list">
            <p className='list'>List</p>
          </Link>
      </div>
    </div>
  )
}

export default Menu