import React from 'react'
import { GlobalSvgSelector } from '../../../../assets/icons/Global/GlobalSvgSelector'
import styles from './ThisDay.module.scss'

interface Props {
    
}

export const ThisDay = (props: Props) => {
  return (
    <div className={styles.this__day}>
      <div className={styles.top__block}>
        <div className={styles.top__wrapper}>
          <div className={styles.this__temp}>20°</div>
          <div className={styles.this__day_name}>Сегодня</div>
        </div>
          <GlobalSvgSelector id="sunshine"/>
      </div>
      
      <div className={styles.bottom__block}>
        <div className={styles.this__time}>Время: <span>21:54</span></div>
        <div className={styles.this__city}>Город: <span>Алматы</span></div>
      </div>
    </div>
  )
}
