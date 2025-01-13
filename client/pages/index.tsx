import React, { useEffect, useState } from 'react'

function index() {

  const [message, setMessage] = useState("Loading")
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/message').then(
      response => response.json()
    ).then(
      data => {
        setMessage(data.message)
        setPeople(data.people)
      }
    )
  }, [])

  return (
      <div>{message}</div>
      )
      }

export default index