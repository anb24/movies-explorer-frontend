import { MOVIES_API_URL } from "./constants";

class MoviesApi {
  constructor(params) {
    this._url = params.url;
    this._headers = params.headers;
  }

  // ПРОВЕРКА ПРОМИСА:
  _getResponse(res) {
    return res.ok
      ? res.json()
      : Promise.reject(`Что-то пошло не так: ${res.status} ${res.statusText}`);
  }

  // GET: получение массива фильмов
  getMovies() {
    return fetch(`${this._url}/beatfilm-movies`, {
      headers: {
        ...this._headers,
      },
    }).then(this._getResponse);
  }
}

export const moviesApi = new MoviesApi({
  url: `${MOVIES_API_URL}`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
