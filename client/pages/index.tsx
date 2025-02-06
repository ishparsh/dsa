import React, { useEffect, useState } from 'react'
import {Navbar} from '../components/Navbar'

// function index() {

//   const [message, setMessage] = useState("Loading")
//   const [people, setPeople] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:8000/message').then(
//       response => response.json()
//     ).then(
//       data => {
//         setMessage(data.message)
//         setPeople(data.people)
//       }
//     )
//   }, [])

//   return (
//       <div>{message}</div>
//       )
//       }

// export default index

import Head from 'next/head';

export default function Home(){
  return (
    <div>
      <Head>
        <title>Next.js App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <h1 className="text-4xl font-extrabold text-gray-500">Welcome to my website</h1>
      </main>
    </div>
  );
}