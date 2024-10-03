import { Router } from "express";

const routes = Router();

routes.get("/2tds2",(req,res) => {
    return res.status(200).json({message:"Hello, Word!"})
    });

    export default routes;