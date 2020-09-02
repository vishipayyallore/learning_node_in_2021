'use strict';

import { Router, Request, Response, NextFunction } from 'express';

import { BooksController } from '../controllers/books.Controller';

export class BooksRouter {

    private booksController = new BooksController();
    
    public bookRoutes = Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.bookRoutes.get('/books', this.getAllBooks);
        this.bookRoutes.post('/books', this.addABook);
    }

    private getAllBooks = async (request: Request, response: Response, next: NextFunction) => {
        return this.booksController.getAllBooks(request, response, next);
    }

    private addABook = async (request: Request, response: Response, next: NextFunction) => {

        console.log(request.body);

        response.status(200).json({ success: true, message: 'Given Book successfully added to Mongo Db.', data: {} });
    }

}