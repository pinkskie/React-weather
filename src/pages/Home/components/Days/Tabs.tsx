import React from 'react'
import styles from './Days.module.scss'

interface Props {}

export interface Tab {
  value: string
}

export const Tabs = (props: Props) => {
  const tab = [
    {
      value: 'На неделю',
    },
    {
      value: 'На 10 дней',
    },
    {
      value: 'На месяц',
    },
  ];
  return (
    <div className={styles.tabs}>
      <div className={styles.tabs__wrapper}>
        {tab.map((tab: Tab) => (
          <div className={styles.tab} key={tab.value}>{tab.value}</div>
        ))}
      </div>
      <div className={styles.cancel}>Отменить</div>
    </div>
  )
}
