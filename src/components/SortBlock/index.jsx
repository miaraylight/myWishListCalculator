import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import s from './style.module.css'
import { showAllItemAction, sortItemAction } from '../../store/reducers/listReducer';

export default function SortBlock() {
  const categories = [];
  const data = useSelector(state => state)
  const dispatch = useDispatch()
  
  data.map(({category}) => {
    if (!categories.includes(category)) {
      return categories.push(category)
    }
  })
  
  return (
    <div className={s.wrapper}>
      <button onClick={()=> dispatch(showAllItemAction())}>All</button>
      {
        categories.map(category => <button key={category} onClick={()=>dispatch(sortItemAction(category))}>{category}</button>)
      }
    </div>
  )
}
