import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header className='header'>
            <div className='top_header_wraper'>
                <div className='top_header container'>
                    <p>Регион: Харьков</p>
                    <div className="top_header_left">
                        <div className='tel'>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.55 4.16667C14.5 4.90833 14.375 5.63333 14.175 6.325L15.175 7.325C15.5167 6.325 15.7333 5.26667 15.8083 4.16667H14.55ZM6.33333 14.1833C5.625 14.3833 4.9 14.5083 4.16667 14.5583V15.8C5.26667 15.725 6.325 15.5083 7.33333 15.175L6.33333 14.1833ZM13.75 2.5H16.6667C17.125 2.5 17.5 2.875 17.5 3.33333C17.5 11.1583 11.1583 17.5 3.33333 17.5C2.875 17.5 2.5 17.125 2.5 16.6667V13.7583C2.5 13.3 2.875 12.925 3.33333 12.925C4.36667 12.925 5.375 12.7583 6.30833 12.45C6.39167 12.4167 6.48333 12.4083 6.56667 12.4083C6.78333 12.4083 6.99167 12.4917 7.15833 12.65L8.99167 14.4833C11.35 13.275 13.2833 11.35 14.4833 8.99167L12.65 7.15833C12.4167 6.925 12.35 6.6 12.4417 6.30833C12.75 5.375 12.9167 4.375 12.9167 3.33333C12.9167 2.875 13.2917 2.5 13.75 2.5Z" fill="#F05454" />
                            </svg>
                            <a href="tel:+380686492018">+380686492018</a>
                        </div>
                        <span></span>
                        <div className='block_person'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM7.07 18.28C7.5 17.38 10.12 16.5 12 16.5C13.88 16.5 16.51 17.38 16.93 18.28C15.57 19.36 13.86 20 12 20C10.14 20 8.43 19.36 7.07 18.28ZM18.36 16.83C16.93 15.09 13.46 14.5 12 14.5C10.54 14.5 7.07 15.09 5.64 16.83C4.62 15.49 4 13.82 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 13.82 19.38 15.49 18.36 16.83ZM12 6C10.06 6 8.5 7.56 8.5 9.5C8.5 11.44 10.06 13 12 13C13.94 13 15.5 11.44 15.5 9.5C15.5 7.56 13.94 6 12 6ZM12 11C11.17 11 10.5 10.33 10.5 9.5C10.5 8.67 11.17 8 12 8C12.83 8 13.5 8.67 13.5 9.5C13.5 10.33 12.83 11 12 11Z" fill="#4F4F4F" />
                            </svg>
                            <p>Евграфий Евграфьевич</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='navigation container'>
                <div className='navigation_left'>
                    <li><NavLink to="/">
                        <div className='logo'>
                            <img src="/img/logo.svg" alt="#" />
                            <p>Магазин<br />
                                Автотюинга</p>
                        </div></NavLink></li>
                    <nav>
                        <ul>
                            <li><NavLink to="/">Главная</NavLink></li>
                            <li>Каталог</li>
                            <li>О нас</li>
                            <li>Блоги и статьи</li>
                            <li>Контакты</li>
                            <li>Распродажи</li>
                            <li>Информация</li>
                            <li>Корзина</li>
                        </ul>
                    </nav>
                </div>
                <input type="text" />
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10.8994" cy="10.8994" r="6" stroke="#F05454" stroke-width="2" />
                    <rect x="14.4355" y="15.8491" width="2" height="7" transform="rotate(-45 14.4355 15.8491)" fill="#F05454" />
                </svg>
                <NavLink to="/category"><button type='button'>Категории</button></NavLink>
                <span class="btn_open_modal_menu"></span>
            </div>
        </header>
    )
}
