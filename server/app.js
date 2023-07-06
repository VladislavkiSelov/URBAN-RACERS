// import express from 'express';
// import cors from 'cors';
// import bodyParser from 'body-parser';
// import { productCategories } from './data.js';


// const PORT = 3000;

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.listen(PORT, function () {
//     console.log('we started server on ' + PORT);
// });

// app.get('/api/category', (request, response) => {
//     const dataResponse = JSON.stringify(productCategories);
//     response.send(dataResponse)
// });

// app.get('/api/getCarModal', (request, response) => {
//     let arrayCarModal = [];
//     function searchCarModal(value) {
//         if (Array.isArray(value) === true) {
//             value.forEach(item => {
//                 searchCarModal(item)
//             })
//         }
//         if (Array.isArray(value) !== true && typeof value === 'object') {
//             for (let key in value) {
//                 if (key === 'car_model') {
//                     value[key].forEach(element => {
//                         arrayCarModal.push(element)
//                     })
//                 } else {
//                     searchCarModal(value[key])
//                 }
//             }
//         }
//     }
//     searchCarModal(productCategories);
//     const setArrayCarModal = new Set(arrayCarModal);
//     const dataResponse = JSON.stringify([...setArrayCarModal]);
//     response.send(dataResponse);
// });

// app.get('/api/category/:categoryId', (request, response) => {
//     const categoryId = request.params.categoryId;
//     const result = productCategories.find((item) => item.category === categoryId);
//     console.log(result);
//     const dataResponse = JSON.stringify(result.products);
//     response.send(dataResponse)
// });

// app.get('/api/category/:categoryId/product/:productId', (request, response) => {
//     const categoryId = request.params.categoryId;
//     const productId = request.params.productId;
//     const resultArray = productCategories.find((item) => item.category === categoryId);
//     const resultId = resultArray.products.find((item) => productId == item.id)
//     const dataResponse = JSON.stringify(resultId);
//     response.send(dataResponse)
// });

// app.post('/api/dataOrders', (request, response) => {
//     console.log(request.body);
//     response.send('ok');
// })








import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { productCategories } from './data.js';


const PORT = 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(PORT, function () {
    console.log('we started server on ' + PORT);
});

app.get('/api/category', (request, response) => {
    const dataResponse = JSON.stringify(productCategories);
    response.send(dataResponse)
});

app.get('/api/getCarModal/category/:categoryId', (request, response) => {
    let arrayCarModal = [];
    const categoryId = request.params.categoryId;
    const result = productCategories.find((item) => item.category === categoryId);
    function searchCarModal(value) {
        if (Array.isArray(value) === true) {
            value.forEach(item => {
                searchCarModal(item)
            })
        }
        if (Array.isArray(value) !== true && typeof value === 'object') {
            for (let key in value) {
                if (key === 'car_model') {
                    value[key].forEach(element => {
                        arrayCarModal.push(element)
                    })
                } else {
                    searchCarModal(value[key])
                }
            }
        }
    }
    searchCarModal(result);
    const setArrayCarModal = new Set(arrayCarModal);
    const dataResponse = JSON.stringify([...setArrayCarModal]);
    response.send(dataResponse);
});

app.get('/api/category/:categoryId', (request, response) => {
    const categoryId = request.params.categoryId;
    const result = productCategories.find((item) => item.category === categoryId);
    console.log(result);
    const dataResponse = JSON.stringify(result.products);
    response.send(dataResponse)
});

app.get('/api/category/:categoryId/product/:productId', (request, response) => {
    const categoryId = request.params.categoryId;
    const productId = request.params.productId;
    const resultArray = productCategories.find((item) => item.category === categoryId);
    const resultId = resultArray.products.find((item) => productId == item.id)
    const dataResponse = JSON.stringify(resultId);
    response.send(dataResponse)
});

app.post('/api/dataOrders', (request, response) => {
    console.log(request.body);
    response.send('ok');
})