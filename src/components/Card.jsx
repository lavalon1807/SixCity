import React from "react"
import { Link } from 'react-router-dom'
import { WIDTH } from './const'

const Card = (props) => {
  const {items, onMouseEnter, onMouseLeave} = props
  const {
    is_premium,
    is_favorite,
    rating,
    preview_image,
    price,
    id,
    title,
    type,
  } = items

  const favorite = is_favorite ? 'place-card__bookmark-button--active' : ''

  const handleMouseEnter = () => {
    onMouseEnter(items)
  }

  const handleMouseLeave = () => {
    onMouseLeave()
  }

  return (
    <article className="cities__place-card place-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="cities__image-wrapper place-card__image-wrapper">

      { is_premium && (
        <div className="place-card__mark">
            <span>Premium</span>
        </div>
      )}

        <a href="#">
          <img className="place-card__image" src={preview_image} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${favorite}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: WIDTH * rating + '%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/property/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  )
}

export default Card
