import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {WIDTH, AuthorizationStatus} from '../const';
import {sendFavorites} from '../store/apiCreate'

const DataProp = (props) => {
  const {items, data, auth, chooseFavorites} = props;
  const {
    isPremium,
    title,
    isFavorite,
    rating, type,
    bedrooms,
    maxAdults,
    price,
    id,
  } = items;

  const bookMark = data[id - 1].isFavorite ? `property__bookmark-button--active` : ``;
  const widthRating = rating * WIDTH;
  const statusFavor = data[id - 1].isFavorite ? 0 : 1;
  const noAuth = auth !== AuthorizationStatus.AUTH ? '/login' : `/property/${id}`;

  const addFavoriteFromPreview = () => {
    chooseFavorites({
      id: id,
      status: statusFavor,
      datas: data,
    })
  }

  return (
    <>

      {isPremium && (
        <div className="property__mark">
          <span>Premium</span>
        </div>
      )}

      <div className="property__name-wrapper">
        <h1 className="property__name">
          {title}
        </h1>
        <Link to={noAuth}>
          <button
            className={`property__bookmark-button button ${bookMark}`}
            type="button"
            onClick={addFavoriteFromPreview}
          >
            <svg className="property__bookmark-icon" width="31" height="33">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </Link>
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
          Max {maxAdults} adults
        </li>
      </ul>
      <div className="property__price">
        <b className="property__price-value">&euro;{price}</b>
        <span className="property__price-text">&nbsp;night</span>
      </div>

    </>
  );
};

DataProp.propTypes = {
  items: PropTypes.shape({
    isPremium: PropTypes.bool.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    bedrooms: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    maxAdults: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  })
};

const mapStateToProps = (state) => ({
  auth: state.authorizationStatus,
  data: state.data,
})

const mapDispatchToProps = (dispatch) => ({
  chooseFavorites(it) {
    dispatch(sendFavorites(it))
  },
})

export {DataProp}
export default connect(mapStateToProps, mapDispatchToProps)(DataProp);
