import React from 'react'
import styles from './ChatInput.module.scss'

const ChatInput = () => {
   return (
      <div className={styles['chat-input']}>
         <span className={styles['chat-input__placeholder']}>Type message...</span>
         <div className={styles['chat-input__submit']}>
            <i className='gg-chevron-right'></i>
         </div>
      </div>
   )
}

export default ChatInput
