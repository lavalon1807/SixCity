import React from 'react'
import Review from './Review'

const Reviews = (props) => {
  const {items} = props

  return(
    items.map(item => <Review key={item.id} items={item}/>)
  )
}

export default Reviews
