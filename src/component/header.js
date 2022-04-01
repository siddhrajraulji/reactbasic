import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <>
        <ul>
            <li><NavLink to={"/"} style={({isActive})=> {return { backgroundColor : isActive ? "red" : "" }}}>home</NavLink></li>
            <li><NavLink to={"/example"}  style={({isActive})=> {return { backgroundColor : isActive ? "red" : "" }}}>Example</NavLink></li>
            <li><NavLink to={`/category/1`}  style={({isActive})=> {return { backgroundColor : isActive ? "red" : "" }}}>Category</NavLink></li>
        </ul>
    </>
  )
}
