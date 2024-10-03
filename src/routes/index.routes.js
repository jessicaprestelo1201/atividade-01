import { Router } from "express";
import candidatosRoutes from "./candidatos.routes.js"
const routes = Router();

routes.get("/2tds2",(req,res) => {
    return res.status(200).json({message:"Hello, Word!"})
    });

    routes.use("/candidatos", candidatosRoutes)

    export default candidatosRoutes;