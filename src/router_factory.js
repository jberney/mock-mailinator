const {Router} = require('express');

const MockMailinator = require('./mock_mailinator');

module.exports = {
    newRouter(state) {
        const router = new Router();
        router.get('/email', MockMailinator.getEmail(state));
        router.get('/inbox', MockMailinator.getInbox(state));
        return router;
    }
};