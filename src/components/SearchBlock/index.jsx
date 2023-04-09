import React from 'react'
import s from './style.module.css'
import { useDispatch } from 'react-redux'
import { searchItemInTheListAction } from '../../store/reducers/listReducer'

export default function SearchBlock() {
  const dispatch = useDispatch()

  const onChange = (e) => {
    e.preventDefault()
    const data = e.target.value
    dispatch(searchItemInTheListAction(data))
  }

  return (
    <div className={s.container}>
        <input onChange={onChange} type="text" name="search" placeholder='Search'/>
    </div>
  )
}
