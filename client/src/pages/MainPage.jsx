import React, { useState, useEffect } from 'react';
import { Transition } from 'react-transition-group';
import FormAnswerQuestions from '../components/FormAnswerQuestions';
import auto1 from './img/auto1.jpg';
import auto2 from './img/auto2.jpg';
import auto3 from './img/auto3.jpg';
import auto4 from './img/auto4.jpg';
import auto5 from './img/auto5.jpg';

export default function MainPage() {
    const arrayAuto = [auto1, auto2, auto3, auto4, auto5,];
    const [autoFirst, setAutoFirst] = useState(0);
    const [autoSecond, setAutoSecond] = useState(1);
    const [status, setStatus] = useState(true);

    useEffect(() => {
        setInterval(() => {
            setAutoFirst(current => current === arrayAuto.length - 1 ? 0 : current + 1)
            setAutoSecond(current => current === arrayAuto.length - 1 ? 0 : current + 1)
            setStatus(false)
            setTimeout(() => setStatus(true), 7000)
        }, 8000);
        return clearInterval()
    }, [])

    function checkSlide() {
        setAutoFirst(current => current === arrayAuto.length - 1 ? 0 : autoSecond)
        setAutoSecond(current => current === arrayAuto.length - 1 ? 0 : current + 1)
    }
    return (
        <main className='main'>
            <section className='section_1 container'>
                <div className='section_1_left'>
                    <h1>URBAN <span>RACERS</span></h1>
                    <p>Интернет-магазин тюнинг-комплектующих для современных автомобилей Audi, Skoda, Seat, Skoda, Porsche, BMW, Mercedes-Benz и др.Мы предлагаем только лучшие товары из Европы и США. Работаем напрямую с заводами, тем самым гарантируя отличные цены и сроки доставки.</p>
                    <button>Категории</button>
                </div>
                <div className='section_1_right'>
                    <div className='img_slide_1'>
                        <Transition in={status}
                            timeout={1000}
                        >
                            {(state) => {
                                return (<img className={`${state}`} src={arrayAuto[autoFirst]} alt="#" />)
                            }}
                        </Transition>
                    </div>
                    <div className='img_slide_2' onClick={() => checkSlide()}>
                        <Transition in={status}
                            timeout={1000}
                        >
                            {(state) => {
                                return (<img className={`${state}`} src={arrayAuto[autoSecond]} alt="#" />)
                            }}
                        </Transition>
                    </div>
                </div>
            </section>
            <section className='section_2'>
                <div className='background_auto'></div>
                <div className='wraper_section_2 container'>
                    <div className='section_2_left'>
                        <h2>Подбор по автомобилю</h2>
                        <p>Ищите товары сразу для вашего автомобиля, это помжет сильно сузить ассортимент и ускорит выбор товаров. </p>
                    </div>
                    <div className='section_2_right'>
                        <form>
                            <select>
                                <option value="1">Синий</option>
                                <option value="2">Зеленый</option>
                                <option value="3">Желтый</option>
                            </select>
                            <select>
                                <option value="1">Синий</option>
                                <option value="2">Зеленый</option>
                                <option value="3">Желтый</option>
                            </select>
                            <select>
                                <option value="1">Синий</option>
                                <option value="2">Зеленый</option>
                                <option value="3">Желтый</option>
                            </select>
                            <button type='button'>Найти</button>
                        </form>
                    </div>
                </div>
            </section>
            <section className='section_3_wraper'>
                <div className="section_3 container">
                    <FormAnswerQuestions />
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
                            <div className="section_3_card">
                                <img src="./img/12.png" alt="#" />
                                <p>Трубины и турбокомплекты</p>
                            </div>
                            <div className="section_3_card">
                                <img src="./img/2.png" alt="#" />
                                <p>Тормоза и тормозные системы</p>
                            </div>
                            <div className="section_3_card">
                                <img src="./img/11.png" alt="#" />
                                <p>Охлаждение</p>
                            </div>
                            <div className="section_3_card">
                                <img src="./img/1.png" alt="#" />
                                <p>Подвеска</p>
                            </div>
                            <div className="section_3_card">
                                <img src="./img/3.png" alt="#" />
                                <p>Подарки и мерч</p>
                            </div>
                            <div className="section_3_card">
                                <img src="./img/3.png" alt="#" />
                                <p>Другое</p>
                            </div>
                            <div className="section_3_card">
                                <img src="./img/7.png" alt="#" />
                                <p>Двигатель</p>
                            </div>
                            <div className="section_3_card">
                                <img src="./img/5.png" alt="#" />
                                <p>Трансмиссия</p>
                            </div>
                            <div className="section_3_card">
                                <img src="./img/8.png" alt="#" />
                                <p>Топливные системы</p>
                            </div>
                            <div className="section_3_card">
                                <img src="./img/6.png" alt="#" />
                                <p>Интерьер и экстерер</p>
                            </div>
                            <div className="section_3_card">
                                <img src="./img/9.png" alt="#" />
                                <p>Шины и диски</p>
                            </div>
                            <div className="section_3_card">
                                <img src="./img/3.png" alt="#" />
                                <p>Оригинальные запчасти</p>
                            </div>
                            <div className="section_3_card">
                                <img src="./img/10.png" alt="#" />
                                <p>Выпскная система</p>
                            </div>
                            <div className="section_3_card">
                                <img src="./img/4.png" alt="#" />
                                <p>Впускные системы</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section_4_wraper'>
                <div className='section_4 container'>
                    <div className='section_4_top'>
                        <h2>Актуальное</h2>
                        <div className='box_btn_section4'>
                            <button type='button' className='active_btn'>Все</button>
                            <button type='button'>Новости</button>
                            <button type='button'>Акции</button>
                        </div>
                    </div>
                    <div className='section_4_bottom'>
                        <div className='section_4_card'>
                            <div className='box_img'>
                                <img src="./img/news.png" alt="#" />
                            </div>
                            <h3>Ломается ли ваг? После тюнинга</h3>
                            <p>Все что вы хотели спросить, но боялись. Расказываем, что будет с вашим поло после stage 3 REVO</p>
                            <p><span>12 января</span> <a href="#">Видеоблог</a></p>
                        </div>
                        <div className='section_4_card'>
                            <div className='box_img'>
                                <img src="./img/news.png" alt="#" />
                            </div>
                            <h3>Ломается ли ваг? После тюнинга</h3>
                            <p>Все что вы хотели спросить, но боялись. Расказываем, что будет с вашим поло после stage 3 REVO</p>
                            <p><span>12 января</span> <a href="#">Видеоблог</a></p>
                        </div>
                        <div className='section_4_card'>
                            <div className='box_img'>
                                <img src="./img/news.png" alt="#" />
                            </div>
                            <h3>Ломается ли ваг? После тюнинга</h3>
                            <p>Все что вы хотели спросить, но боялись. Расказываем, что будет с вашим поло после stage 3 REVO</p>
                            <p><span>12 января</span> <a href="#">Видеоблог</a></p>
                        </div>
                        <div className='section_4_card'>
                            <div className='box_img'>
                                <img src="./img/news.png" alt="#" />
                            </div>
                            <h3>Ломается ли ваг? После тюнинга</h3>
                            <p>Все что вы хотели спросить, но боялись. Расказываем, что будет с вашим поло после stage 3 REVO</p>
                            <p><span>12 января</span> <a href="#">Видеоблог</a></p>
                        </div>
                        <div className='section_4_card'>
                            <div className='box_img'>
                                <img src="./img/news.png" alt="#" />
                            </div>
                            <h3>Ломается ли ваг? После тюнинга</h3>
                            <p>Все что вы хотели спросить, но боялись. Расказываем, что будет с вашим поло после stage 3 REVO</p>
                            <p><span>12 января</span> <a href="#">Видеоблог</a></p>
                        </div>
                        <div className='section_4_card'>
                            <div className='box_img'>
                                <img src="./img/news.png" alt="#" />
                            </div>
                            <h3>Ломается ли ваг? После тюнинга</h3>
                            <p>Все что вы хотели спросить, но боялись. Расказываем, что будет с вашим поло после stage 3 REVO</p>
                            <p><span>12 января</span> <a href="#">Видеоблог</a></p>
                        </div>
                        <div className='section_4_card'>
                            <div className='box_img'>
                                <img src="./img/news.png" alt="#" />
                            </div>
                            <h3>Ломается ли ваг? После тюнинга</h3>
                            <p>Все что вы хотели спросить, но боялись. Расказываем, что будет с вашим поло после stage 3 REVO</p>
                            <p><span>12 января</span> <a href="#">Видеоблог</a></p>
                        </div>
                        <div className='section_4_card'>
                            <div className='box_img'>
                                <img src="./img/news.png" alt="#" />
                            </div>
                            <h3>Ломается ли ваг? После тюнинга</h3>
                            <p>Все что вы хотели спросить, но боялись. Расказываем, что будет с вашим поло после stage 3 REVO</p>
                            <p><span>12 января</span> <a href="#">Видеоблог</a></p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}



