import React from 'react'
import { useSelector } from 'react-redux'
import s from './style.module.css'

export default function SortBlock() {
    const categories = useSelector(state=> state.map(item => item.category))
  
  return (
    <div className={s.wrapper}>
        {
            categories.map(item => <p key={item.id}>{item}</p>)
        }
    </div>
  )
}
