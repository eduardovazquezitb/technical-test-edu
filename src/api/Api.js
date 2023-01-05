import axios from 'axios'
import { useState, useEffect } from 'react'

export const useEmployees = () => {
  const [responseArray, setResponseArray] = useState([])

  const fetchData = async () => {
    const response = await axios.get('https://randomuser.me/api/?results=5')
    console.log(response)
    setResponseArray(response.data.results)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return [responseArray]
}
