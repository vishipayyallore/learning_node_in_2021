'use strict';

import { Request, Response, NextFunction } from 'express';

import { IBook } from '../interfaces/IBook';

export class BooksController {

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
        response.status(200).json({ success: true, message: 'All Books from Mongo Db.', data: this.books });
    }

    addABook = async (request: Request, response: Response, next: NextFunction) => {
        console.log(request.body);

        response.status(200).json({ success: true, message: 'Given Book successfully added to Mongo Db.', data: this.books[1] });
    }

}