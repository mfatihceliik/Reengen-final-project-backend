const express = require('express')
const app = express()
const dotenv = require('dotenv').config();
const cors = require('cors')

// MiddleWare
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const userRouter = require('./routes/userRouter')
const factoryDetailRouter = require('./routes/factoryDetailRouter')
const factoryRouter = require('./routes/factoryRouter')

app.use('/api/user', userRouter)
app.use('/api/factoryDetail', factoryDetailRouter)
app.use('/api/factory', factoryRouter)

app.listen(process.env.SERVER_PORT, () => {
    console.log(`server port: ${process.env.SERVER_PORT}`)
})