import React, {useEffect, useState} from 'react'
import useFetch from '../api/useFetch'
import styles from './home.module.css'
import  SingleQuote from '../components/SingleQuote'
import NotFound from './NotFound';
import Loadiing from '../components/Loading';

export default function Home() {
  const url = "https://api.quotable.io/random";
  const [requestNewQuote, setRequestNewQuote] = useState(false)
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const { quoteData, responseStatus } = useFetch(url, requestNewQuote);


  //watch if the user is online
  useEffect(() => {
    if(isOnline === false) {
      setIsOnline(navigator.onLine)
    }
  }, [isOnline]);

  if(isOnline === false) {
    return <NotFound message={"a network error occured"}/>
  }
  if (!quoteData  && !responseStatus) {
    return <Loadiing/>
  }
  if (responseStatus) {
    return <div>network error: {responseStatus}</div>
  }

  //function or method/event handler to
  //trigger update of new quote
  function toggleQuoteRequest(_evt) {
    setRequestNewQuote(oldValue => !oldValue)
  }

  return (
    <div className={styles.container}>
      <div className={styles.left__sider}>
        <SingleQuote quote={quoteData}/>
        <button
          className={styles.submit_button}
          onClick={toggleQuoteRequest}>
          new quote
        </button>
      </div>
      <div className={styles.right__sider}>
        right
      </div>

    </div>
  )
}

// Math.floor(Math.random() * Math.floor(max)
