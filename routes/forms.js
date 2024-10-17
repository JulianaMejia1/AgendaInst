import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const publicDir = path.join(__dirname, '../public');


router.get('/form', (req, res) => {
    res.render('forms/forms'); // Render the form.ejs template
});

import conexion from '../Js/conexion.js'

//insertar
const registro = async (req,res)=>{
    const {correo,contrasena}=req.body;
    const query = 'INSERT INTO accesousuarios(CorreoElectronico, Contrasena) VALUES(?,?)'
    try {
        await conexion.conexion(query, [correo, contrasena])
        res.status(200).send();
    } catch (error) {
        if (error) res.status(500).send()
    }
}


export default router;

export {registro};