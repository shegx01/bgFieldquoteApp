import React, {useState} from 'react'
import useFetch from '../api/useFetch'
import styles from './home.module.css'
import SingleQuote from '../components/SingleQuote'
import NotFound from './NotFound';
import Loading from '../components/Loading';
import useNetwork from '../hooks/useNetwork';

export default function Home() {
  const url = "https://api.quotable.io/random";
  const [requestNewQuote, setRequestNewQuote] = useState(false);
  //custom hooks
  const {quoteData, responseStatus, loading, setLoading} = useFetch(url, requestNewQuote);
  const {isOnline} = useNetwork();
  //no network at all
  if (isOnline === false) {
    return <NotFound message={"a network error occurred"}/>
  }
  if (loading) {
    return <Loading/>
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
    </div>
  )
}
// Math.floor(Math.random() * Math.floor(max)
