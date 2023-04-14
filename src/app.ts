import express, { Application } from 'express'
import handleError from './errors/handleError'
import announceRoutes from './routers/announce.routes'
import cors from "cors"

export const app: Application = express()
app.use(express.json())

app.use(cors())
app.use("/announce",announceRoutes)
app.use(handleError)