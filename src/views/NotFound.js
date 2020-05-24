import React from 'react'
import styles from './not-found.module.css'

//import directive for icons
import { Icon, InlineIcon } from '@iconify/react';
import errorStandardLine from '@iconify/icons-clarity/error-standard-line';

export default function NotFound(props) {
  let {message } = props
  return (
    <div className={styles.container}>
      <Icon icon={errorStandardLine} color="#BCCCDC" className={styles.icon}/>
      <h4 className={styles.message}>{message}</h4>
    </div>
  )
}

// yarn add -D @iconify/react @iconify/icons-clarity
