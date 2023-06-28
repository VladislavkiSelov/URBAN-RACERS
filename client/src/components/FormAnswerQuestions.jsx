import React from 'react'

export default function FormAnswerQuestions() {
    return (
        <div className='form_answer_questions container'>
            <h2>Мы готовы ответить на все ваши вопросы!</h2>
            <form className='answer_questions'>
                <label>Email<input type="email" placeholder='example@email.com' /><span className='error_box'></span></label>
                <label>Телефон<input type="text" placeholder='+(380)068-64-92-018' /><span className='error_box'></span></label>
                <p><button>Задать вопрос</button></p>
            </form>
        </div>
    )
}
