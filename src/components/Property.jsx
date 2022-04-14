import React, {useState, useCallback, useEffect} from 'react';
import Header from './Header';
import DataProp from './DataProp'
import Reviews from './Reviews'
import offer from '../mocks/offer'
import Neiborhood from './Neiborhood'
import { useParams } from 'react-router-dom'
import Comp from './comp'
import comment from '../mocks/Comment'
import Map from './Map/Map';
import coords from '../mocks/Coords'

const Property = (props) => {
  const params = useParams()
  const id = Number(params.id);
  const item = offer.find((it) => it.id === id)
  const [active, setActive] = useState(null)

  const handleMouseEnter = useCallback((item) => {
    setActive(item)
  }, [])
  const handleMouseLeave = useCallback((item) => {
    setActive(null)
  }, [])

  const coord = coords.filter((item) => item.id !== id).slice(0, 3)

  return(
    <>
      <div style={{display: "none"}}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
      </div>

      <div className="page">

      <Header />

        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                <div className="property__image-wrapper">
                  <img className="property__image" src="img/room.jpg" alt="Photo studio" />
                </div>
                <div className="property__image-wrapper">
                  <img className="property__image" src="img/apartment-01.jpg" alt="Photo studio" />
                </div>
                <div className="property__image-wrapper">
                  <img className="property__image" src="img/apartment-02.jpg" alt="Photo studio" />
                </div>
                <div className="property__image-wrapper">
                  <img className="property__image" src="img/apartment-03.jpg" alt="Photo studio" />
                </div>
                <div className="property__image-wrapper">
                  <img className="property__image" src="img/studio-01.jpg" alt="Photo studio" />
                </div>
                <div className="property__image-wrapper">
                  <img className="property__image" src="img/apartment-01.jpg" alt="Photo studio" />
                </div>
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">

                <DataProp key={item.id} items={item} />

                <div className="property__inside">
            <h2 className="property__inside-title">What&apos;s inside</h2>
            <ul className="property__inside-list">
              <li className="property__inside-item">
                Wi-Fi
              </li>
              <li className="property__inside-item">
                Washing machine
              </li>
              <li className="property__inside-item">
                Towels
              </li>
              <li className="property__inside-item">
                Heating
              </li>
              <li className="property__inside-item">
                Coffee machine
              </li>
              <li className="property__inside-item">
                Baby seat
              </li>
              <li className="property__inside-item">
                Kitchen
              </li>
              <li className="property__inside-item">
                Dishwasher
              </li>
              <li className="property__inside-item">
                Cabel TV
              </li>
              <li className="property__inside-item">
                Fridge
              </li>
            </ul>
          </div>
          <div className="property__host">
            <h2 className="property__host-title">Meet the host</h2>
            <div className="property__host-user user">
              <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
              </div>
              <span className="property__user-name">
                Angelina
              </span>
              <span className="property__user-status">
                Pro
              </span>
            </div>
            <div className="property__description">
              <p className="property__text">
                A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
              </p>
              <p className="property__text">
                An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
              </p>
            </div>
          </div>
          <section className="property__reviews reviews">
            <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comment.length}</span></h2>
            <ul className="reviews__list">

            {/*Загружаем отзывы*/}
              <Reviews items={comment}/>

            </ul>
            <form className="reviews__form form" action="#" method="post">
              <label className="reviews__label form__label" htmlFor="review">Your review</label>
              <div className="reviews__rating-form form__rating">
                <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" />
                <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>

                <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" />
                <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>

                <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" />
                <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>

                <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" />
                <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>

                <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" />
                <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>
              </div>
              <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
              <div className="reviews__button-wrapper">
                <p className="reviews__help">
                  To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
                </p>
                <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
              </div>
            </form>
          </section>
              </div>
            </div>
            <section className="property__map map" style={{margin: 'auto', maxWidth: '1144px'}}>

            {/*Подключаем карту*/}
              {<Map active={active} items={offer} coords={coord}/>}


            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">

              {/*Тут выводим карточки соседи*/}
                <Comp enterFromProperty={handleMouseEnter} leaveFromProperty={handleMouseLeave}/>


              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  )
}


export default Property;
