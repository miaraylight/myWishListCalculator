import React, { useEffect } from 'react'
import Card from '../Card'
import { useSelector } from 'react-redux'
import SortBlock from '../SortBlock'
import { resetSearchAction } from '../../store/reducers/listReducer'

export default function ListContainer() {
    const list = useSelector(state => state)
    console.log(list);
    useEffect(()=>{
      resetSearchAction()
    }, [list])
  return (
    <div>
        <SortBlock></SortBlock>
        {
          list
          .filter(item => item.show === undefined || item.show === true)
          .map(item => <Card key={item.id} {...item}/>)
        }
    </div>
  )
}
