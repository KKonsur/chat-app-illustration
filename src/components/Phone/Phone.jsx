import React from 'react'
import styles from './Phone.module.scss'
import ChatMessage from './ChatMessage'
import PriceMessage from './PriceMessage'
import ChatInput from './ChatInput'
import personAvatar from '../../images/avatar.jpg'
import img1 from '../../images/dog-image-1.jpg'
import img2 from '../../images/dog-image-2.jpg'
import img3 from '../../images/dog-image-3.jpg'

const Phone = () => {
   return (
      <div className={styles.phone}>
         <div className={styles['phone__screen']}>
            <div className={styles['chat-header']}>
               <div className={styles['chat-header__content']}>
                  <div className={styles['chat-header__person']}>
                     <i className='gg-chevron-right'></i>
                     <img className={styles['chat-header__img']} src={personAvatar} alt='avatar' />
                     <div className={styles['chat-header__person-info']}>
                        <span className={styles['chat-header__person-name']}>Samuel Green</span>
                        <span className={styles['chat-header__person-state']}>Available to walk</span>
                     </div>
                  </div>
                  <i className='gg-more-vertical-alt'></i>
               </div>
            </div>
            <div className={styles['chat-messages']}>
               <ChatMessage type='received' message='That sounds great. I’d be happy with that.' />
               <ChatMessage type='received' message='Could you send over some pictures of your dog, please?' />
               <ChatMessage type='sent' message='' images={[img1, img2, img3]} />
               <ChatMessage type='sent' message='Here are a few pictures. She’s a happy girl!' />
               <ChatMessage type='sent' message='Can you make it?' />
               <ChatMessage type='received' message='She looks so happy! The time we discussed works. How long shall I take her out for?' />
               <PriceMessage time='30 minutes' price='29' />
               <PriceMessage time='1 hour' price='49' />
               <ChatInput />
            </div>
         </div>
      </div>
   )
}

export default Phone
