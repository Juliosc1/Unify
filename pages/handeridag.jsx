import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Eventbutton from '../components/Eventbutton'
import Event from '../components/Event' 
import BackToTop from '../components/BackToTopButton'
import React, { useState, useEffect } from 'react'
import { database } from '../firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'

// export async function getServerSideProps (context) {

//   const dbInstance = collection(database, 'events');
//   let eventsArray = []

//   const getEvents = () => {
//     const [eventsArray, setEventsArray] = useState([]);
   
//     getDocs(dbInstance)
//         .then((data) => {
//             setEventsArray(data.docs.map((item) => {
//                 return { ...item.data(), id: item.id }
//             }));
//         })

//         useEffect(() => {
//           getEvents();
//         }, []) 
        
        
//   }
  
//   return {
//     props :{
//       events :eventsArray
//     }
//   }
// }

export default function Handeridag() {
    const dbInstance = collection(database, 'events');
      const [eventsArray, setEventsArray] = useState([]);
  
       const getEvents = () => {
          getDocs(dbInstance)
              .then((data) => {
                  setEventsArray(data.docs.map((item) => {
                      return { ...item.data(), id: item.id }
                  }));
              })
      } 
      useEffect(() => {
          getEvents();
      }, [])
  
  
    return (
      <div className={styles.container}>
        <Head><title>Unify - Händer idag</title></Head>
        <main className={styles.main}>
        <Eventbutton/>  
        <h1 className={styles.rubrik}>Händer idag</h1>
  
        <BackToTop />
        <Event events={eventsArray}/>
        </main>
      </div>
    )
  }
  