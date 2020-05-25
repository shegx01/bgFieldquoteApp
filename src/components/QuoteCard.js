import React from 'react';
import styles from './quote-card.module.css'

export default function QuoteCard(props) {
  const {quoteData} = props;
  return (
    <div className={styles.container}>
      <p className={styles.quote__content}>{quoteData.content}</p>
      <h4 className={styles.quote__author}><span
        className={styles.quote__author__mdash}>&mdash;</span>{quoteData.author}</h4>
      <div className={styles.quotetags__container}>
        {
          quoteData.tags.map(tag => (
            <h6 key={tag} className={styles.quotetags__item}>{tag}</h6>
          ))
        }
      </div>
    </div>
  )
}
