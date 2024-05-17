export default function getInfo (idOrName) {
  const URL = 'http://www.omdbapi.com/?apikey=9713c5e7&';
  const regexp = /^tt\d*$/

  if (regexp.test(idOrName)) {
    return fetch(URL + 'i=' + idOrName)
      .then(response => response.json())
  }
  return fetch(URL + 't=' + idOrName)
    .then(response => response.json())
}