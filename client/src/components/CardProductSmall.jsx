import React from 'react';
import { NavLink } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';


export default function CardProductSmall({ product }) {
    const params = useParams();
    const navigate = useNavigate();
    function addProductBasket(product) {
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

    return (
        <div className='box_product'>
            <div className='box_img' onClick={() => navigate(`/category/${params.categoryId}/product/${product.id}`)}><img src={product.img} alt="#" /></div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className='box_price'>
                <h4>₽ {product.price}</h4>
                <div className="icon_basket" onClick={() => addProductBasket(product)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="Vector" d="M11 9H13V6H16V4H13V1H11V4H8V6H11V9ZM7 18C5.9 18 5.01 18.9 5.01 20C5.01 21.1 5.9 22 7 22C8.1 22 9 21.1 9 20C9 18.9 8.1 18 7 18ZM17 18C15.9 18 15.01 18.9 15.01 20C15.01 21.1 15.9 22 17 22C18.1 22 19 21.1 19 20C19 18.9 18.1 18 17 18ZM8.1 13H15.55C16.3 13 16.96 12.59 17.3 11.97L21.16 4.96L19.42 4L15.55 11H8.53L4.27 2H1V4H3L6.6 11.59L5.25 14.03C4.52 15.37 5.48 17 7 17H19V15H7L8.1 13Z" fill="#F05454" />
                    </svg>
                </div>
            </div>
        </div>
    )
}
