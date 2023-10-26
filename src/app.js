import express from 'express';
import fs from 'fs'
import ProductManager from './ProductManager.js'

const PORT = 8080
const app = express();
const manager = new ProductManager('./products.json')

app.get('/products', async (req, res) => {
    const limit = parseInt(req.query.limit) || undefined;
    const fileContents = await fs.promises.readFile('./products.json', 'utf-8');
    let products = JSON.parse(fileContents)

    if (limit !== undefined) {
        products = products.slice(0, limit);
    }
    res.send({ products });
});

app.get('/products/:pid', async (req, res) => {
    const productId = parseInt(req.params.pid);
    const fileContents = await fs.promises.readFile('./products.json', 'utf-8');
    const products = JSON.parse(fileContents);
    const product = products.find((product) => product.id === productId);

    if (product) {
        res.send( product );
    } else {
        res.send({ error: 'Producto no encontrado' });
    }
})

app.listen(PORT, () => {
    console.log(`Servidor express activo en puerto ${PORT}`)
})
