import React, {useState} from 'react'
import Neiborhood from './Neiborhood'
import { useParams } from 'react-router-dom'
import offer from '../mocks/offer'
const comp = (props) => {
  const params = useParams()
  const id = Number(params.id);
  const threeElement = offer.filter((item) => item.id !== id && item.id !== id + 1)

  return(
      threeElement.map(it => <Neiborhood key={it.id} items={it} />)
  )
}

export default comp
