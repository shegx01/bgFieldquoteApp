import React from 'react';
import styles from './credits.module.css'

export default function Credits(){
  return(

    <div className={styles.container}>
      <div>
        <p className={styles.credits}>credits</p>
        <div  className={styles.credits__container}>
          <p>
              <span className={styles.credits__author}>
                Luke Peavey
                <a
                  href="https://github.com/lukePeavey/quotable"
                  className={styles.credits__link}>quote api</a>
                project
              </span>
          </p>
          <p>
              <span className={styles.credits__author}>
                Luke Haas
                <a
                  href="https://projects.lukehaas.me/css-loaders/"
                  className={styles.credits__link}
                >css loader</a>
                project
              </span>
          </p>
          <p>
              <span className={styles.credits__author}>Iconify Design
                <a href="https://iconify.design/"
                   className={styles.credits__link}
                >icons project</a>
                for amazing icons
              </span>
          </p>
        </div>
      </div>
    </div>
  )
}
