import React from 'react';

const LoadRatingComment = ({it, onChangeRating}) => {
  const onChangeRatingComment = () => {
    onChangeRating(it.num)
  }
  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={it.num}
        id={it.star}
        type="radio"
        onChange={onChangeRatingComment}
        />
      <label htmlFor={it.star} className="reviews__rating-label form__rating-label" title={it.state}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  )
}

export {LoadRatingComment}
