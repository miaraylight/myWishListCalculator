import React from 'react'
import SearchBlock from '../SearchBlock'
import s from './style.module.css'

export default function Header() {
  return (
    <div className={s.container}>
        <div className={s.title}>
          <img src={process.env.PUBLIC_URL + "icons/logo1.png"} alt="logo" />
          <h2>My Wishlist</h2>
        </div>
        <SearchBlock></SearchBlock>
    </div>
  )
}
