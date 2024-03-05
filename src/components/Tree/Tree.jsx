import React from 'react'
import c from './Tree.module.scss'
import arrow from '../../img/Vector (4).svg'
import { NavLink } from 'react-router-dom'
export const Tree = (props) => {
  return (
    <div className={c.tree}>
            <NavLink to="/main"className={c.mainButton}>Головна</NavLink>
            <img className={c.arrow__tree} src={arrow}></img>
            <span>{props.title}</span>
          </div>
  )
}
