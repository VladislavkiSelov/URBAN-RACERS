import React, { useEffect, useState } from 'react'

export default function ProductCategories() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/api/category')
            .then((res) => res.json())
            .then((res) => setCategories(res)
            )
    }, [])

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
                            <div className='section_3_card'>
                                <img src={item.img} alt="#" />
                                <p>{item.category}</p> </div>)}
                    </div>
                </div>
            </div>
        </section>
    )
}




    //     return (
    //         <section className='section_3_wraper'>
    //             <div className="section_3 container">
    //                 <div className='wraper_section_3_main_content'>
    //                     <div className='section_3_left'>
    //                         <h2>Категории товаров</h2>
    //                         <p>Выберите категорию котоаря вас интересует. Тут есть все – от ГБЦ до футболки с логотипом БМВ М повер-рейнджерс</p>
    //                         <div className='show_product'>
    //                             <h3>Показать все товары</h3>
    //                             <h4>Перейти в каталог</h4>
    //                         </div>
    //                         <div className='check_product'>
    //                             <div>
    //                                 <h3>Не знаете что выбрать ?</h3>
    //                                 <h4>Перейти в каталог</h4>
    //                             </div>
    //                             <img src="./img/image_5.png" alt="#" />
    //                         </div>
    //                     </div>
    //                     <div className='section_3_right'>
    //                         <div className="section_3_card">
    //                             <img src="./img/12.png" alt="#" />
    //                             <p>Трубины и турбокомплекты</p>
    //                         </div>
    //                         <div className="section_3_card">
    //                             <img src="./img/2.png" alt="#" />
    //                             <p>Тормоза и тормозные системы</p>
    //                         </div>
    //                         <div className="section_3_card">
    //                             <img src="./img/11.png" alt="#" />
    //                             <p>Охлаждение</p>
    //                         </div>
    //                         <div className="section_3_card">
    //                             <img src="./img/1.png" alt="#" />
    //                             <p>Подвеска</p>
    //                         </div>
    //                         <div className="section_3_card">
    //                             <img src="./img/3.png" alt="#" />
    //                             <p>Подарки и мерч</p>
    //                         </div>
    //                         <div className="section_3_card">
    //                             <img src="./img/3.png" alt="#" />
    //                             <p>Другое</p>
    //                         </div>
    //                         <div className="section_3_card">
    //                             <img src="./img/7.png" alt="#" />
    //                             <p>Двигатель</p>
    //                         </div>
    //                         <div className="section_3_card">
    //                             <img src="./img/5.png" alt="#" />
    //                             <p>Трансмиссия</p>
    //                         </div>
    //                         <div className="section_3_card">
    //                             <img src="./img/8.png" alt="#" />
    //                             <p>Топливные системы</p>
    //                         </div>
    //                         <div className="section_3_card">
    //                             <img src="./img/6.png" alt="#" />
    //                             <p>Интерьер и экстерер</p>
    //                         </div>
    //                         <div className="section_3_card">
    //                             <img src="./img/9.png" alt="#" />
    //                             <p>Шины и диски</p>
    //                         </div>
    //                         <div className="section_3_card">
    //                             <img src="./img/3.png" alt="#" />
    //                             <p>Оригинальные запчасти</p>
    //                         </div>
    //                         <div className="section_3_card">
    //                             <img src="./img/10.png" alt="#" />
    //                             <p>Выпскная система</p>
    //                         </div>
    //                         <div className="section_3_card">
    //                             <img src="./img/4.png" alt="#" />
    //                             <p>Впускные системы</p>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </section>
    //     )
    // }