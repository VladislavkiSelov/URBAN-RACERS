import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import CardProductSmall from '../components/CardProductSmall';
import AdvertisingPromotions from '../components/AdvertisingPromotions';
import { Slider, Select } from 'antd';



export default function CategoryPage() {
    const params = useParams();
    const [arrayProducts, setArrayProducts] = useState([]);
    const [arrayCarModal, setArrayCarModal] = useState([]);
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(9999);

    useEffect(() => {
        fetch(`http://localhost:3000/api/category/${params.categoryId}`)
            .then((res) => res.json())
            .then((res) => setArrayProducts(res)
            )
    }, [params]);

    useEffect(() => {
        fetch(`http://localhost:3000/api/getCarModal`)
            .then((res) => res.json())
            .then((res) => setArrayCarModal(res)
            )
    }, [params]);

    function getRangePrice({ min, max }) {
        setMinValue(min)
        setMaxValue(max)
    }
    const optionsCarModal = arrayCarModal.map(item => Object({ value: item }));

    const onChange = (value) => {
        console.log(`selected ${value}`);
    };

    return (
        <section className='wraper_products'>
            <div className='box_products container'>
                <div className='box_filters'>
                    <h3>Фильтр</h3>
                    <h4>Цена</h4>
                    {
                        useEffect(() => {
                            fetch(`http://localhost:3000/api/category/${params.categoryId}`)
                                .then((res) => res.json())
                                .then((res) => setArrayProducts(res)
                                )
                        }, [minValue])
                    }
                    <Slider
                        range={
                            true
                        }
                        max={9999}
                        min={0}
                        defaultValue={[0, 10000]}
                        onChange={(value) => getRangePrice({ min: value[0], max: value[1] })}
                        step={10}
                        value={[minValue, maxValue]}
                    />
                    <div className='box_input_range'>
                        <label>
                            ₽<input type="number" className='input_range_min' value={minValue} onChange={(e) => setMinValue(e.target.value)} />
                        </label>
                        <label>
                            ₽<input type="number" className='input_range_max' value={maxValue} onChange={(e) => setMaxValue(e.target.value)} />
                        </label>
                    </div>
                    <div>
                        <h4>Отфильтровать по моему авто</h4>
                        <Select
                            showSearch
                            placeholder="Select a person"
                            optionFilterProp="children"
                            onChange={onChange}
                            filterOption={(input, option) =>
                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                            options={optionsCarModal}
                        />
                    </div>
                </div>
                <div className='products'>
                    {arrayProducts.map((product) => <CardProductSmall product={product} />)}
                </div>
            </div>
            <AdvertisingPromotions />
        </section>
    )
}



