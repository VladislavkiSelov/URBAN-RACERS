import React from 'react'
import { useParams, } from 'react-router-dom';
import { useEffect, useState } from 'react';
import FormAnswerQuestions from '../components/FormAnswerQuestions'



export default function ProductCardPage() {

    const params = useParams();

    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/api/category/${params.categoryId}/product/${params.productId}`)
            .then((res) => res.json())
            .then((res) => setProduct(res)
            )
    }, []);

    return (
        <>
            <div className='block_product container'>
                <div className='block_product_left'>
                    <div className='box_img_product'>
                        <img src={product.img} alt="" />
                    </div>
                    <h3>{product.name}</h3>
                    <h4>Цена: {product.price} ₽</h4>
                    <button>Купить</button>
                </div>
                <div className='block_product_right'>
                    <h3>Описание</h3>
                    <p>{product.description}</p>
                    <div className='box_additional_information'>
                        <div className='box_btn'>
                            <button className='active_btn'>Характеристики</button>
                            <button>Аналоги</button>
                            <button>Отзывы</button>
                        </div>
                        <div className='box_information'>
                            <h4>Характеристики</h4>
                            {(product.characteristics || []).map(item => <p>{Object.keys(item).join()} : <span>{Object.values(item).join()} </span></p>)}
                        </div>
                    </div>
                </div>
            </div>
            <FormAnswerQuestions />
        </>
    )
}
