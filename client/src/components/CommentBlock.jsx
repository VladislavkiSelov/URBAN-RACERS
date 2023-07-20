import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import axios from "axios";
const nameCheck = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;

export default function CommentBlock({ API_URL }) {
    const validate = values => {
        const errors = {};
        if (!nameCheck.test(values.name)) {
            errors.name = 'Некорректное имя пользователя';
        }
        return errors;
    };

    return (
        <Formik
            initialValues={
                {
                    name: '',
                    comment: '',
                }}

            validate={validate}

            onSubmit={values => {
                const newComment = {
                    name: values.name,
                    comment: values.comment
                };
                axios.post(`${API_URL}`, newComment);
            }
            }

        >
            {({ errors }) => {
                return (
                    <Form className='form_comment'>
                        <label>
                            Ваше имя и фамилия
                            <Field name="name" />
                        </label>
                        <p>{errors.name ? <span>{errors.name}</span> : null}</p>
                        <label>
                            Комментарий
                            <Field name="comment" as="textarea">
                                <textarea> </textarea>
                            </Field>
                        </label>
                        <button type='submit'>Отправить</button>
                    </Form>
                );
            }}
        </Formik >

    )
}
