import React from 'react'
import styles from './App.module.scss'
import Phone from './components/Phone/Phone'

const App = () => {
   return (
      <main className={styles.container}>
         <Phone />
         <div className={styles['text-container']}>
            <h1 className={styles.heading}>Simple booking</h1>
            <p className={styles.paragraph}>
               Stay in touch with our dog walkers through the chat interface. This makes it easy to discuss arrangements and make bookings.
               Once the walk has been completed you can rate your walker and book again all through the chat.
            </p>
         </div>
      </main>
   )
}

export default App
