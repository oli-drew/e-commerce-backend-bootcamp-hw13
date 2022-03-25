[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# E-commerce Backend

## Description

E-commerce back-end created using Node, Express, Sequelize, and MySQL. Users can create, read, update, and delete the products, categories, and tags stored in the MySQL database.

---

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Build](#build)
4. [License](#license)
5. [Contributing](#contributing)
6. [Questions](#questions)

## Installation

You can run this application locally by:

1. Clone this repository `git clone git@github.com:oli-drew/e-commerce-backend-bootcamp-hw13.git`
2. Navigate to inside the repository `cd e-commerce-backend-bootcamp-hw13/`
3. Install the required packages using `npm install`
4. Copy and rename the .env.EXAMPLE file. `cp .env.EXAMPLE .env`
5. Open the .env file and update it with your MySQL credentials.
6. Use the MySQL cli to create the database from the schema.sql file in the /db directory. `source db/schema.sql`
7. Exit the MySQL cli. `exit`
8. Seed the database by running `npm run seed`
9. Start the server by running `npm start`
10. By default, the server will be listening on port 3001.

## Usage

Once installation steps above have been completed, open an api testing application such as Postman or Insomnia.

### Reading data

- To get all product categories you must make a GET request to `http://localhost:3001/api/categories/`
- To get all products you must make a GET request to `http://localhost:3001/api/products/`
- To get all product tags you must make a GET request to `http://localhost:3001/api/tags/`

- To get a single product category you must make a GET request to `http://localhost:3001/api/categories/:ID` where :ID is the id of the category you wish to get.
- To get a single product you must make a GET request to `http://localhost:3001/api/products/:ID` where :ID is the id of the product you wish to get.
- To get a single product tag you must make a GET request to `http://localhost:3001/api/tags/:ID` where :ID is the id of the product you wish to get.

### Posting data

- To create a single product category you must make a POST request to `http://localhost:3001/api/categories/`
  - The body of the request must include a JSON object, like the example below:
    `{ tag_name: "Accessories", }`
- To create a single product you must make a POST request to `http://localhost:3001/api/products/`
  - The body of the request must include a JSON object, like the example below:
    `{ product_name: "Leather Belt", price: 20.00, stock: 3, category_id: 5, tagIds: [3, 4] }`
- To create a single product tag you must make a POST request to `http://localhost:3001/api/tags/`
  - The body of the request must include a JSON object, like the example below:
    `{ tag_name: "Belts", }`

### Updating data

- To update a single product category you must make a PUT request to `http://localhost:3001/api/categories/:ID`
  - The body of the request must include a JSON object, like the example below:
    `{ tag_name: "Men's Accessories", }`
- To update a single product you must make a PUT request to `http://localhost:3001/api/products/:ID`
  - The body of the request must include a JSON object, like the example below:
    `{ product_name: "Men's Leather Belt", price: 30.00, stock: 10, category_id: 5, tagIds: [3, 4, 5] }`
- To update a single product tag you must make a PUT request to `http://localhost:3001/api/tags/:ID`
  - The body of the request must include a JSON object, like the example below:
    `{ tag_name: "Men's Belts", }`

### Deleting data

- To delete a single product category you must make a delete request to `http://localhost:3001/api/categories/:ID` where :ID is the id of the product category you wish to delete.
- To delete a single product you must make a delete request to `http://localhost:3001/api/products/:ID` where :ID is the id of the product you wish to delete.
- To delete a single product tag you must make a delete request to `http://localhost:3001/api/tags/:ID` where :ID is the id of the product tag you wish to delete.

### Walkthrough Video

A video walkthrough of how to use this application is available here: [Video](https://drive.google.com/file/d/1-j5bQotIcCni0wdGAKZq7w4ioy1kyJdV/view?usp=sharing)

### Screenshot

![Post Request Example](./assets/e-commerce-back-end-screenshot.gif)

## Build

The following technology stack was used:

- Node.JS
- Express.JS
- Sequelize ORM
- MySQL
- Dotenv

## License

This project is licensed under MIT.

## Contributing

- Oliver Drew

## Questions

If you have any questions please contact me via [GitHub](https://github.com/oli-drew) or [Email](mailto:oli-webdev@protonmail.com)
