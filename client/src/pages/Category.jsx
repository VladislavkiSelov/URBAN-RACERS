import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

export default function Category() {
    const params = useParams();
    console.log(params);

    useEffect(() => {
        fetch(`http://localhost:3000/api/category/${params.categoryId}`)
            .then((res) => res.json())
            .then((res) => console.log(res)
            )
    }, [])

    return (
        <div>

        </div>
    )
}
