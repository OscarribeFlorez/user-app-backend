import mongoose from 'mongoose';

const uri = process.env.MONGODB_API_KEY || '';

export const connectToMongoDB = async (): Promise<void> => {
  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log(error);
  }
};
