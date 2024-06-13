require("dotenv").config();
const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routes/contact.routes');
app.disable("x-powered-by");

app.use(express.json());
app.use(cors(
    {
        origin: ['https://deploy-mern-1whq.vercel.app'],
        methods: ['POST', 'GET'],
        credentials: true
    }
));
console.log("API HIT INDEX :::");

require('./utils/mongoose.config')

app.use("/portFolio", router);

app.listen(process.env.PORT, () => {
    console.info(`Server running at http://${process.env.IP_ADDRESS}:${process.env.PORT}`)
})
