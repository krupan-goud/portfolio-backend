require("dotenv").config();
const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routes/contact.routes');
app.disable("x-powered-by");
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors(
    {
        origin: ['portfolio-frontend-navy.vercel.app'],
        methods: ['POST', 'GET'],
        credentials: true
    }
));

require('./utils/mongoose.config')

app.use("/portFolio", router);

app.get('/', (req, res) => {
    res.json('Hello World')
})

app.listen(PORT, () => {
    console.info(`Server running at ${process.env.PORT}`)
})
