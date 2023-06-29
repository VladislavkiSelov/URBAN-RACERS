import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function ProductCategories() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/api/category')
            .then((res) => res.json())
            .then((res) => setCategories(res)
            )
    }, [])

    // let URL = `/category ${item.category}`

    return (
        <section className='section_3_wraper'>
            <div className="section_3 container">
                <div className='wraper_section_3_main_content'>
                    <div className='section_3_left'>
                        <h2>Категории товаров</h2>
                        <p>Выберите категорию котоаря вас интересует. Тут есть все – от ГБЦ до футболки с логотипом БМВ М повер-рейнджерс</p>
                        <div className='show_product'>
                            <h3>Показать все товары</h3>
                            <h4>Перейти в каталог</h4>
                        </div>
                        <div className='check_product'>
                            <div>
                                <h3>Не знаете что выбрать ?</h3>
                                <h4>Перейти в каталог</h4>
                            </div>
                            <img src="./img/image_5.png" alt="#" />
                        </div>
                    </div>
                    <div className='section_3_right'>
                        {categories.map((item) =>
                            <NavLink to={`/category/${item.category}`}><div className='section_3_card'>
                                <img src={item.img} alt="#" />
                                <p>{item.category}</p> </div></NavLink>)}
                    </div>
                </div>
            </div>
        </section>
    )
}
