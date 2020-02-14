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

// Import Address Book Route
const addressBookRoutes = require('../controllers/addressBookController');

// Address Book Routes 
router.route('/addressbook')
        .get(addressBookRoutes.getaddresses);

// Export API Routes
module.exports = router;