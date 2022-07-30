import React, {useState, useEffect} from 'react'
import Neiborhood from './Neiborhood'
import { useParams } from 'react-router-dom'
import {offer} from '../../../mocks/offer'

const NeiborhoodLoad = (props) => {
  const {massChooseCards, sentence} = props
  const [cards, setCards] = useState(massChooseCards)
  const params = useParams()
  const id = Number(params.id);

  useEffect(()=> {
    setCards(massChooseCards.filter((item) => item.id !== id))
  }, [])

  return(
    sentence.map(it =>
      <Neiborhood
        key={it.id}
        items={it}
      />)
  )
}

export default NeiborhoodLoad
