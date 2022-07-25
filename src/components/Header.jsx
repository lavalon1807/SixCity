import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import Card from './Card'
import {logout} from './store/apiCreate';
import {AuthorizationStatus} from './const';

const styleLogout = {
  color: 'black',
  height: '30px',
  borderRadius: '25%',
  position: 'absolute',
  top: '7px',
  right: '-55px',
  cursor: 'pointer',
}

const styleAvatar = {
  backgroundImage: 'url(https://assets.htmlacademy.ru/intensives/javascript-3/avatar/8.jpg)',
  backgroundSize: '100%',
  backgroundRepeat: 'no-repeat',
  width: '40px',
  height: '40px',
  borderRadius: '20px',
}

const Header = (props) => {
  const {authorizationStatus, loginRef, login, clearSubmit} = props
  const register = authorizationStatus === AuthorizationStatus.AUTH;

  const handleClear = () => {
    clearSubmit({
      login: null,
      password: null
    })
  }

  let address

  if (register) {
    address = '/favorites'
  } else {
    address = '/login'
  }

  const avatar = register ? '' : 'user__avatar-wrapper';
  const stylevatar = register ? styleAvatar : {}

  return(
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link
                className="header__logo-link header__logo-link--active" to="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list" style={{position: 'relative'}}>
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={address}>
                    <div className={`header__avatar-wrapper ${avatar}`} style={stylevatar} >
                    </div>
                    <span className="header__user-name user__name">
                      {register ?
                        (login) : ('Sign in')
                      }
                    </span>
                  </Link>
                  {register && (
                    <button type="button" onClick={handleClear} style={styleLogout}>OUT</button>
                  )}
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}

Header.propTypes = {
  clearSubmit: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  login: state.login,
})

const mapDispatchToProps = (dispatch) => ({
  clearSubmit() {
    dispatch(logout())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
