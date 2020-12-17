'use strict';

const mongoose = require('mongoose');

export class MongoDbHelper {

    constructor() {
    }

    public connectToMongoDb = async () => {

        await mongoose.connect(process.env.MongoDbConnection, {

            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    }

}
