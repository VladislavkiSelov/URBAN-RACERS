import React from 'react'
import auto1 from './img/auto1.jpg';
import auto2 from './img/auto2.jpg';
import auto3 from './img/auto3.jpg';
import auto4 from './img/auto4.jpg';
import auto5 from './img/auto5.jpg';
import { useState } from 'react'


export default function MainPage() {
    const arrayAuto = [auto1, auto2, auto3, auto4, auto5,];
    const [autoFirst, setAutoFirst] = useState(arrayAuto[0]);
    const [autoSecond, setAutoSecond] = useState(arrayAuto[1]);
    setInterval(() => {
        arrayAuto.forEach((item, index) => {
            if (autoFirst === item) {
                setAutoFirst(arrayAuto[++index])
            }
            if (autoSecond === item) {
                setAutoSecond(arrayAuto[++index])
            }
            if (autoFirst === arrayAuto[arrayAuto.length - 1]) {
                setAutoFirst(arrayAuto[0])
            }
            if (autoSecond === arrayAuto[arrayAuto.length - 1]) {
                setAutoSecond(arrayAuto[0])
            }
        })
    }, 5000);
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
                        <img src={autoFirst} alt="#" />
                    </div>
                    <div className='img_slide_2'>
                        <img src={autoSecond} alt="#" />
                    </div>
                </div>
            </section>
        </main>
    )
}
