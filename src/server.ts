import express, { Request, Response } from 'express'

const app = express();

app.use(express.json());

app.get("/", (request: Request, response: Response) => {
    return response.json({ "message": "Hello world" })
});

app.post("/", (request: Request, response: Response) => {
    return response.json({ "message": "Hello world" })
});

app.listen(3000, () => console.log("Server running in port 3000"))