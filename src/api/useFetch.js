import { useState, useEffect } from 'react'


export default function UseFetch(apiUrl) {
  const [data, setData] = useState([])
  const [responseStatus, setresponseStatus] = useState('')

  if (typeof (apiUrl) != 'string') throw new Error(`expecting an apiUrl of type string found ${typeof (apiUrl)}`)
  
  useEffect(() => {
    fetch(apiUrl).then(response => response.json())
      .then(data => setData(_prevData => data))
      .catch(response => setresponseStatus(_prevStatus => response.status))
  }, [apiUrl])
  return {
    data, responseStatus
  }
}