import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {AuthorizationStatus} from './const'

const PrivateRoute = ({component: Component, authorizationStatus}) => {
 return(
    <Route
      render={(props) =>
        authorizationStatus === AuthorizationStatus.AUTH ? <Component {...props} /> : <Redirect to='/error' />
      }
    />
 )

};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus
})

export default connect(mapStateToProps)(PrivateRoute)
