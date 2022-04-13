import React from 'react'
import { useParams } from 'react-router-dom'

const Neiborhood = (props) => {
  const bookMark = props.items.hasBookmark ? 'place-card__bookmark-button--active' : ''
  const widthRating = props.items.rating * 20
  return(
    <article className="near-places__card place-card">
      <div className="near-places__image-wrapper place-card__image-wrapper">
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
            <span style={{width: `${widthRating}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{props.items.name}</a>
        </h2>
        <p className="place-card__type">{props.items.type}</p>
      </div>
    </article>
  )
}

export default Neiborhood
