import React from 'react'
import styles from './single-quote.module.css'
export default function SingleQuote(props) {
  const {quote} = props;
  return (
    <div className={styles.wrapper}>
    <h2 className={styles.content}>
      {quote.content}
    </h2>
      <div className={styles.tag}>
        <p className={styles.tag__title}>
          {
            quote.tags.length > 1 ? 'tags' : 'tag'
          }
        </p>

        <ul>
         { quote.tags.map(tag => ( <li className={styles.tag__item} key={tag}>{tag}</li>) )}
        </ul>
      </div>
      <h6 className={styles.author}>
        <span className={styles.author__mdash}>&ndash;</span>
        {quote.author}
      </h6>
    </div>
  );
}


