import React, { useState } from 'react'
import DataProp from './DataProp'
import offer from '../mocks/offer'
import {useParams} from 'react-router-dom'

const LoadProp = (props) => {
  const params = useParams()
  const id = Number(params.id);
  const item = offer.find((it) => it.id === id)

  return(
    <DataProp key={item.id} items={item}/>
  )
}

export default LoadProp
