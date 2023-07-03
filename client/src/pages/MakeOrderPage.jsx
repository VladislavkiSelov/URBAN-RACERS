import React, { useState } from 'react';
import FormAnswerQuestions from '../components/FormAnswerQuestions';
import { useNavigate } from 'react-router-dom';
import FormMakeOrder from '../components/FormMakeOrder';

export default function MakeOrderPage() {
    const navigate = useNavigate()
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem('products')) || []);
    return (
        <>
            <section className='make_order container'>
                <div className='basket_left'>
                    <button className='go_back' onClick={() => navigate(-1)}>Назад</button>
                    <h2>Оформление заказа</h2>
                    {products.map(product => (
                        <div className='card_product_basket'>
                            <div className='box_img_basket'>
                                <img src={product.img} alt="#" />
                            </div>
                            <div className='card_product_content'>
                                <h4>{product.name}</h4>
                                <div className='box_price_number'>
                                    <h5 className='total'>₽ {product.price * product.number}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <FormMakeOrder />
            </section>
            <FormAnswerQuestions />
        </>
    )
}
