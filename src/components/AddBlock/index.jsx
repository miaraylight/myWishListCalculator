import React from 'react'
import s from './style.module.css'

export default function AddItem() {
  return (
    <div>
        <form>
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
