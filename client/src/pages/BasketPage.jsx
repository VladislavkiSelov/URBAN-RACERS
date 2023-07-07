import React, { useState } from 'react';
import FormAnswerQuestions from '../components/FormAnswerQuestions';
import DeletionСonfirmation from '../components/DeletionСonfirmation';
import { NavLink } from 'react-router-dom';


export default function BasketPage() {
    const [statusModalDelete, setStatusModalDelete] = useState(false);
    const [checkProduct, setCheckProduct] = useState([]);
    const [products, setProducts] = useState(JSON.parse(localStorage.getItem('products')) || []);
    const totalAmount = products.reduce((acc, item) => acc += (item.price * item.number), 0);
    function deleteProduct(elementDelete) {
        const resultDelete = products.filter(item => item.id !== elementDelete.id);
        localStorage.setItem('products', JSON.stringify(resultDelete));
        setProducts(resultDelete);
        setStatusModalDelete(false)
    }

    function plusProduct(product) {
        const res = products.map(item => {
            if (item.id !== product.id) {
                return item
            } else {
                ++item.number
                return item
            }
        })
        localStorage.setItem('products', JSON.stringify(res));
        setProducts(res)

    }

    function minusProduct(product) {
        if (product.number <= 1) {
            return
        }
        const res = products.map(item => {
            if (item.id !== product.id) {
                return item
            } else {
                --item.number
                return item
            }
        })
        localStorage.setItem('products', JSON.stringify(res));
        setProducts(res)
    }

    return (
        <>
            {statusModalDelete && <DeletionСonfirmation setStatusModalDelete={(value) => setStatusModalDelete(value)} product={checkProduct} deleteProduct={(value) => deleteProduct(value)} />}
            <section className='basket container'>
                <div className='basket_left'>
                    <h2>Корзина</h2>
                    {products.length > 0 ? products.map(product => (
                        <div className='card_product_basket'>
                            <div className='box_img_basket'>
                                <img src={product.img} alt="#" />
                            </div>
                            <div className='card_product_content'>
                                <h4>{product.name}</h4>
                                <div className='box_price_number'>
                                    <h5 className='price'>За шт. {product.price} ₽</h5>
                                    <h5 className='total'>Итого: {product.price * product.number}</h5>
                                    <div className='box_minus_plus'>
                                        <span className='plus' onClick={() => plusProduct(product)}>
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect id="Rectangle 45" opacity="0.4" width="30" height="30" rx="4" fill="#F1F1F1" />
                                                <path id="Vector" d="M21 16H16V21C16 21.55 15.55 22 15 22C14.45 22 14 21.55 14 21V16H9C8.45 16 8 15.55 8 15C8 14.45 8.45 14 9 14H14V9C14 8.45 14.45 8 15 8C15.55 8 16 8.45 16 9V14H21C21.55 14 22 14.45 22 15C22 15.55 21.55 16 21 16Z" fill="#4F4F4F" />
                                            </svg>
                                        </span>
                                        <span className='number'>{product.number}</span>
                                        <span className='minus' onClick={() => minusProduct(product)}>
                                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect id="Rectangle 46" opacity="0.4" width="30" height="30" rx="4" fill="#F1F1F1" />
                                                <rect id="Rectangle 48" x="8" y="14" width="14" height="2" rx="1" fill="#4F4F4F" />
                                            </svg>
                                        </span></div>
                                </div>
                            </div>
                            {/* <div className='delete' onClick={() => deleteProduct(product)}> */}
                            <div className='delete' onClick={() => { setStatusModalDelete(true); setCheckProduct(product) }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id="Vector" d="M16 9V19H8V9H16ZM14.5 3H9.5L8.5 4H5V6H19V4H15.5L14.5 3ZM18 7H6V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7Z" fill="#999999" />
                                </svg>
                            </div>
                        </div>
                    )) : <img src='/img/empty.png' className='empty_basket_img' alt="#" />}
                </div>
                <div className='basket_right'>
                    <h3>Условия доставки и оплаты</h3>
                    <p>Представленные предложения ввиду своего комплексного характера сочетают в себе выгоду при затратах времени и средств и полноту реализации выбранного вами уровня усовершенствования.Представленные предложения ввиду своего комплексного характера сочетают в себе выгоду при затратах времени и средств и </p>
                    {products.length > 0 ? <h3>Итого: <span className='main_color'>{totalAmount}</span>₽</h3> : null}
                    <NavLink to={`/make_order`}><button>Оформить заказ</button></NavLink>
                </div>
            </section>
            <FormAnswerQuestions />
        </>
    )
}
