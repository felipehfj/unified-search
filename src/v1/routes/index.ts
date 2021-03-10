import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import DocumentTagController from '../controllers/DocumentTagController';


const routes: Router = Router();

const validate = {
  document: {
    create: celebrate({
      [Segments.BODY]: Joi.object().keys({
        documentId: Joi.number().required(),
        tags:Joi.array().min(1).required(),
      })
    }),    
  },
}

routes.post('/documents', validate.document.create, DocumentTagController.create);


export default routes;