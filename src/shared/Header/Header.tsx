import React from 'react'
import Select from 'react-select'
import { GlobalSvgSelector } from '../../assets/icons/Global/GlobalSvgSelector'
import styles from './Header.module.scss'
interface Props {
    
}

export const Header = (props: Props) => {
  const options = [
    { value: 'city-1', label: 'Алматы' },
    { value: 'city-2', label: 'Нур-Султан' },
    { value: 'city-3', label: 'Актау' }
  ]
  
  const colourStyles = {
    control: (styles: any) => ({
      ...styles, 
      backgroundColor: 'rgba(71, 147, 255, 0.2)',
      borderRaduis: '10px',
      width: '194px',
      height: '37px',
      border: 'none',
      zIndex: '100'
    })
  }
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}><GlobalSvgSelector id="header-logo"/></div>
        <div className={styles.title}>React weather</div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.change_theme}><GlobalSvgSelector id="change-theme"/></div>
        <Select 
            defaultValue={options[0]} 
            styles={colourStyles}
            options={options} />
      </div>
    </header>
  )
}
