import testRoutes from './testRoutes.js';
const setupRoutes = (app) => {
    app.use('/', testRoutes);
};
export default setupRoutes;
