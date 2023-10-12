import express from 'express';
const app = express(); //Servidor
import indexRoutes from './app/routes/index.routes.js';
import rutaPrincipalRoutes from './app/routes/rutaPrincipal.routes.js';
import documentosRoutes from './app/routes/documentos.routes.js';
import middlewares from './app/middleware/middleware.js';

app.use(middlewares);
app.use(indexRoutes);
app.use(rutaPrincipalRoutes);
app.use(documentosRoutes);

export default app;