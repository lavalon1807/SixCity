import React from 'react'
import {WIDTH} from '../const'

const DataProp = (props) => {
  const {items} = props
  const {
    is_premium,
    title,
    is_favorite,
    rating, type,
    bedrooms,
    max_adults,
    price
  } = items

  const bookMark = is_favorite ? 'property__bookmark-button--active' : ''
  const widthRating = rating * WIDTH

  return(
    <>

      {is_premium && (
        <div className="property__mark">
          <span>Premium</span>
        </div>
      )}

      <div className="property__name-wrapper">
        <h1 className="property__name">
          {title}
        </h1>
        <button className={`property__bookmark-button button ${bookMark}`}  type="button">
          <svg className="property__bookmark-icon" width="31" height="33">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="property__rating rating">
        <div className="property__stars rating__stars">
          <span style={{width: `${widthRating}%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
        <span className="property__rating-value rating__value">{rating}</span>
      </div>
      <ul className="property__features">
        <li className="property__feature property__feature--entire">
          {type}
        </li>
        <li className="property__feature property__feature--bedrooms">
          {bedrooms} Bedrooms
        </li>
        <li className="property__feature property__feature--adults">
          Max {max_adults} adults
        </li>
      </ul>
      <div className="property__price">
        <b className="property__price-value">&euro;{price}</b>
        <span className="property__price-text">&nbsp;night</span>
      </div>

    </>
  )
}

export default DataProp
