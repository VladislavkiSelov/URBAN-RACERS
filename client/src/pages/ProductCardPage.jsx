import React from 'react';
import { useParams, } from 'react-router-dom';
import { useEffect, useState } from 'react';
import FormAnswerQuestions from '../components/FormAnswerQuestions';
import CommentBlock from '../components/CommentBlock';
import CardComment from '../components/CardComment';
import { FrownOutlined } from '@ant-design/icons';

export default function ProductCardPage() {
    const params = useParams();
    const [newComment, setNewComment] = useState({});
    const [product, setProduct] = useState([]);
    const [comment, setComment] = useState([]);
    const [activeBtn, setActiveBtn] = useState('Характеристики');
    const API_URL = `http://localhost:3000/api/category/${params.categoryId}/product/${params.productId}`;

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((res) => setProduct(res)
            )
    }, []);

    useEffect(() => {
        fetch(`${API_URL}/comment`)
            .then((res) => res.json())
            .then((res) => setComment(res)
            )
    }, [newComment]);

    function addProductBasket() {
        let statusСheck = true;
        const storage = JSON.parse(localStorage.getItem('products')) || [];
        storage.forEach(element => {
            if (element.id === product.id) {
                ++element.number
                localStorage.setItem('products', JSON.stringify(storage))
                return statusСheck = false;
            }
        });
        if (statusСheck === true) {
            localStorage.setItem('products', JSON.stringify([...storage, product]))
        }
    }

    function clickBtn(e) {
        Array.from(document.querySelectorAll('.box_btn>button')).forEach(item => item.classList.contains("active_btn") === true ? item.classList.remove("active_btn") : false)
        e.target.classList.add('active_btn')
        setActiveBtn(e.target.textContent);
    }

    return (
        <>
            <div className='block_product container'>
                <div className='block_product_left'>
                    <div className='box_img_product'>
                        <img src={product.img} alt="#" />
                    </div>
                    <h3>{product.name}</h3>
                    <h4>Цена: {product.price} ₽</h4>
                    <button type='button' onClick={addProductBasket}>Купить</button>
                </div>
                <div className='block_product_right'>
                    <h3>Описание</h3>
                    <p>{product.description}</p>
                    <div className='box_additional_information'>
                        <div className='box_btn' onClick={(e) => clickBtn(e)}>
                            <button className='active_btn'>Характеристики</button>
                            <button>Аналоги</button>
                            <button>Отзывы</button>
                        </div>
                        <div className='box_information'>
                            <h4>{activeBtn}</h4>
                            {activeBtn === 'Характеристики' && (product.characteristics || []).map(item => <p>{Object.keys(item).join()} : <span>{Object.values(item).join()} </span></p>)}
                            {activeBtn === 'Аналоги' && <div className='box_noData'><FrownOutlined className='noData' /></div>}
                            {activeBtn === 'Отзывы' && <CommentBlock API_URL={API_URL} setNewComment={(value) => setNewComment(value)} />}
                            {activeBtn === 'Отзывы' && comment.map(item => <CardComment item={item} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
            <FormAnswerQuestions />
        </>
    )
}
