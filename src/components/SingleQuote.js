import React from 'react'
import styles from './single-quote.module.css'
export default function SingleQuote(props) {
  const {quote} = props;
  return (
    <div className={styles.wrapper}>
    <h2 className={styles.content}>
      {quote.content}
    </h2>
      <h6 className={styles.author}>
        <span className={styles.author__mdash}>&ndash;</span>
        {quote.author}
      </h6>
    </div>
  );
}

