import React from 'react'
import s from './style.module.css'
import { useDispatch } from 'react-redux'
import { addItemToListAction } from '../../store/reducers/listReducer'

export default function AddItem() {
  const dispatch = useDispatch()
  const onSubmit = (e) => {
    e.preventDefault()
    const {title, category, price, discount} = e.target;
    const result = {
      id: Date.now() + Math.random()*1000,
      title: title.value,
      category: category.value,
      price: price.value,
      discount: discount.value,
      count: 1
    }
    dispatch(addItemToListAction(result))
    title.value = ''
    category.value = ''
    price.value = ''
    discount.value = ''
  }
  return (
    <div>
        <form onSubmit={onSubmit}>
            <input type="text" name="title" placeholder='Title' />
            <select id="category" name="category">
                <option value="Food">Food</option>
                <option value="Books">Books</option>
                <option value="Gadjets">Gadjets</option>
                <option value="Clothes">Clothes</option>
                <option value="Other">Other</option>
            </select>
            <input type="number" name="price" placeholder='Price'/>
            <input type="number" name="discount" placeholder='Discount' />
            <button>Add</button>
        </form>
    </div>
  )
}
