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
    const [arrayManufacturerCountry, setArrayManufacturerCountry] = useState([]);
    const [carModal, setCarModal] = useState('');
    const [manufacturerCountry, setmanufacturerCountry] = useState([]);
    const [minValue, setMinValue] = useState(89);
    const [maxValue, setMaxValue] = useState(9999);

    const optionsCarModal = arrayCarModal.map(item => Object({ value: item }));
    const optionsManufacturerCountry = arrayManufacturerCountry.map(item => Object({ value: item }));

    useEffect(() => {
        fetch(`http://localhost:3000/api/category/${params.categoryId}`)
            .then((res) => res.json())
            .then((res) => setArrayProducts(res))
    }, [params]);

    useEffect(() => {
        fetch(`http://localhost:3000/api/getCarModal/category/${params.categoryId}`)
            .then((res) => res.json())
            .then((res) => setArrayCarModal(res))
    }, [params]);

    useEffect(() => {
        fetch(`http://localhost:3000/api/manufacturerCountry/category/${params.categoryId}`)
            .then((res) => res.json())
            .then((res) => setArrayManufacturerCountry(res))
    }, [params]);

    function getRangePrice({ min, max }) {
        setMinValue(min)
        setMaxValue(max)
    }

    const onChangeModal = (value) => {
        setCarModal(value)
    };

    const onChangeManufacturerCountry = (value) => {
        setmanufacturerCountry(value)
    };

    function applyFilter() {
        const filter = {
            car_model: carModal,
            price: [minValue, maxValue],
            manufacturer_country: manufacturerCountry,
        }

        fetch(`http://localhost:3000/api/category/filter/${params.categoryId}`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(filter),
        })
            .then((res) => res.json())
            .then((res) => setArrayProducts(res))
    }

    return (
        <section className='wraper_products'>
            <div className='box_products container'>
                <div className='box_filters'>
                    <h3>Фильтр</h3>
                    <div className='box_slider_price'>
                        <h4>Цена</h4>
                        <Slider
                            range={true}
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
                    </div>
                    <div className='box_select_model_auto'>
                        <h4>Модель авто</h4>
                        <Select
                            showSearch
                            placeholder="Модель авто"
                            optionFilterProp="children"
                            onChange={onChangeModal}
                            filterOption={(input, option) =>
                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                            options={optionsCarModal}
                        />
                    </div>
                    <div className='box_select_manufacturer_country'>
                        <h4>Страна производитель</h4>
                        <Select
                            showSearch
                            placeholder="Страна производитель"
                            optionFilterProp="children"
                            onChange={onChangeManufacturerCountry}
                            filterOption={(input, option) =>
                                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                            }
                            options={optionsManufacturerCountry}
                        />
                    </div>
                    <button onClick={applyFilter}>Применить</button>
                </div>
                <div className='products'>
                    {arrayProducts.map((product) => <CardProductSmall product={product} />)}
                </div>
            </div>
            <AdvertisingPromotions />
        </section>
    )
}



