import { useState, useEffect } from 'react'


export default function UseFetch(apiUrl, requestNewQuote) {
  const [data, setData] = useState('');
  const [responseStatus, setResponseStatus] = useState('');

  if (typeof (apiUrl) != 'string') throw new Error(`expecting an apiUrl of type string found ${typeof (apiUrl)}`);
  //asynchronously fetch data from api with fetch
  const fetchQuote = async (url) => {
   const  response = await fetch(url);
    if (!response.ok) {
      const  error = response.text().then(text => {
        throw new Error(text)
      });
      setResponseStatus(_oldRes => error)
    }
    else {
      const json = await  response.json();
      setData(_oldData => json)
    }
  };

  //let effect hook take care of update
  useEffect(() => {
    // if(!data) {
    // }
     fetchQuote(apiUrl)
  }, [apiUrl, requestNewQuote]);

  //finally getting ur data from api call
  //to use in the component
  return {
    quoteData: data, responseStatus
  }
}
