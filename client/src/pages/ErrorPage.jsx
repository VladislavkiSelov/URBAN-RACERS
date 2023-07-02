import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function ErrorPage() {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    return (
        <section className='container box_error'>
            <h3>Дотюнинговались...</h3>
            <img src="/img/error.png" alt="#" />
            <h2>404</h2>
            <h3 className='no_details'>Такой детали нет</h3>
            <button onClick={goBack}>Назад к стоку</button>
            <p>Если вы считаете, что вы все сделали правильно, а попали сюда – напишите нам.</p>
        </section>
    )
}
