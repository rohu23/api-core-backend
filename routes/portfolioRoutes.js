const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Portfolio =   require("../models/Portfolio");
const app = express();
const connectToDB = require("../utils/database");

// Fetch all portfolio items
app.get("/portfolios", async (req, res) => {
    console.log("End Point /portfolios hit.")
    try {
        await connectToDB('Wouessi')
        const portfolio = await Portfolio.find();
        res.json(portfolio);
    } catch (error) {
        console.error('Error fetching portfolio', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Post a portfolio item
// app.post('/portfolio', async (req, res) => {
//     const { image, title, link } = req.body;
//     try {
//         const newPortfolio = new Portfolio({ image, title, link });
//         await newPortfolio.save();
//         res.status(201).json(newPortfolio);
//     } catch (error) {
//         console.error('Error adding portfolio', error);
//         res.status(500).json({ message: 'Internal Server Error' });
//     }
// });

// Fetch a single portfolio item by ID
// app.get('/portfolios/:id', async (req, res) => {
//     try {
//         const portfolio = await Portfolio.findById(req.params.id);
//         if (!portfolio) {
//             return res.status(404).json({ message: 'Portfolio not found' });
//         }
//         res.json(portfolio);
//     } catch (error) {
//         console.error('Error fetching portfolio', error);
//         res.status(500).json({ message: 'Internal Server Error' });
//     }
// });

module.exports = router;
