import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { readFileSync } from 'fs';
import * as path from 'path'


dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'pug');
app.use(express.static('public'))
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScriphht Server');
});

app.get('/1', (req: Request, res: Response) => {
  const file = readFileSync('./inputs/1.txt', 'utf-8');
  let list = file.split("\r\n");
  res.render("1", {
    list: list
    });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});