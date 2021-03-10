import express from 'express';
const routes = express.Router();

import routes_v1 from './v1/routes';

routes.use('/api/v1', routes_v1);

routes.get('*', (req, res) => {
    res.boom.notFound('not found');
})

export default routes;