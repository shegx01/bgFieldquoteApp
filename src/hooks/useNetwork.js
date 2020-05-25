import {useEffect, useState} from 'react';


export default function useNetwork() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  //watch if the user is online
  useEffect(() => {
      setIsOnline(navigator.onLine)
  }, [isOnline]);
  return {isOnline, setIsOnline}
}
