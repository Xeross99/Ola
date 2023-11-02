import React from 'react'
import styles from './navbar.module.css'

const navbar = () => {
  return (
    <div className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}>O mnie</li>
        <li className={styles.li}>PRO300</li>
        <li className={styles.li}>Aloes</li>
        <li className={styles.li}>sklep</li>
      </ul>
    </div>
  )
}

export default navbar