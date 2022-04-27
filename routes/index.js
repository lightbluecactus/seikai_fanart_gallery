import express from 'express';
const router = express.Router();

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// homepage
router.get('/', (req, res) => {
    console.log('on homepage');
    res.sendFile(path.join(__dirname, '../views/index.html'));
})


// other pages
router.get('/about', (req, res) => {
    console.log(`on page of about`);
    res.sendFile(path.join(__dirname, '../views/about.html'));
})

router.get('/collection', (req, res) => {
    console.log(`on page of collections`);
    res.sendFile(path.join(__dirname, '../views/collection.html'));
})

router.get('/feature/origin', (req, res) => {
    console.log(`on page of origin`);
    res.sendFile(path.join(__dirname, '../views/origin.html'));
})

router.get('/feature/settingoff', (req, res) => {
    console.log(`on page of settingoff`);
    res.sendFile(path.join(__dirname, '../views/settingoff.html'));
})

router.get('/feature/seasons', (req, res) => {
    console.log(`on page of seasons`);
    res.sendFile(path.join(__dirname, '../views/seasons.html'));
})

router.get('/feature/stickers', (req, res) => {
    console.log(`on page of stickers`);
    res.sendFile(path.join(__dirname, '../views/stickers.html'));
})

router.get('/feature/theocean', (req, res) => {
    console.log(`on page of theocean`);
    res.sendFile(path.join(__dirname, '../views/theocean.html'));
})

router.get('/feature/parody', (req, res) => {
    console.log(`on page of parody`);
    res.sendFile(path.join(__dirname, '../views/parody.html'));
})

router.get('/feature/products', (req, res) => {
    console.log(`on page of products`);
    res.sendFile(path.join(__dirname, '../views/products.html'));
})


// 404 page catches all broken routes
router.use((req, res) => {
    console.log('page does not exist');
    res.sendFile(path.join(__dirname, '../views/404.html'));
})

export default router;