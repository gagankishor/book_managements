# Book Management System

A Book Management System built with Node.js, Express, and MySQL. The system provides RESTful APIs to perform CRUD operations on books, includes a file upload feature for book cover images, and implements user authentication using JWT (JSON Web Token).

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Database Setup](#database-setup)
- [Running the Project](#running-the-project)

## Features

- User registration and login with JWT authentication
- Create, read, update, and delete books
- File upload feature for book cover images
- MySQL database for storing book and user information
- Well-structured and normalized database schema
- Proper error handling for all API endpoints

## Prerequisites

- Node.js (>= 14.x)
- MySQL (>= 5.7)
- npm (>= 6.x)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/book-management-system.git
    cd book-management-system
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

## Environment Variables

Create a `.env` file in the root of the project and add the following environment variables:

```env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=book_management
JWT_SECRET=your_jwt_secret

# Database Setup
## Create the database:

CREATE DATABASE book_management;

    Run the following command to create the necessary tables:
    npx sequelize-cli db:migrate

## Running the Project
Start the server:
    ```bash
    npm start
    ```
