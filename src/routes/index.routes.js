import { Router } from "express";
import candidatosRoutes from "./candidatos.routes.js"
const routes = Router();


routes.use("/candidatos", candidatosRoutes)

export default routes;