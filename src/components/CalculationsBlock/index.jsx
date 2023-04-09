import React from 'react'
import { useSelector } from 'react-redux'
import s from './style.module.css'

export default function CalculationsBlock() {
    const listItems = useSelector(state => state.filter(item => item.sorted===undefined || item.sorted===true ))
    const totalPrice = listItems.reduce((acc, item) => acc + item.price * item.count, 0)
    const priceWithDiscount = listItems.reduce((acc, item) => acc + item.priceWithDiscount * item.count, 0)
    
  return (
    <div className={s.container}>
        <p>Price: </p>
        <p className={s.digits}>{totalPrice}</p>
        <p>Discount:</p>
        <p className={s.digits}>{(totalPrice - priceWithDiscount).toFixed(2)}</p>
        <p>Total:</p>
        <p className={s.digits}>{priceWithDiscount.toFixed(2)}</p>
    </div>
  )
}
