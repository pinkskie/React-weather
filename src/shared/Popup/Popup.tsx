import React from 'react'
import { GlobalSvgSelector } from '../../assets/icons/Global/GlobalSvgSelector'
import { Item } from '../../pages/Home/components/ThisDayInfo/ThisDayInfo'
import { ThisDayItem } from '../../pages/Home/components/ThisDayInfo/ThisDayItem'
import styles from './Popup.module.scss'

interface Props {
  
}

export const Popup = (props: Props) => {
  const items = [
    { icon_id: 'temp', name: 'Температура', value: '20° - ощущается как 17°' },
    { icon_id: 'pressure', name: 'Давление', value: '765 мм ртутного столба - нормальное' },
    { icon_id: 'precipitation', name: 'Осадки', value: 'Без осадков' },
    { icon_id: 'wind', name: 'Ветер', value: '3 м/с юго-запад - легкий ветер' },
  ];
  return (
    <>
      <div className={styles.blur}>
        <div className={styles.popup}>
          <div className={styles.day}>
            <div className={styles.day__temp}>12°</div>
            <div className={styles.day__name}>Среда</div>
            <div className={styles.img}>
              <GlobalSvgSelector id="small_rain_sun"/>
            </div>
            <div className={styles.day__time}>Время: <span>21:54</span></div>
            <div className={styles.day__city}>Город: <span>Алматы</span></div>
          </div>
          <div className={styles.this__day_info_items}>
            {items.map((item: Item) => (
              <ThisDayItem key={item.icon_id} item={item}/>
            ))}
          </div>
          <div className={styles.close}>
            <GlobalSvgSelector id="close"/>
          </div>
        </div>
      </div>
    </>
  )
}
