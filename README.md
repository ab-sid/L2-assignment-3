Library Management System:
    A simple and scalable Library Management REST API built with Node.js, Express, TypeScript, and
    MongoDB (Mongoose). It supports core library operations including managing books and borrowing, with
    validations, business logic, and aggregation summaries.

Features:
    Book CRUD operations (Create, Read, Update, Delete)
    Borrowing system with business logic enforcement
    Aggregation-based summary of borrowed books
    Schema validation and error handling
    Filtering, sorting, and limiting results
    MVC architecture with clean structure

Technology: 
    Backend: Node.js, Express.js
    Language: TypeScript
    Database: MongoDB with Mongoose

API:
Book API:
create-book:  POST /api/books
get-all-books:  GET /api/books
update-book:  PUT /api/books
delete-book:  DELETE /api/books

Borrow Book API:
borrow-a-book: POST /api/borrow
get-all-borrow-book-summery: GET /api/borrow
