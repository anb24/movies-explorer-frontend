import img1 from "../images/movies/pic__COLOR_pic-1.jpeg";
import img2 from "../images/movies/pic__COLOR_pic-2.jpeg";
import img3 from "../images/movies/pic__COLOR_pic-3.jpeg";
import img4 from "../images/movies/pic__COLOR_pic-4.jpeg";
import img5 from "../images/movies/pic__COLOR_pic-5.jpeg";
import img6 from "../images/movies/pic__COLOR_pic-6.jpeg";
import img7 from "../images/movies/pic__COLOR_pic-7.jpeg";
import img8 from "../images/movies/pic__COLOR_pic-8.jpeg";
import img9 from "../images/movies/pic__COLOR_pic-9.jpeg";
import img10 from "../images/movies/pic__COLOR_pic-10.jpeg";
import img11 from "../images/movies/pic__COLOR_pic-11.jpeg";
import img12 from "../images/movies/pic__COLOR_pic-12.jpeg";
import img13 from "../images/movies/pic__COLOR_pic-13.jpeg";
import img14 from "../images/movies/pic__COLOR_pic-14.jpeg";
import img15 from "../images/movies/pic__COLOR_pic-15.jpeg";
import img16 from "../images/movies/pic__COLOR_pic-16.jpeg";

// навигация для авторизованного
const navLinks = [
  {
    id: "movies",
    caption: "Фильмы",
    path: "/movies",
  },
  {
    id: "saved-movies",
    caption: "Сохранённые фильмы",
    path: "/saved-movies",
  },
];

// регистрация и авторизация
const authLinks = [
  {
    id: "register",
    caption: "Регистрация",
    path: "/register",
  },
  {
    id: "login",
    caption: "Войти",
    path: "/login",
  },
];

const navTabLinks = [
  {
    id: "aboutProject",
    caption: "О проекте",
    url: "#about-project",
  },
  {
    id: "techs",
    caption: "Технологии",
    url: "#techs",
  },
  {
    id: "aboutMe",
    caption: "Студент",
    url: "#about-me",
  },
];

const techs = [
  {
    id: "html",
    caption: "HTML",
    url: "https://ru.wikipedia.org/wiki/HTML5",
  },
  {
    id: "css",
    caption: "CSS",
    url: "https://ru.wikipedia.org/wiki/CSS",
  },
  {
    id: "js",
    caption: "JS",
    url: "https://ru.wikipedia.org/wiki/JavaScript",
  },
  {
    id: "react",
    caption: "React",
    url: "https://ru.wikipedia.org/wiki/React",
  },
  {
    id: "git",
    caption: "Git",
    url: "https://ru.wikipedia.org/wiki/Git",
  },
  {
    id: "express",
    caption: "Express.js",
    url: "https://ru.wikipedia.org/wiki/Express.js",
  },
  {
    id: "mongo",
    caption: "mongoDB",
    url: "https://ru.wikipedia.org/wiki/MongoDB",
  },
];

const portfolioLinks = [
  {
    id: 1,
    caption: "Статичный сайт",
    url: "https://github.com/anb24/how-to-learn",
  },
  {
    id: 2,
    caption: "Адаптивный сайт",
    url: "https://github.com/anb24/russian-travel",
  },
  {
    id: 3,
    caption: "Одностраничное приложение",
    url: "https://github.com/anb24/react-mesto-api-full",
  },
];

const footerLinks = [
  {
    id: "ya.pra-home",
    caption: "Яндекс.Практикум",
    url: "https://praktikum.yandex.ru",
  },
  {
    id: "ya.pra-gh",
    caption: "Github",
    url: "https://github.com/yandex-praktikum",
  },
  {
    id: "ya.pra-fb",
    caption: "Facebook",
    url: "https://www.facebook.com/yandex.praktikum",
  },
];

const movies = [
  {
    id: Math.random(),
    url: img1,
    title: "33 слова о дизайне",
    duration: "1ч42м",
  },
  {
    id: Math.random(),
    url: img2,
    title: "33 слова о дизайне",
    duration: "1ч42м",
  },
  {
    id: Math.random(),
    url: img3,
    title: "33 слова о дизайне",
    duration: "1ч42м",
  },
  {
    id: Math.random(),
    url: img4,
    title: "33 слова о дизайне",
    duration: "1ч42м",
  },
  {
    id: Math.random(),
    url: img5,
    title: "33 слова о дизайне",
    duration: "1ч42м",
  },
  {
    id: Math.random(),
    url: img6,
    title: "33 слова о дизайне",
    duration: "1ч42м",
  },
  {
    id: Math.random(),
    url: img7,
    title: "33 слова о дизайне",
    duration: "1ч42м",
  },
  {
    id: Math.random(),
    url: img8,
    title: "33 слова о дизайне",
    duration: "1ч42м",
  },
  {
    id: Math.random(),
    url: img9,
    title: "33 слова о дизайне",
    duration: "1ч42м",
  },
  {
    id: Math.random(),
    url: img10,
    title: "33 слова о дизайне",
    duration: "1ч42м",
  },
  {
    id: Math.random(),
    url: img11,
    title: "33 слова о дизайне",
    duration: "1ч42м",
  },
  {
    id: Math.random(),
    url: img12,
    title: "33 слова о дизайне",
    duration: "1ч42м",
  },
  {
    id: Math.random(),
    url: img13,
    title: "33 слова о дизайне",
    duration: "1ч42м",
  },
  {
    id: Math.random(),
    url: img14,
    title: "33 слова о дизайне",
    duration: "1ч42м",
  },
  {
    id: Math.random(),
    url: img15,
    title: "33 слова о дизайне",
    duration: "1ч42м",
  },
  {
    id: Math.random(),
    url: img16,
    title: "33 слова о дизайне",
    duration: "1ч42м",
  },
];

const savedMovies = [
  {
    id: Math.random(),
    url: img1,
    title: "33 слова о дизайне",
    duration: "1ч42м",
  },
  {
    id: Math.random(),
    url: img2,
    title: "33 слова о дизайне",
    duration: "1ч42м",
  },
  {
    id: Math.random(),
    url: img3,
    title: "33 слова о дизайне",
    duration: "1ч42м",
  },
];

export {
  authLinks,
  navLinks,
  navTabLinks,
  techs,
  portfolioLinks,
  footerLinks,
  movies,
  savedMovies,
};
