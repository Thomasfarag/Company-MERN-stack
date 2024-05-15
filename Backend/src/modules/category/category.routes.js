import express from 'express';
import { categoryModel } from './../../../db/models/category.model.js';

import { addService, deleteService, getAllServives, getServiceById, updateService } from './category.controller.js';
const categoryRoutes = express.Router()


categoryRoutes.post("/addService",addService);
categoryRoutes.get("/services",getAllServives);
categoryRoutes.delete("/deleteServices/:id",deleteService);
categoryRoutes.put("/updateServices/:id",updateService);
categoryRoutes.get('/service/:id', getServiceById);




export default categoryRoutes