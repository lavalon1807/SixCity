import React from 'react';
import {LoadRatingComment} from './LoadRatingComment';
import {connect} from 'react-redux';
const number = [
  {
    id: 5,
    star: '5-stars',
    state: 'terribly',
    num: '5',
  },
  {
    id: 4,
    star: '4-stars',
    state: 'badly',
    num: '4',
  },
  {
    id: 3,
    star: '3-stars',
    state: 'not bad',
    num: '3',
  },
  {
    id: 2,
    star: '2-stars',
    state: 'good',
    num: '2',
  },
  {
    id: 1,
    star: '1-stars',
    state: 'perfect',
    num: '1',
  },
];
const RatingComments = ({onChangeRating}) => {

  return (
    number.map((it) =>
      <LoadRatingComment it={it} key={it.id} onChangeRating={onChangeRating}/>
    )
  )
}

export {RatingComments}
