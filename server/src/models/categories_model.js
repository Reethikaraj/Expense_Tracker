import mongoose from 'mongoose'

const categorySchema = new mongoose.Schema({
  type: { type: String, default: 'Investment' },
  color: { type: String, default: '#36AE7C' },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.model('Category', categorySchema)
