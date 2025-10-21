# Product Management CRUD API

A robust RESTful API built with Node.js, Express.js, and MongoDB for managing product data. This API provides full CRUD (Create, Read, Update, Delete) operations for products with proper error handling and validation.

## 🚀 Features

- **Full CRUD Operations**: Create, read, update, and delete products
- **MongoDB Integration**: Uses Mongoose ODM for database operations
- **RESTful API Design**: Follows REST conventions for clean and intuitive endpoints
- **Error Handling**: Comprehensive error handling with appropriate HTTP status codes
- **Data Validation**: Built-in validation using Mongoose schemas
- **Timestamps**: Automatic creation and update timestamps
- **Modular Architecture**: Clean separation of concerns with controllers, models, and routes

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (local or MongoDB Atlas)
- npm or yarn package manager

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd crud-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   - Update the MongoDB connection string in `index.js` with your database credentials
   - Replace the connection string with your own MongoDB Atlas or local MongoDB URL

4. **Start the server**
   ```bash
   # Development mode with auto-restart
   npm run dev
   
   # Production mode
   npm run serve
   ```

The server will start on `http://localhost:3000`

## 📚 API Endpoints

### Base URL
```
http://localhost:3000/api/products
```

### Endpoints

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| GET | `/api/products` | Get all products | - |
| GET | `/api/products/:id` | Get a single product by ID | - |
| POST | `/api/products` | Create a new product | Product object |
| PUT | `/api/products/:id` | Update a product by ID | Product object |
| DELETE | `/api/products/:id` | Delete a product by ID | - |

### Product Schema

```json
{
  "name": "string (required)",
  "quantity": "number (required, default: 0)",
  "price": "number (required)",
  "image": "string (optional)"
}
```

## 📖 API Usage Examples

### Create a Product
```bash
POST /api/products
Content-Type: application/json

{
  "name": "Laptop",
  "quantity": 10,
  "price": 999.99,
  "image": "https://example.com/laptop.jpg"
}
```

### Get All Products
```bash
GET /api/products
```

### Get Single Product
```bash
GET /api/products/60f7b3b3b3b3b3b3b3b3b3b3
```

### Update a Product
```bash
PUT /api/products/60f7b3b3b3b3b3b3b3b3b3b3
Content-Type: application/json

{
  "name": "Updated Laptop",
  "quantity": 15,
  "price": 1099.99
}
```

### Delete a Product
```bash
DELETE /api/products/60f7b3b3b3b3b3b3b3b3b3b3
```

## 🧪 Testing with Insomnia

This API is fully tested and compatible with Insomnia. Here's how to set up your Insomnia workspace:

### Insomnia Collection Setup

1. **Create a new workspace** in Insomnia
2. **Set base URL**: `http://localhost:3000`
3. **Create the following requests**:

#### 1. Get All Products
- **Method**: GET
- **URL**: `http://localhost:3000/api/products`
- **Headers**: None required

#### 2. Create Product
- **Method**: POST
- **URL**: `http://localhost:3000/api/products`
- **Headers**: 
  ```
  Content-Type: application/json
  ```
- **Body** (JSON):
  ```json
  {
    "name": "MacBook Pro",
    "quantity": 5,
    "price": 1999.99,
    "image": "https://example.com/macbook.jpg"
  }
  ```

#### 3. Get Single Product
- **Method**: GET
- **URL**: `http://localhost:3000/api/products/{product_id}`
- **Headers**: None required
- **Note**: Replace `{product_id}` with actual product ID from create response

#### 4. Update Product
- **Method**: PUT
- **URL**: `http://localhost:3000/api/products/{product_id}`
- **Headers**: 
  ```
  Content-Type: application/json
  ```
- **Body** (JSON):
  ```json
  {
    "name": "MacBook Pro Updated",
    "quantity": 8,
    "price": 1899.99
  }
  ```

#### 5. Delete Product
- **Method**: DELETE
- **URL**: `http://localhost:3000/api/products/{product_id}`
- **Headers**: None required

### Testing Workflow in Insomnia

1. **Start your server**: `npm run dev`
2. **Test Create**: Create a new product and copy the `_id` from response
3. **Test Read All**: Verify your product appears in the list
4. **Test Read Single**: Use the copied `_id` to fetch the specific product
5. **Test Update**: Modify the product using the same `_id`
6. **Test Delete**: Remove the product using the same `_id`

### Expected Response Formats

#### Success Response (Create/Update/Get)
```json
{
  "_id": "60f7b3b3b3b3b3b3b3b3b3b3",
  "name": "MacBook Pro",
  "quantity": 5,
  "price": 1999.99,
  "image": "https://example.com/macbook.jpg",
  "createdAt": "2023-01-01T00:00:00.000Z",
  "updatedAt": "2023-01-01T00:00:00.000Z"
}
```

#### Success Response (Delete)
```json
{
  "message": "Product deleted successfully"
}
```

#### Error Response
```json
{
  "message": "Error description"
}
```

## 🏗️ Project Structure

```
crud-app/
├── controllers/
│   └── product.controller.js    # Product business logic
├── models/
│   └── product.model.js         # Product data model
├── routes/
│   └── product.route.js         # Product routes
├── index.js                     # Application entry point
├── package.json                 # Dependencies and scripts
└── README.md                    # Project documentation
```

## 🔧 Technologies Used

- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling tool
- **Nodemon** - Development dependency for auto-restart

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open Insomnia** and import or create the requests as described above

4. **Test the API** following the testing workflow

## 🚀 Deployment

For production deployment:

1. Set up environment variables for database connection
2. Use a process manager like PM2
3. Configure proper logging and monitoring
4. Set up SSL/HTTPS
5. Configure CORS if needed for frontend integration




**Note**: Remember to replace the MongoDB connection string with your own credentials and update the author information as needed.
