import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import "../Header/Header.scss"
const Header = () => {
  return (
    <div>
      <div className="navbar">
<div className="navbar__left">
  <div className="navbar__left__logo">
    <h1>Code Academy</h1>
  </div>
  <ul>
        <li><Link id='link' to="">Home</Link></li>
        <li><Link id='link' to="add">Add</Link></li>
      </ul>
</div>


<div className="navbar__right">
 <div className="navbar__right__icon1">
<Link id='links' to="basket"><ShoppingCartIcon/></Link>
 </div>
 <div className="navbar__right__icon2">
  <Link id='links' to="wishlist"><FavoriteBorderIcon/></Link>
 </div>
</div>
      </div>
      
    </div>
  )
}

export default Header
