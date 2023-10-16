import { Application } from "express";
import testRoutes from './testRoutes.js'

const setupRoutes = (app: Application) => {
    app.use('/', testRoutes);
}

export default setupRoutes;