import React from "react"
import { Link } from 'react-router-dom'

const WIDTH = 20;


const Card = (props) => {
  const {items, onMouseEnter, onMouseLeave} = props
  const {mark, rating, hasBookmark} = items
  const bookMark = hasBookmark ? 'place-card__bookmark-button--active' : ''

  const handleMouseEnter = () => {
    onMouseEnter(items)
  }

  const handleMouseLeave = () => {
    onMouseLeave()
  }

  return (
      <article className="cities__place-card place-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="cities__image-wrapper place-card__image-wrapper">

        { mark && (
          <div className="place-card__mark">
              <span>Premium</span>
          </div>
        )}

          <a href="#">
            <img className="place-card__image" src={props.items.img} width="260" height="200" alt="Place image" />
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{props.items.price}</b>
              <span className="place-card__price-text">&#47;&nbsp;{props.items.attribute}</span>
            </div>
            <button className={`place-card__bookmark-button button ${bookMark}`} type="button">
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
            <Link to={`/property/${props.items.id}`}>{props.items.name}</Link>
          </h2>
          <p className="place-card__type">{props.items.type}</p>
        </div>
      </article>

  )
}

export default Card
