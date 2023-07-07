import React from 'react'

export default function DeletionСonfirmation({ product, deleteProduct, setStatusModalDelete }) {
    function clickDelete() {
        deleteProduct(product)
    }
    return (
        <div className='box_delete_modal' onClick={() => setStatusModalDelete(false)}>
            <div className='box_window_delete' onClick={(e) => e.stopPropagation()}>
                <h2>Вы действительно хотите удалить товар из корзины?</h2>
                <div className='box_btn'>
                    <button onClick={() => clickDelete()}>Да</button>
                    <button onClick={() => setStatusModalDelete(false)}>Нет</button>
                </div>
            </div>
        </div>
    )
}
