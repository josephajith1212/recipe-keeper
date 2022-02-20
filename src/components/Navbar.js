import React from 'react';
import {Link} from 'react-router-dom';
//Styles
import './Navbar.css'
import Searchbar from './Searchbar';

export default function Navbar() {
  return (
      <div className='navbar'>
          <nav>
              <Link to='/' className='brand'>
                  <h1>Recipe Keeper</h1>
              </Link>
              {/* <Searchbar></Searchbar> */}
              <Link to='/create'>
                  Create Recipe
              </Link>
          </nav>
      </div>
  )
}
