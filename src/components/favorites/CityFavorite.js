import React from 'react';
import {LoadFavoritesCard} from './LoadFavoritesCard';

const CityFavorite = ({item, massFavor}) => {
  return(
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link">
            <span>{item}</span>
          </a>
        </div>
      </div>

      <div className="favorites__places">
        <LoadFavoritesCard massFav={massFavor} city={item}/>
      </div>

    </li>
  )
}

export {CityFavorite}
