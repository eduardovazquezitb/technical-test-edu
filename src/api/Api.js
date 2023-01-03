import axios from 'axios'
import { useState, useEffect } from 'react'

export const useEmployees = () => {
  const [responseArray, setResponseArray] = useState([])

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=5').then((response) => {
      setResponseArray(response.data.results)
    })
  }, [])

  return [responseArray]
}
