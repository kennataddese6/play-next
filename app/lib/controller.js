const mongoose = require('mongoose');
const User = require('@/app/schema/userSchema');
export async function connectDB() {
  try {
    const MONGO_URI = `mongodb+srv://Kenna:${process.env.DB_PASS}@cluster0.jdtosny.mongodb.net/aquiredAsset`;
    const conn = await mongoose.connect(MONGO_URI, {
      family: 4,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
}

export async function getUsers() {
  const users = await User.find();
  if (users) {
    return users;
  } else {
    return 'Something went wrong';
  }
}
