import React, {useState} from 'react'
import ChooseCity from './ChooseCity'
import {offer, city} from '../mocks/offer' //city - массивы с именем города

const buler = [true, false, false, false, false, false]
const buler2 = [false, true, false, false, false, false]
const buler3 = [false, false, true, false, false, false]
const buler4 = [false, false, false, true, false, false]
const buler5 = [false, false, false, false, true, false]
const buler6 = [false, false, false, false, false, true]

const LoadCity = (props) => {
  const [creat, setCreat] = useState(buler)
  // const [ref, setRef] = useState('')
  const {items, onClick} = props
  const ggg = (e) => {
    switch(e.target.innerText) {
      case 'Cologne':
        return setCreat(buler2);
        break;
      case 'Brussels':
        return setCreat(buler3);
        break;
      case 'Amsterdam':
        return setCreat(buler4);
        break;
      case 'Hamburg':
        return setCreat(buler5);
        break;
      case 'Dusseldorf':
        return setCreat(buler6);
        break;
      case 'Paris':
        return setCreat(buler);
        break;
      default: return setCreat(buler)
    }
  }

  return(
    items.map((item, index) => <ChooseCity
      key={item}
      items={item}
      chooseClass={creat[index]}
      onClick={ggg}
      />
    )
  )
}

export default LoadCity
