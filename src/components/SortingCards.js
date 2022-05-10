import React, {useState} from 'react'
import Sort from './sort'

const ttt = [
'Popular',
'Price: low to high',
'Price: high to low',
'Top rated first',
]

const SortingCards = (props) => {
  const {yyy, onclick} = props

  return(
    ttt.map(it=>
      <Sort key={it} items={it} yyy={yyy} onclick={onclick}/>
    )

  )
}

export default SortingCards
