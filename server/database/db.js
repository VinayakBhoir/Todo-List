import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {

    const MONGODB_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@project.ynktxdt.mongodb.net/?retryWrites=true&w=majority&appName=project`;
    mongoose.connect(MONGODB_URL, { useNewUrlParser: true });

    mongoose.connection.on('connected', () => {
        console.log('database connected successfully');
    });
    
    mongoose.connection.on('disconnected', () => {
        console.log('database disconnected');
    });

    mongoose.connection.on('error', () => {
        console.log('error while connecting with the database ', console.error.message);
        
    });
}


export default Connection;
