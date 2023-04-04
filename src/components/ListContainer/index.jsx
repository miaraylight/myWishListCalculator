import React from 'react'
import Card from '../Card'
import { useSelector } from 'react-redux'
import SortBlock from '../SortBlock'

export default function ListContainer() {
    const list = useSelector(state => state)
  return (
    <div>
        <SortBlock></SortBlock>
        {
            list.map(item => <Card key={item.id} {...item}/>)
        }
    </div>
  )
}
