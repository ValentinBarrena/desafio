import fs from 'fs';

class ProductManager {
    constructor(path) {
        this.path = path;
        this.currentId = 0;
        this.products = [];
    }

    async addProduct(product) {
        this.currentId = this.currentId + 1;
        product.id = this.currentId;
        this.products.push(product);
        const productsJSON = JSON.stringify(this.products, null, 2);
        await fs.promises.writeFile(this.path, productsJSON);
    }

    async getProducts() {
        const fileContents = await fs.promises.readFile(this.path, 'utf-8');
        const contentParse = JSON.parse(fileContents);
        return console.log(contentParse)
    }
    async getProductById(id) {
        const fileContents = await fs.promises.readFile(this.path, 'utf-8');
        const contentParse = JSON.parse(fileContents);
        const productById = contentParse.find(prod => prod.id === id)
        if (productById) {
            console.log('El producto buscado por ID es', productById)
            return productById
        } else {
            console.log('Not found')
        }

    }
    async updateProduct(id, newData) {
        const fileContents = await fs.promises.readFile(this.path, 'utf-8');
        const contentParse = JSON.parse(fileContents);
        const index = contentParse.findIndex(product => product.id === id)
        if (index !== -1) {
            console.log('Producto actualizado')
            contentParse[index] = {
                ...contentParse[index],
                ...newData
            };
            await fs.promises.writeFile(this.path, JSON.stringify(contentParse, null, 2));
        } else {
            console.log('Producto no encontrado (ID inexistente)');
        }
    }
    async deleteProduct(id) {
        const fileContents = await fs.promises.readFile(this.path, 'utf-8');
        const contentParse = JSON.parse(fileContents);
        const index = contentParse.findIndex(product => product.id === id)
        if (index !== -1) {
            contentParse.splice(index, 1);
            await fs.promises.writeFile(this.path, JSON.stringify(contentParse, null, 2));
        } else {
            console.log('Producto no encontrado (ID inexistente)');
        }
    }
}

const manager1 = new ProductManager('./products.json');
export default ProductManager

const Product1 = {
    title: 'Producto 1',
    description: 'Producto 1',
    price: 1500,
    thumbnail: 'URLimg',
    code: 145,
    stock: 560,
};

const Product2 = {
    title: 'Producto 2',
    description: 'Producto 2',
    price: 2000,
    thumbnail: 'URLimg',
    code: 146,
    stock: 600,
};

const Product3 = {
    title: 'Producto 3',
    description: 'Producto 3',
    price: 3000,
    thumbnail: 'URLimg',
    code: 147,
    stock: 478,
};


const Product4 = {
    title: 'Producto 4',
    description: 'Producto 4',
    price: 4000,
    thumbnail: 'URLimg',
    code: 148,
    stock: 500,
};

const Product5 = {
    title: 'Producto 5',
    description: 'Producto 5',
    price: 5000,
    thumbnail: 'URLimg',
    code: 149,
    stock: 500,
}

const Product6 = {
    title: 'Producto 6',
    description: 'Producto 6',
    price: 6000,
    thumbnail: 'URLimg',
    code: 150,
    stock: 500,
}

const Product7 = {
    title: 'Producto 7',
    description: 'Producto 7',
    price: 7000,
    thumbnail: 'URLimg',
    code: 151,
    stock: 500,
}

const Product8 = {
    title: 'Producto 8',
    description: 'Producto 8',
    price: 8000,
    thumbnail: 'URLimg',
    code: 152,
    stock: 500,
}

const Product9 = {
    title: 'Producto 9',
    description: 'Producto 9',
    price: 9000,
    thumbnail: 'URLimg',
    code: 153,
    stock: 500,
}

const Product10 = {
    title: 'Producto 10',
    description: 'Producto 10',
    price: 10000,
    thumbnail: 'URLimg',
    code: 154,
    stock: 500,
}

const updatedProduct = {
    title: 'Producto 2 UPDATED',
    description: 'Producto 2 UPDATED',
    price: 5000,
    thumbnail: 'URLimg',
    code: 130,
    stock: 1000,
};

// await manager1.addProduct(Product1)
// await manager1.addProduct(Product2)
// await manager1.addProduct(Product3)
// await manager1.addProduct(Product4)
// await manager1.addProduct(Product5)
// await manager1.addProduct(Product6)
// await manager1.addProduct(Product7)
// await manager1.addProduct(Product8)
// await manager1.addProduct(Product9)
// await manager1.addProduct(Product10)
// await manager1.updateProduct(2, updatedProduct)
// await manager1.deleteProduct(1)
// await manager1.deleteProduct(2)
// await manager1.getProducts()
// await manager1.getProductById(2)