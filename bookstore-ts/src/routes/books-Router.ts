'use strict';

import { Router, Request, Response, NextFunction } from 'express';

import { BooksController } from '../controllers/books.Controller';

export class BooksRouter {

    private booksController = new BooksController();
    private APIPATH = '/books';

    public bookRoutes = Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {

        // TODO: Get the Book and return it.
        // this.bookRoutes.use();

        this.bookRoutes.get(this.APIPATH, this.getAllBooks);
        this.bookRoutes.post(this.APIPATH, this.addABook);
    }

    private getAllBooks = async (request: Request, response: Response, next: NextFunction) => {

        return this.booksController
            .getAllBooks(request, response, next);
    }

    private addABook = async (request: Request, response: Response, next: NextFunction) => {
        
        return this.booksController
            .addABook(request, response, next);
    }

}