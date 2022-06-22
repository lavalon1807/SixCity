import React from 'react';
import PropTypes from 'prop-types';

const Review = (props) => {
  const {items} = props;
  const widthRating = items.rate * 20;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={items.img} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {items.use}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${widthRating}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {items.comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{items.data}</time>
      </div>
    </li>
  );
};

Review.propTypes = {
  items: PropTypes.shape({
    img: PropTypes.string.isRequire,
    use: PropTypes.string.isRequire,
    comment: PropTypes.string.isRequire,
    data: PropTypes.string.isRequire,
    rate: PropTypes.number.isRequire,
  })
};

export default Review;
