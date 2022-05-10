import React from 'react'

const sort = (props) => {
  const {items, yyy, onclick} = props

  const traa = yyy === items ? 'places__option--active' : ''

  return(
  <>
    <li className={`places__option ${traa}`}  tabIndex="0" onClick={onclick}>{items}</li>
   </>
  )
}

export default sort
