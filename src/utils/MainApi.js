import { MAIN_API_URL, MOVIES_API_URL } from "./constants";

class MainApi {
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

  // GET: получение данных профиля
  getUserData(token) {
    return fetch(`${this._url}/users/me`, {
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`,
      },
    }).then(this._getResponse);
  }

  // PATCH: редактирование профиля
  editUserData({ name, email }, token) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        email,
      }),
    }).then(this._getResponse);
  }

  // POST: регистрация пользователя
  register({ name, email, password }) {
    return fetch(`${this._url}/signup`, {
      method: "POST",
      headers: {
        ...this._headers,
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    }).then(this._getResponse);
  }

  // POST: авторизация пользователя
  authorize({ email, password }) {
    return fetch(`${this._url}/signin`, {
      method: "POST",
      headers: {
        ...this._headers,
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then(this._getResponse);
  }

  getSavedMovies() {
    return fetch(`${this._url}/movies`, {
      headers: this._headers,
    }).then(this._getResponse);
  }

  addMovieToFavorites(movie) {
    return fetch(`${this._url}/movies`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        country: movie.country ? movie.country : 'default',
        director: movie.director ? movie.director : 'default',
        duration: movie.duration ? movie.duration : 0,
        year: movie.year ? movie.year : 0,
        description: movie.description ? movie.description : 'default',
        image: `${MOVIES_API_URL}${movie.image.url}`,
        thumbnail: `${MOVIES_API_URL}${movie.image.url}`,
        trailerLink: movie.trailerLink ? movie.trailerLink : 'https://www.youtube.com/watch?v=LXb3EKWsInQ',
        movieId: movie.id.toString(),
        nameRU: movie.nameRU ? movie.nameRU : 'default',
        nameEN: movie.nameEN ? movie.nameEN : 'default',
      }),
    }).then(this._getResponse);
  }

  removeMovieFromFavorites(movieId) {
    return fetch(`${this._url}/movies/${movieId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._getResponse);
  }
}

export const mainApi = new MainApi({
  // url: 'http://localhost:3000', // для локальной разработки
  url: `${MAIN_API_URL}`, // для удалённой разработки
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
