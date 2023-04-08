import React from 'react'
import Card from '../Card'
import { useSelector } from 'react-redux'
import SortBlock from '../SortBlock'

export default function ListContainer() {
  const list = useSelector(state => state)
  
  return (
    <div>
        <SortBlock></SortBlock>
        <div>
          {
            list
            .filter(item => item.show === undefined || item.show === true)
            .map(item => item.sorted === undefined || item.sorted === true ? <Card key={item.id} {...item} /> : <p key={item.id}></p>)
          }
        </div>
    </div>
  )
}
