'use strict';

const router = require('express').Router();

// Setting Default API Response
router.get('/', (request, response) => {
    response.status(200)
        .json({
            name: 'Node Web API',
            description: 'Default Routes'
        });
});


// Export API Routes
module.exports = router;