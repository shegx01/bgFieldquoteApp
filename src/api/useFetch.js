import { useState, useEffect } from 'react'


export default function UseFetch(apiUrl, requestNewQuote) {
  const [data, setData] = useState('');
  const [responseStatus, setResponseStatus] = useState('');
  const [loading, setLoading] = useState(true);


  if (typeof (apiUrl) != 'string') throw new Error(`expecting an apiUrl of type string found ${typeof (apiUrl)}`);
  //asynchronously fetch data from api with fetch
  const fetchQuote = async (url) => {
   const  response = await fetch(url);
    if (!response.ok) {
      const  status = response.statusText;
      setLoading(false);
      // I hate throwing errors around but will
      //manage the return text
      setResponseStatus(_oldRes => status)
    }
    else {
      const json = await  response.json();
      setData(_oldData => json);
      setLoading(false)

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
    quoteData: data, responseStatus,
    loading, setLoading
  }
}
