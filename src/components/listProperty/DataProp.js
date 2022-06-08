import React from 'react'

const DataProp = (props) => {
  const {items} = props
  const {mark} = items
  const bookMark = props.items.hasBookmark ? 'property__bookmark-button--active' : ''
  const widthRating = props.items.rating * 20

  return(
    <>

      {mark && (
        <div className="property__mark">
          <span>Premium</span>
        </div>
      )}

      <div className="property__name-wrapper">
        <h1 className="property__name">
          {props.items.name}
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
        <span className="property__rating-value rating__value">4.8</span>
      </div>
      <ul className="property__features">
        <li className="property__feature property__feature--entire">
          {props.items.type}
        </li>
        <li className="property__feature property__feature--bedrooms">
          {props.items.bedrooms} Bedrooms
        </li>
        <li className="property__feature property__feature--adults">
          Max {props.items.adults} adults
        </li>
      </ul>
      <div className="property__price">
        <b className="property__price-value">&euro;{props.items.price}</b>
        <span className="property__price-text">&nbsp;{props.items.attribute}</span>
      </div>
    </>
  )
}

export default DataProp
