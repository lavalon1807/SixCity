import React from 'react'
import DataProp from './DataProp'
import offer from '../mocks/offer'
import {useParams} from 'react-router-dom'

const LoadProp = (props) => {
  const {id} = useParams()

  return(
    offer.map((item, index) =>
      <DataProp
      key = {item.id}
      items={item} />
    )
  )
}

export default LoadProp
