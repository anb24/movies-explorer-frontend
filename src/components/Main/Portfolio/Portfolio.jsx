import React from 'react';
import './Portfolio.css';
import linkArrow from '../../../images/link-arrow.svg';

const Portfolio = ({
    links = [], className = ''
}) => {
    return (<div className={`portfolio ${className}`}>
        <h3 className={'portfolio__heading'}>Портфолио</h3>
        <ul className="portfolio__list">
            {links.map((item) => (<li key={item.id} className="portfolio__list-item">
                <a
                    href={item.url}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="portfolio__link"
                >
                    {item.caption}
                </a>
                <img
                    src={linkArrow}
                    alt="Внешняя ссылка, откроется в новой вкладке"
                    className="portfolio__link-arrow"
                />
            </li>))}
        </ul>
    </div>);
};

export default Portfolio;
