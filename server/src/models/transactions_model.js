import mongoose from 'mongoose'

const transactionSchema = new mongoose.Schema({
  name: { type: String, default: 'Anonymous' },
  type: { type: String, default: 'Investment' },
  amount: { type: Number },
  date: { type: Date, default: Date.now },
})

export default mongoose.model('Transaction', transactionSchema)
