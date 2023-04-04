import React from 'react'
import { useSelector } from 'react-redux'
import s from './style.module.css'

export default function SortBlock() {
    const categories = useSelector(state=> state.map(item => item.category))
    console.log(categories);
  return (
    <div className={s.wrapper}>
        {
            categories.map(item => <p>{item}</p>)
        }
    </div>
  )
}
