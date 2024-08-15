import mongoose from "mongoose";

// Async function to establish a connection to MongoDB
export async function connect() {
    try {
        // Connect to the MongoDB database using the URI from environment variables
        await mongoose.connect(process.env.MONGO_URI as string);

        // Get the default connection object from mongoose
        const connection = mongoose.connection;

        // Event listener for successful connection
        connection.on('connected', () => {
            console.log('MongoDB connected successfully');
        });

        // Event listener for connection errors
        connection.on('error', (error) => {
            console.error('MongoDB connection error. Please make sure MongoDB is running. ' + error);
            process.exit(1); // Exit the process with a failure code
        });
    } catch (error) {
        // Catch any errors that occur during the connection process
        console.error('Something went wrong while connecting to MongoDB!');
        console.error(error);
    }
}
