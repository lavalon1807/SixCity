import React from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import {WIDTH} from '../../const'

const Neiborhood = (props) => {
  const {items} = props
  const {
    is_premium,
    is_favorite,
    rating,
    preview_image,
    price,
    title,
    type,
  } = items

  const bookMark = is_premium ? 'place-card__bookmark-button--active' : ''
  const widthRating = rating * WIDTH

  return(
    <article className="near-places__card place-card">
      <div className="near-places__image-wrapper place-card__image-wrapper">
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
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  )
}

Neiborhood.propTypes = {
  items: PropTypes.shape({
    title: PropTypes.string.isRequired,
    is_premium: PropTypes.bool.isRequired,
    is_favorite: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    preview_image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
  })
}

export default Neiborhood
