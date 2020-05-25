import React from 'react'
import {Link} from 'react-router-dom'
import styles from './header.module.css'
import {Icon} from '@iconify/react';
import brainIcon from '@iconify/icons-whh/brain';

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link to="/">
          <Icon icon={brainIcon} color='#be7524'/>
        </Link>
      </div>

      <ul>
        <li>
          <Link to="/all-quotes">all quotes</Link>
        </li>
      </ul>
    </div>
  )
}
