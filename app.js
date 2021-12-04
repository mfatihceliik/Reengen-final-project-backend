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
/*const Moment = require('moment');
const MomentRange = require('moment-range');
const moment = MomentRange.extendMoment(Moment);

const start = moment('2021-12-3', 'YYYY-MM-DD')
const end = moment('2022-01-3','YYYY-MM-DD')
const range = moment.range(start, end)
console.log(range.diff('days'))

const date = (new Date()).toISOString().split('T')[0];
console.log(date)*/


app.listen(process.env.SERVER_PORT, () => {
    console.log(`server port: ${process.env.SERVER_PORT}`)
})