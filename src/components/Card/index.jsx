import React from 'react'
import s from './style.module.css'
import { useDispatch } from 'react-redux'
import { decItemListAction, delItemfromListAction, incItemListAction } from '../../store/reducers/listReducer';

export default function Card({id, title, category, price, discount, count}) {
  const dispatch = useDispatch()

  return (
    <div className={s.container}>
      <div className={s.category}>
        <p>{category}</p>
        <button className={s.delBtn} onClick={()=> dispatch(delItemfromListAction(id))}>X</button>
      </div>

      <div className={s.title}>
        <h1>{title}</h1>
        <p>$ {price}</p>
        <p>% {discount}</p>
        <div className={s.counter}>
          <button onClick={()=> dispatch(incItemListAction(id))}>+</button>
          <p>{count}</p>
          <button onClick={()=> dispatch(decItemListAction(id))}>-</button>
        </div>
      </div>
    </div>
  );
}
