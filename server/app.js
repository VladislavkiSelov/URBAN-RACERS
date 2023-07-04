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

app.get('/api/category/:categoryId', (request, response) => {
    const categoryId = request.params.categoryId;
    const result = productCategories.find((item) => item.category === categoryId);
    const dataResponse = JSON.stringify(result.products);
    response.send(dataResponse)
});

app.get('/api/category/:categoryId/product/:productId', (request, response) => {
    const categoryId = request.params.categoryId;
    const productId = request.params.productId;
    const resultArray = productCategories.find((item) => item.name === categoryId);
    const resultId = resultArray.products.find((item) => productId == item.id)
    const dataResponse = JSON.stringify(resultId);
    response.send(dataResponse)
});

app.post('/api/dataOrders', (request, response) => {
    console.log(request.body);
    response.send('ok');
})