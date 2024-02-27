import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return <>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
      <a className="navbar-brand" href="#">Navbar</a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">contacts</NavLink>
        </li>
      </ul>
  </div>
</nav>
  </>
}

export default Header
