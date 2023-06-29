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