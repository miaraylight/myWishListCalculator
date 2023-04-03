import React from 'react'
import s from './style.module.css'

export default function SearchBlock() {
  return (
    <div>
        <form>
            <input type="text" name="search" placeholder='Search'/>
            <button>Search</button>
        </form>
    </div>
  )
}
