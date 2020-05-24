import  React from 'react'
import useFetch from '../api/useFetch'
import styles from './home.module.css'

export default function Home() {

  // const url = "http://quotes.stormconsultancy.co.uk/quotes.json"
  // const { data, responseStatus } = useFetch(url)
  
  // if (data.length === 0 && !responseStatus) {
  //   return <div>loading</div>
  // }
  // if (responseStatus) {
  //   return <div>network error: {responseStatus}</div>
  // }

  return (
    <div className={styles.container}>
      {/* {data.map(quote => (
        <>
          {console.log(quote)}
        <h1>{quote.id}</h1>
          <p>{quote.author}</p>
          <p>{quote.quote}</p>
          </>
      ))
    } */}
    </div>
  )
}

// Math.floor(Math.random() * Math.floor(max)