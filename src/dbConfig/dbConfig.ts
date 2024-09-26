import mongoose from 'mongoose';

const connect = async (): Promise<void> => {
  try {
    // Connecting to MongoDB using the URI from environment variables
    await mongoose.connect(process.env.MONGO_URI!);

    const connection = mongoose.connection;

    // Event listeners
    connection.on('connected', () => {
      console.log('MongoDB connected successfully');
    });

    connection.on('error', (err) => {
      console.error('MongoDB connection error: ', err);
      process.exit(1);
    });
  } catch (error) {
    console.error('Something went wrong while connecting to MongoDB!');
    console.error(error);
  }
};

export default connect;
