import 'reflect-metadata'
import express from 'express'
import morgan from'morgan'
import cors from 'cors'
import {createConnection}  from 'typeorm' 
import userRoutes from './routes/user.routes'
const app = express()
createConnection()
//middleware 

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
//routes
app.use(userRoutes)
app.listen(3000)
console.log('server Port definido', 3000)