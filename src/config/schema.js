import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    age: {
        type: Number, // Corrected from Integer to Number
        required: true,
    }
});

export default mongoose.model("User", userSchema);
