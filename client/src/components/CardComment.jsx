import React from 'react';
import { UserOutlined } from '@ant-design/icons';

export default function CardComment({ item }) {
    return (
        <div className='card_comment'>
            <div className='header_card_comment'>
                <UserOutlined />
                <div>
                    <h5>{item.name}</h5>
                    <p>Отзыв от покупателя</p>
                </div>
            </div>
            <p>{item.comment}</p>
        </div>
    )
}
