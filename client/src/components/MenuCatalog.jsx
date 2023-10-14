import React from 'react';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function MenuCatalog({ statusCatalog }) {
    const [categories, setCategories] = useState([]);
    const [checkElement, setCheckElement] = useState('')

    useEffect(() => {
        fetch('http://localhost:3000/api/category')
            .then((res) => res.json())
            .then((res) => setCategories(res)
            )
    }, []);

    function closeElement() {
        statusCatalog(false)
    }

    return (
        <div className='wraper_box_menu' onClick={closeElement}>
            <div className='box_menu_catalog container' onClick={(e) => e.stopPropagation()}>
                <div className='menu_catalog_left'>
                    <div className='list'>
                        <nav onClick={(e) => setCheckElement(e.target.textContent)}>
                            <ul >
                                <li>Каталог</li>
                                <li><NavLink to="/aboutUs" onClick={closeElement}>О нас</NavLink></li>
                                <li>Блоги и статьи</li>
                                <li>Контакты</li>
                                <li>Распродажи</li>
                                <li>Информация</li>
                                <li><NavLink to="/basket" onClick={closeElement}>Корзина</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                    <div className='list_info'>

                        {(checkElement == "Каталог" && <><h4>Выберите категорию</h4>
                            <ul>{categories.map(item => <NavLink to={`/category/${item.category}`}><li onClick={closeElement}>{item.category}</li></NavLink>)}</ul></>)

                            || (checkElement == "Информация" && <ul> <li>О компании</li><li>Доставка и оплата</li></ul>)
                        }
                    </div>
                </div>
                <div className='menu_catalog_right'>
                    <h3>Выберите быстрое действие</h3>
                    <div className='box_el_menu_catalog_right'>
                        <img src="/img/logIn.svg" alt="" />
                        <div>
                            <h4>Подбор по авто</h4>
                            <p>Подберите для вашего авто</p>
                        </div>
                    </div>
                    <div className='box_el_menu_catalog_right'>
                        <img src="/img/autoIcon.svg" alt="" />
                        <div>
                            <h4>Войти</h4>
                            <p>Войти или зарегистрироваться</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
