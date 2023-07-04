import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import CardProductSmall from '../components/CardProductSmall';
import AdvertisingPromotions from '../components/AdvertisingPromotions';

export default function CategoryPage() {
    const params = useParams();
    const [arrayProducts, setArrayProducts] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/api/category/${params.categoryId}`)
            .then((res) => res.json())
            .then((res) => setArrayProducts(res)
            )
    }, [params])

    return (
        <section className='wraper_products'>
            <div className='container box_products'>
                {arrayProducts.map((product) => <CardProductSmall product={product} />)}
            </div>
            <AdvertisingPromotions />
        </section>
    )
}
