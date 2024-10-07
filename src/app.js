import express from "express";
import { connect } from './config/database.js';
import User from "./config/schema.js";

const app = express();

app.use(express.json());

connect()
    .then(() => {
        console.log('Database connection established');
        app.listen(3000, () => {
            console.log('Server started: http://localhost:3000');
        });
    })
    .catch((e) => {
        console.log('Error connecting to the database: ' + e);
        process.exit(1);
    });

app.post("/signup", async (req, res) => {
    try {
        const user = new User(req.body);

        await user.save();
        res.status(201).send("User added successfully");
    } catch (error) {
        res.status(500).send("Error adding user: " + error.message);
    }
});
