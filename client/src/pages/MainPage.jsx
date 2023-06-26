import React, { useState, useEffect } from 'react';
import { Transition } from 'react-transition-group';
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
        </main>
    )
}



