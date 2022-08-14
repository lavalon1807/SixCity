import {addFavorites} from './favorite-process/action-favorite';
import {loadOffer, loadOneOffer, loadNearby} from './load-offer-process/action-create-offer';
//с помощью этой функции мы тащим с сервера определенные данные

function camelize(text) {
  text = text.replace(/[-_\s.]+(.)?/g, (_, c) => c ? c.toUpperCase() : '');
  return text.substr(0, 1).toLowerCase() + text.substr(1);
}

const LoadData = (data, favor) => {

  const camelizeNestedKeys = function(dataObj) {
      return JSON.parse(JSON.stringify(dataObj).replace(/("\w+":)/g, function(keys) {
        return camelize(keys);
      }));
  }

  const initial = 'Paris'
  const cities = data.reduce((appacity, currentValue) => {
    return [...appacity, currentValue.city.name]
  }, [initial])

  const unicumCities = [...new Set(cities)]

  const dataFavorite = data.map(item=>
    item.id === favor.id ? favor : item
  )

  return loadOffer(unicumCities, camelizeNestedKeys(dataFavorite))
}

const LoadDataFavorite = (data) => {

  const camelizeNestedKeys = function(dataObj) {
      return JSON.parse(JSON.stringify(dataObj).replace(/("\w+":)/g, function(keys) {
        return camelize(keys);
      }));
  }

  return addFavorites(camelizeNestedKeys(data))
}

const LoadOfferOne = (data) => {

  const camelizeNestedKeys = function(dataObj) {
      return JSON.parse(JSON.stringify(dataObj).replace(/("\w+":)/g, function(keys) {
        return camelize(keys);
      }));
  }

  return loadOneOffer(camelizeNestedKeys(data))
}

const LoadOfferNearby = (data) => {
  const camelizeNestedKeys = function(dataObj) {
      return JSON.parse(JSON.stringify(dataObj).replace(/("\w+":)/g, function(keys) {
        return camelize(keys);
      }));
  }

  return loadNearby(camelizeNestedKeys(data))
}

export {LoadData, LoadDataFavorite, LoadOfferOne, LoadOfferNearby};
