import mongoose from 'mongoose'

export async function connectToDb() {
  try {
    const MONGO_URL = JSON.stringify(process.env.MONGO_URL)
    await mongoose.connect(MONGO_URL)
    console.log('Database connected!')
  } catch (error) {
    console.log(`[ERROR]: Error in connectToDb: ${error}`)
  }
}