import React from 'react'
import styles from './all-quotes.module.css'
import QuoteCard from '../components/QuoteCard';
import useFetch from '../api/useFetch';
import Loading from '../components/Loading';
import NotFound from './NotFound';
import useNetwork from '../hooks/useNetwork';

export default function AllQuotes() {
  const url = 'https://api.quotable.io/quotes?limit=50';
  //custom hook s here
  const {quoteData, loading, responseStatus} = useFetch(url, null);
  const {isOnline} = useNetwork();
  //no network at for users to process request
  if (isOnline === false) return <NotFound message={"a network error occurred"}/>;
  if (loading) return <Loading/>;
  if (responseStatus) return <NotFound message={'error fetching data'}/>;
  if (quoteData) console.log(quoteData.results);
  //process our data then if above conditions not met
  return (<div className={styles.container}>
      {quoteData.results.map((quote, idx) => (
        <QuoteCard key={idx} quoteData={quote}/>
      ))}
    </div>
  )
}
