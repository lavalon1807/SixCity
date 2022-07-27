import React from 'react';
import {connect} from 'react-redux';

const PicturePlace = ({items}) => {
  const {images} = items

  return(
    images.slice(0, 6).map((image)=>
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
