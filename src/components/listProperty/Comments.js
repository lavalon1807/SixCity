import React, {useRef} from 'react';
import {useParams} from 'react-router-dom';
import {RatingComments} from './RatingComments'
import {connect, useDispatch} from 'react-redux';
import {sendComments} from '../store/apiCreate'
import {sendMassage} from '../store/actionCreate'


const Comments = (props) => {
  const {currentCity, loadComments} = props;
  const commentRef = useRef()
  const params = useParams();
  const id = Number(params.id);
  const dispatch = useDispatch()

  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch(sendComments({
      id: id,
      review: commentRef.current.value,
    }))
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">

        <RatingComments loadComments={loadComments} />

      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        type="text"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        ref={commentRef}>
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled=""
          onClick={handleSubmit}
        >Submit</button>
      </div>
    </form>
  )
}

const mapStateToProps = (state) => ({
  comment: state.loadComments
})

export {Comments}
export default connect(mapStateToProps)(Comments)
