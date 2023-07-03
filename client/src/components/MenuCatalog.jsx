import React from 'react';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function MenuCatalog() {
    const [categories, setCategories] = useState([]);
    const [checkElement, setCheckElement] = useState('')

    useEffect(() => {
        fetch('http://localhost:3000/api/category')
            .then((res) => res.json())
            .then((res) => setCategories(res)
            )
    }, [])
    console.log(categories);
    console.log(checkElement);
    return (
        <div className='box_menu_catalog'>
            <div className='menu_catalog_left'>
                <div className='list'>
                    <nav onClick={(e) => setCheckElement(e.target.textContent)}>
                        <ul>
                            <li>Каталог</li>
                            <li>О нас</li>
                            <li>Блоги и статьи</li>
                            <li>Контакты</li>
                            <li>Распродажи</li>
                            <li>Информация</li>
                            <li><NavLink to="/basket">Корзина</NavLink></li>
                        </ul>
                    </nav>
                </div>
                <div className='list_info'>
                    {(checkElement == "Каталог" && <ul>{categories.map(item => <li>{item.category}</li>)}</ul>)
                        || (checkElement == "Информация" && <ul> <li>О компании</li><li>Доставка и оплата</li></ul>)
                    }
                </div>
            </div>
            <div className='menu_catalog_right'>

            </div>
        </div>
    )
}
