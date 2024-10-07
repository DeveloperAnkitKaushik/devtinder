import mongoose from "mongoose";

export const connect = async () => {
    try {
        await mongoose.connect("mongodb+srv://ankit:ankit143@namastenode.jq3jm.mongodb.net/devtinder");
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Error connecting to the database:', error);
        throw error;
    }
}
