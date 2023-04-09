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
      priceWithDiscount: discount.value === undefined ? price.value * 1 : price.value - (price.value * discount.value/100),
      count: 1
    }

    dispatch(addItemToListAction(result))

    title.value = ''
    price.value = ''
    discount.value = ''
  }
  return (
    <div className={s.container}>
        <div className={s.title}>
          <p>Add New</p>
          <img src={process.env.PUBLIC_URL + "/icons/add-icon.png"} alt="" />
        </div>
        <form className={s.form} onSubmit={onSubmit}>
            <label for="category">Choose a category:</label>
            <select className={s.select} id="category" name="category" required>
                <option value="food">Food</option>
                <option value="home">Home</option>
                <option value="appliances">Appliances</option>
                <option value="clothes">Clothes</option>
                <option value="other">Other</option>
            </select>
            <input type="text" name="title" placeholder='Title' required/>
            <input type="number" min={0} name="price" placeholder='Price'/>
            <input type="number" min={0} max={100} name="discount" placeholder='Discount' />
            <button>Add</button>
        </form>
    </div>
  )
}
