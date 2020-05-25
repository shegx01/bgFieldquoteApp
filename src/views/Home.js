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
  const { quoteData, responseStatus, loading, setLoading} = useFetch(url, requestNewQuote);


  //watch if the user is online
  useEffect(() => {
    if(isOnline === false) {
      setIsOnline(navigator.onLine)
    }
  }, [isOnline]);


  //no network at all
  if(isOnline === false) {
    return <NotFound message={"a network error occured"}/>
  }
  if (loading) {
    return <Loadiing/>
  }

  //we might want to compose different errors
  //based on respnse code but its too overkill
  if (responseStatus) {
    return <NotFound message={'error fetching data'}/>
  }


  //function or method/event handler to
  //trigger update of new quote
  function toggleQuoteRequest(_evt) {
    setLoading(true);
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

    </div>
  )
}

// Math.floor(Math.random() * Math.floor(max)
