import React, {useState, useEffect} from 'react'
import Neiborhood from './Neiborhood'
import { useParams } from 'react-router-dom'
import {offer} from '../mocks/offer'
const comp = (props) => {
  const {enterFromProperty, leaveFromProperty} = props
  const [efect, setEfect] = useState(offer)
  const params = useParams()
  const id = Number(params.id);

  useEffect(()=> {
    setEfect(efect.filter((item) => item.id !== id))
  }, [])

  return(
    efect.slice(0, 3).map(it =>
      <Neiborhood
        key={it.id}
        items={it}
        enter={enterFromProperty}
        leave={leaveFromProperty}
      />)
  )
}

export default comp
