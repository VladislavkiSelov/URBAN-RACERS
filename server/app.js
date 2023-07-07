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

function searchValue(value, valueFilter) {
    let arrayElement = [];
    function searchRecursion(value, valueFilter) {
        if (Array.isArray(value) === true) {
            value.forEach(item => {
                searchRecursion(item, valueFilter)
            })
        }
        if (Array.isArray(value) !== true && typeof value === 'object') {
            for (let key in value) {
                if (key === valueFilter) {
                    value[key].forEach(element => {
                        arrayElement.push(element)
                    })
                } else {
                    searchRecursion(value[key], valueFilter)
                }
            }
        }
    }
    searchRecursion(value, valueFilter)
    return arrayElement
};

function FilterModel(body, resultFindCategories) {
    return resultFindCategories.products.filter(item => {
        for (let element of item.car_model) {
            if (element === body.car_model || body.car_model.length <= 0) {
                return item
            }
        }
    })
}

function filterPrice(body, resFilterModel) {
    return resFilterModel.filter(item => body.price[0] <= item.price && item.price <= body.price[1])
}

function FilterManufacturerCountry(body, resFilterPrice) {
    return resFilterPrice.filter(item => {
        for (let element of item.manufacturer_country) {
            if (element === body.manufacturer_country || body.manufacturer_country.length <= 0) {
                return item
            }
        }
    })
}

function filterElement(body, resultFindCategories, FilterModel, filterPrice) {
    const resFilterModel = FilterModel(body, resultFindCategories)
    const resFilterPrice = filterPrice(body, resFilterModel);
    console.log(resFilterModel);
    const resFilterManufacturerCountry = FilterManufacturerCountry(body, resFilterPrice)
    return resFilterManufacturerCountry
}

app.get('/api/category', (request, response) => {
    const dataResponse = JSON.stringify(productCategories);
    response.send(dataResponse)
});

app.get('/api/getCarModal/category/:categoryId', (request, response) => {
    const categoryId = request.params.categoryId;
    const result = productCategories.find((item) => item.category === categoryId);
    const resultSeach = searchValue(result, 'car_model')
    const setResultSeach = new Set(resultSeach);
    const dataResponse = JSON.stringify([...setResultSeach]);
    response.send(dataResponse);
});

app.get('/api/manufacturerCountry/category/:categoryId', (request, response) => {
    const categoryId = request.params.categoryId;
    const result = productCategories.find((item) => item.category === categoryId);
    const resultSeach = searchValue(result, 'manufacturer_country')
    const setResultSeach = new Set(resultSeach);
    const dataResponse = JSON.stringify([...setResultSeach]);
    response.send(dataResponse);
});

app.get('/api/category/:categoryId', (request, response) => {
    const categoryId = request.params.categoryId;
    const result = productCategories.find((item) => item.category === categoryId);
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

app.post('/api/category/filter/:categoryId', (request, response) => {
    const categoryId = request.params.categoryId;
    const resultFindCategories = productCategories.find((item) => item.category === categoryId);
    const body = request.body;
    const result = filterElement(body, resultFindCategories, FilterModel, filterPrice)
    const dataResponse = JSON.stringify(result);
    response.send(dataResponse)
});

































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







