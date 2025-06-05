import React from 'react'
import { NavLink } from 'react-router'

function Navbar() {
  return (
    <nav className='bg-blue-300 h-15 flex gap-10 items-center pl-5'>
      <NavLink className="btn" to={"/"}>Home</NavLink>
      <NavLink className="btn" to={"/login"}>Login</NavLink>
      <NavLink className="btn" to={"/todolist"}>TodoList</NavLink>
    </nav>
  )
}

export default Navbar