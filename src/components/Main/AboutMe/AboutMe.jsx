import React from 'react';
import SectionTitle from '../AboutProject/SectionTitle/SectionTitile';
import photo from '../../../images/photo-min.jpeg'
import Portfolio from '../Portfolio/Portfolio';
import {portfolioLinks} from '../../../config/links';

import './AboutMe.css';

const AboutMe = () => {
    return (<section id="about-me" className="about-me">
        <div className="about-me__container">
            <SectionTitle title={'Студент'}/>
            <div className="bio">
                <div className="bio__description">
                    <p className="bio__name">Андрей</p>
                    <p className="bio__job">Веб-разработчик, 29 лет</p>
                    <p className="bio__text">
                        Родился на Алтае, живу в Красноярске. Работаю на мебельном производстве, оператором
                        деревообрабатывающих станков ЧПУ.
                        Недавно начал кодить. Люблю ходить в походы, играть в компьютерные игры, читать историческую
                        литературу.
                        Выпускник курса по веб-разработке Яндекс Практикума.
                    </p>

                    <ul className="bio__links">
                        <li className="bio__list-item">
                            <a href="https://www.facebook.com"
                               rel="noopener noreferrer"
                               target="_blank"
                               className="bio__external-link">Facebook
                            </a>
                        </li>
                        <li className="bio__list-item">
                            <a href="https://github.com/anb24"
                               rel="noopener noreferrer"
                               target="_blank"
                               className="bio__external-link">Github
                            </a>
                        </li>
                    </ul>
                </div>

                <img src={photo}
                     alt="Фото студента"
                     className="bio__photo"
                />
            </div>

            <Portfolio links={portfolioLinks} className={'portfolio__about-me'}/>
        </div>
    </section>)
}

export default AboutMe;
