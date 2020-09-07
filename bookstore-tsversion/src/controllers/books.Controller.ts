'use strict';

import { Request, Response, NextFunction } from 'express';

import { IBook } from '../interfaces/IBook';
import { bookModel } from '../models/book.Model';

export class BooksController {

    private _books = bookModel;

    // TODO: Delete this once we retrieve data from Mongo Db
    private books: IBook[] = [
        {
            author: 'Shiva',
            dateOfPublish: new Date(),
            language: 'C#',
            read: false,
            title: 'New Title'
        },
        {
            author: 'Shiva',
            dateOfPublish: new Date(),
            language: 'C#',
            read: true,
            title: 'New Title 2'
        }
    ];

    constructor() {
    }

    getAllBooks = async (request: Request, response: Response, next: NextFunction) => {

        console.log(`Request Received for retrieving all Books.`);

        try {
            const allBooks = await this._books.find({});

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

        /*
        response
            .status(200)
            .json({ success: true, message: 'All Books from Mongo Db.', data: this.books });
        */

    }

    addABook = async (request: Request, response: Response, next: NextFunction) => {

        console.log(`Request Received for inserting new Book. Data: ${JSON.stringify(request.body)}`);

        response
            .status(200)
            .json({ success: true, message: 'Given Book successfully added to Mongo Db.', data: this.books[1] });
    }

}