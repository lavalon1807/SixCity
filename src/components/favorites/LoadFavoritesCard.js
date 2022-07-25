import React from 'react';
import {connect} from 'react-redux';
import {FavoritCards} from './FavoritCards';

const LoadFavoritesCard = ({massFav, city}) => {

  massFav = massFav.filter(item=>item.city.name === city)

  return(
    massFav.map(item=><FavoritCards key={item.id} items={item} />)
  )
}

const mapStateToProps = (state) => ({
  massFavor: state.objFavorite,
})

export {LoadFavoritesCard}
export default connect(mapStateToProps)(LoadFavoritesCard)
