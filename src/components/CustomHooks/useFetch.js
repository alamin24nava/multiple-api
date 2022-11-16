import React, {useEffect, useState} from 'react'

export default function useFetch(url) {

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const dataFetch = async (url) => {
      setIsLoading(true)
      try{    
          const res = await fetch(url)
          const data = await res.json()
          setData(data)
          setIsLoading(false)
          setError(null)
      }catch(error){
          setIsLoading(false)
          setError(error)

      }
  }

  useEffect(() => {
      setTimeout(() => {
          dataFetch(url)
      }, 2000);
  }, [url])

  return {data, isLoading, error}
}
