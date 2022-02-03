import React from 'react'
import styles from '../../styles/Home.module.css'

export type Props = { title: string; description: string }

const Box: React.FC<Props> = ({ title, description }) => {
  return (
    <div>
      <a href="https://nextjs.org/learn" className={styles.card}>
        <h2>{title}&rarr;</h2>
        <p>{description}</p>
      </a>
    </div>
  )
}

export default Box
