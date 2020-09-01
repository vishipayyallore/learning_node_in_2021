'use strict';

import { Router, Request, Response, NextFunction } from 'express';

export class AppRouter {

    public appRoutes = Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.appRoutes.get('/', this.getDefaultOutput);
    }

    private getDefaultOutput = async (request: Request, response: Response, next: NextFunction) => {

        response.status(200).json({ success: true, message: 'Welcome to Books Web API.', data: {} });

    }

}