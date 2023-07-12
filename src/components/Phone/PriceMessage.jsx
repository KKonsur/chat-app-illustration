import React from 'react'
import styles from './PriceMessage.module.scss'

const PriceMessage = ({ time, price }) => {
   return (
      <div className={styles['price-message']}>
         <div className={styles.circle}></div>
         <span className={styles['price-message__time']}>{time} walk</span>
         <span className={styles['price-message__price']}>{price}$</span>
      </div>
   )
}

export default PriceMessage
