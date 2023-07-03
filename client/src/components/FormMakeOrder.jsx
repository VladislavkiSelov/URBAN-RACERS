import React from 'react';
import { Formik, Field, Form } from 'formik';
const phoneNumberCheck = /^(\+38|8)?0[0-9]{9}$/;
const emailCheck = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
const postOfficeCheck = /^[1-9]{1,4}$/;

export default function FormMakeOrder() {
    const validate = values => {
        const errors = {};
        if (!phoneNumberCheck.test(values.phone)) {
            errors.phone = true;
        }
        if (!emailCheck.test(values.email)) {
            errors.email = true;
        }

        if (!postOfficeCheck.test(values.postOffice)) {
            errors.postOffice = true;
        }
        if (values.pay == false) {
            errors.pay = true;
        }
        return errors;

    };

    return (
        <Formik
            initialValues={
                {
                    phone: '',
                    email: '',
                    postOffice: '',
                    pay: '',

                }}

            validate={validate}

            onSubmit={value => console.log(value)}

        >
            {({ errors }) => {
                return (
                    <Form className='formMakeOrder'>
                        <h3>Email</h3>
                        <Field name="email" placeholder="example@email.com" className={errors.email === true ? "error" : ''} />
                        <h3>Телефон</h3>
                        <Field name="phone" placeholder="Телефон" className={errors.phone === true ? "error" : ''} />
                        <h3>Адрес доставки</h3>
                        <Field name="postOffice" placeholder="Отделение" className={errors.postOffice === true ? "error" : ''} />
                        <h3>Способ оплаты</h3>
                        <div>
                            <label>
                                <Field type="radio" name="pay" value="Приват банк" className={errors.pay === true ? "error" : ''} />
                                Приват банк
                            </label>
                            <label>
                                <Field type="radio" name="pay" value="Монобанк" className={errors.pay === true ? "error" : ''} />
                                Монобанк
                            </label>
                            <label>
                                <Field type="radio" name="pay" value="Ощадбанк" className={errors.pay === true ? "error" : ''} />
                                Ощадбанк
                            </label>
                        </div>
                        <button type='submit'>Отправить</button>
                    </Form>
                );
            }}
        </Formik >
    )
}










