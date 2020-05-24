import React from 'react'
import { Link } from 'react-router-dom'
import styles from './header.module.css'

export default function Header() {
  return (
    <div className={styles.container}>
     <div className={styles.logo}>
       <Link to="/">Quote App</Link>
     </div>


      <ul>
        <li>
            <Link to="/all-quotes">all quotes</Link>
        </li>
      </ul>
    </div>
  )
}
