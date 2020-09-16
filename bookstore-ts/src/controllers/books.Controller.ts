'use strict';

import { Request, Response, NextFunction } from 'express';

import { bookModel } from '../models/book.Model';
import { IBook } from '../interfaces/IBook';

export class BooksController {

    private Book = bookModel;

    constructor() {
    }

    getAllBooks = async (request: Request, response: Response, next: NextFunction) => {

        console.log(`Request Received for retrieving all Books.`);

        try {
            const allBooks = await this.Book.find({});

            if (allBooks && allBooks.length > 0) {

                return response
                    .status(200)
                    .json(allBooks);
            } else {

                return response
                    .status(404)
                    .json([]);
            }

        } catch (error) {

            return response
                .status(500)
                .json(error);
        }

    }

    addABook = async (request: Request, response: Response, next: NextFunction) => {

        try {

            const bookData: IBook = request.body;
            console.log(`Request Received for inserting new Book. Data: ${JSON.stringify(bookData)}`);

            // Verify if book's title with same author already exists.
            const similarBookExist = await this.Book.findOne({
                author: bookData.author,
                title: bookData.title,
                language: bookData.language
            });

            if (similarBookExist) {
                console.log(`Does Similar Book Exists: ${similarBookExist}`);
                return response.status(400).json(`Book with "${bookData.title}" title exists from "${bookData.author}" author.`);
            }

            const newBook = await (this.Book.create(bookData))

            console.log(`Sending Output: ${JSON.stringify(newBook)}`);
            return response.status(201).json(newBook);

        } catch (error) {

            return response.status(500).json(error);
        }
    }

    findBookById = async (request: Request, response: Response, next: NextFunction) => {

        this.Book.findById(request.params.bookId, (error: Error, book: IBook) => {

            if (error) {

                return response
                    .status(500)
                    .json(`BooksController::findBookById() ==== Error while retrieving the book. Message: ${error}`);
            }

            if (book) {

                // console.log(`Book Found: ${book}`);
                request.body = book;
                return next();
            }

            return response
                .status(404)
                .json();
        });
    }

    getBookById = async (request: Request, response: Response, next: NextFunction) => {

        return response
            .status(200)
            .json(request.body);
    }

}