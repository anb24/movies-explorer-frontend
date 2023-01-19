import React, { useRef } from 'react';
import searchImg from '../../../images/search-button-arrow.png'
import './SearchFilm.css'
import ShortFilmFilter from './ShortFilmFilter/ShortFilmFilter';

const SearchFilm = ({// searchInputError,
    setSearchInputError,
    isShortMovies,
    setIsShortMovies,
    onSubmit,
    className
}) => {
    const inputElement = useRef(null);

    const handleFormSubmit = evt => {
        evt.preventDefault();
        onSubmit(inputElement.current.value);
    };

    return (<section className={`search-film search-film_position ${className}`}>
        <form className="search-film__form" onSubmit={handleFormSubmit}>
            <div className="search-film__input-wrapper">
                <svg className="search-film__icon"
                    width="13"
                    height="14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                </svg>
                <input type="text"
                    placeholder="Фильм"
                    className="search-film__input"
                    required
                    ref={inputElement}
                    onClick={() => setSearchInputError('')}
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
        <div className="search-film__divider" />
        <ShortFilmFilter isShortMovies={isShortMovies}
            setIsShortMovies={setIsShortMovies}
        />
    </section>);
}

export default SearchFilm;
