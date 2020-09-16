'use strict';

import { Router, Request, Response, NextFunction } from 'express';

import { ApplicationLogger } from '../Utilities/application.Logger';
import { BooksController } from '../controllers/books.Controller';

export class BooksRouter {

    private APIPATH = '/books';
    private APIPATHFORFIND = '/books/:bookId';
    // TODO: Move this to Dependency Injection
    private applicationLogger: ApplicationLogger = new ApplicationLogger();
    private booksController = new BooksController();

    public bookRoutes = Router();

    constructor() {

        this.initializeRoutes();
    }

    private initializeRoutes() {

        // Middleware to find the Book By Id
        this.bookRoutes.use(this.APIPATHFORFIND, this.findBookById);

        this.bookRoutes
            .get(this.APIPATH, this.getAllBooks)
            .post(this.APIPATH, this.addABook);

        this.bookRoutes
            .get(this.APIPATHFORFIND, this.getBookById);
    }

    // Method for Middleware
    private findBookById = async (request: Request, response: Response, next: NextFunction) => {

        this.applicationLogger.logMessageInYellow(`BooksRouter::findBookById() ==== Using Middleware for finding Book. ${request.params.bookId}`);

        return this.booksController
            .findBookById(request, response, next);
    }

    // End Point Methods
    private addABook = async (request: Request, response: Response, next: NextFunction) => {

        return this.booksController
            .addABook(request, response, next);
    }

    private getAllBooks = async (request: Request, response: Response, next: NextFunction) => {

        return this.booksController
            .getAllBooks(request, response, next);
    }

    private getBookById = async (request: Request, response: Response, next: NextFunction) => {

        this.applicationLogger.logMessageInYellow(`BooksRouter::getBookById() ==== Getting book by Id. ${request.params.bookId}`);

        return this.booksController
            .getBookById(request, response, next);
    }

}