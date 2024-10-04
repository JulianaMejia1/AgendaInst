import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const publicDir = path.join(__dirname, '../public');

router.get('/login', (req, res) => {
    res.sendFile(path.join(publicDir, 'hello.html'));
});

router.get('/registro', (req, res) => {
    res.render('formularios/formularios'); // Render the form.ejs template
});


//insertar


export default router;