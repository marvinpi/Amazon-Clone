import express from 'express';
import data from './data';


const app = express();

app.get("/api/products", (req, res) => {
    res.send(data.products);
});

app.listen(5500, () => {console.log("Server started at https://localhost:5500")});