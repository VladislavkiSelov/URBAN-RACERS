import React from 'react';
import { useForm } from "react-hook-form";

export default function Registration() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ mode: 'onSubmit' });
    const validatePassword = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;
    const validateEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    const onSubmit = data => {
        console.log(data);
        reset()
    }
    return (
        <div className='container'>
            <div>
                <h2>Регистрация</h2>
                <h4>Введите контакнтные данные и пароль для создания учетной записи</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className='box_input'>
                        Email
                        <input className={errors?.email && 'error'} {...register("email", { required: true, pattern: validateEmail })} placeholder='Введите адрес электронной почты' />
                    </label>
                    <label className='box_input'>
                        Телефон
                        <input className={errors?.password && 'password'} {...register("password", { required: true, pattern: validatePassword })} placeholder='888 888 88 88' />
                    </label>
                    <label className='box_input'>
                        Пароль
                        <input className={errors?.password && 'password'} {...register("password", { required: true, pattern: validatePassword })} placeholder='Введите пароль' />
                    </label>
                </form>
            </div>
        </div>
    )
}
