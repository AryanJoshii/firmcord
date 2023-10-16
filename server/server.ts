import express, { Application } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { configDotenv } from "dotenv";
import dbConnection from "./config/dbConfig.js";
import setupRoutes from "./routes/index.js";
import { WebSocketServer } from 'ws';
import { createServer } from "http";
configDotenv();
await dbConnection(process.env.DATABASE_URI!);
const app: Application = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

setupRoutes(app);

const httpServer = createServer(app);

const wss = new WebSocketServer({
    server: httpServer
})

console.log(wss.clients);


// wss.on('connection', (ws, req) => {
//     ws.on('ping', )
// })


httpServer.listen(process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}`);
})
