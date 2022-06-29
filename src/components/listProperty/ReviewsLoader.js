import React from 'react'
import {connect} from 'react-redux'
import Review from './Review'

const Reviews = (props) => {
  const {items, comments, userPerson} = props

  return(
    items.map(item => <Review key={item.id} items={item} comments={comments} userPerson={userPerson}/>)
  )
}
const mapStateToProps = (state) => ({
  comments: state.loadComments,
  userPerson: state.loadUser,
})

export default connect(mapStateToProps)(Reviews)
