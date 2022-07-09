import React from 'react'
import {connect} from 'react-redux'
import Review from './Review'

const ReviewsLoader = (props) => {
  const {id, commentsMap, massage} = props
  const comments = commentsMap[id] || [];

  return(
    comments.map(item => <Review key={item.id} items={item} />)
  )
}
const mapStateToProps = (state) => ({
  commentsMap: state.loadComments,
  massage: state.massage,
})


export {ReviewsLoader}
export default connect(mapStateToProps)(ReviewsLoader)
