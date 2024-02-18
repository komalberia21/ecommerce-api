
#Ecommerce api using Node.js 
Welcome to the E-Commerce API documentation. This Node.js backend project provides essential functionality for managing products in an e-commerce system.

## Features

- Add new product
- Fetch all products 
- update Qunatity of product
- delete product
## Tech Stack

- Node.js for effective backend
- MongoDb for storing of data

## Installation

- Clone the Repository:

- run node server.js for starting backend
    
## Feedback

Feedback
I would love to hear your feedback! If you encounter issues or have suggestions for improvements, please create an issue in the repository.

Happy Coding! 🌅✨

## API Reference

#### Add product

```http
  Post /api/ecommerce/products
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**  |
| `quantity` | `string` | **Required**  |

#### Fetch products

```http
  Get /api/ecommerce/products
```


#### delete Product

```http
  Delete /api/ecommerce/delete/${id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `ObjectId` | **Required**. Id of product to be deleted  |



#### update product
```http

  Update /api/ecommerce/products/{id}/update_quantity?number=quanity
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `ObjectId` | **Required**. Id of product to be updated |
| `quantity`      | `query` | **Required**. amount to be increased in quantity |

