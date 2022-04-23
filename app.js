import express from 'express';
import router from './routes/index.js';
import path from 'path';
import { fileURLToPath } from 'url';

// set up the root directory ref
// fileURLToPath finds the global URL, then turn it into __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname);

const app = express(); 
// make the port dynamic for Heroku to connect
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

// tell app to use the router file
app.use('/', router);

app.listen(port, () => {
  console.log(`App is running at ${port}/`);
});

// to see the page, go to localhost:3000
// in terminal, type "node app"
// or "npm run start" (they are the same)