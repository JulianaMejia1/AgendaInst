import express from "express";

import path from 'path';

import {fileURLToPath} from 'url';

import { dirname} from "path";

const app = express()

const port = 3000;

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename);

const publicdir = path.join(__dirname, 'public');
app.use(express.static(publicdir))

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

const dinamicdir = path.join(__dirname, 'views')
app.set('views', dinamicdir)
app.set('view engine', 'ejs')

import routes from './routes/forms.js'

app.use('/form', routes)

import functionregistro from './routes/forms.js'

app.post("/registro", (req, res)=>{
    functionregistro.registro(req, res)
})

app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`)
}).on('error', (err)=>{
    console.log(err)
})