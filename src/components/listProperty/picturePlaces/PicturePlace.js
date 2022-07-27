import React from 'react';
import {connect} from 'react-redux';

const PicturePlace = ({items, isLoaded}) => {
  // if(isLoaded) {
  //    // console.log(items)
  //    console.log(items.city.name)
  // }

  // console.log(items.city.name)

  const {images} = items
  const loadImage = images || [];

  return(
    loadImage.slice(0, 6).map((image)=>
      <div key={image.toString()} className="property__image-wrapper">
        <img className="property__image"   src={image} alt="Photo studio" />
      </div>
    )
  )
}

const mapStateToProps = (state) => ({
  offer: state.oneOffer,
  isLoaded: state.isLoaded,
})

export {PicturePlace}
export default connect(mapStateToProps)(PicturePlace)
