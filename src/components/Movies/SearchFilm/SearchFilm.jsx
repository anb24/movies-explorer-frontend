import React from 'react';
import searchImg from '../../../images/search-button-arrow.png'
import './SearchFilm.css'
import ShortFilmFilter from './ShortFilmFilter/ShortFilmFilter';

const SearchFilm = ({className = ''}) => {
    return (<section className={`search-film search-film_position ${className}`}>
        <form action="" className="search-film__form">
            <div className="search-film__input-wrapper">
                <input
                    type="text"
                    placeholder="Фильм"
                    className="search-film__input"
                />
            </div>
            <button className="search-film__button">
                <img
                    src={searchImg}
                    alt="ПОИСК"
                    className="search__img"
                />
            </button>
        </form>
        <div className="search-film__divider"/>
        <ShortFilmFilter/>
    </section>);
}

export default SearchFilm;
