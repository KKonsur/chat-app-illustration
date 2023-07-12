import React from 'react'
import styles from './ChatMessage.module.scss'

const ChatMessage = ({ type, message, images }) => {
   const classes = type === 'sent' ? `${styles['chat-message--sent']}` : `${styles['chat-message--received']}`
   return (
      <div className={images ? `${styles['chat-message']} ${styles['chat-message--images']} ${classes}` : `${styles['chat-message']} ${classes}`}>
         {message && <p>{message}</p>}
         {images && images.map((image) => <img key={image} src={image} alt='' />)}
      </div>
   )
}

export default ChatMessage
