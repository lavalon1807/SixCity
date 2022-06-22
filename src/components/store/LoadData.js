import React from 'react';
import {loadOffer} from './actionCreate'
//с помощью этой функции мы тащим с сервера определенные данные

function camelize(text) {
  text = text.replace(/[-_\s.]+(.)?/g, (_, c) => c ? c.toUpperCase() : '');
  return text.substr(0, 1).toLowerCase() + text.substr(1);
}

const LoadData = (data) => {

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
  return loadOffer(unicumCities, camelizeNestedKeys(data))
}

export {LoadData};
