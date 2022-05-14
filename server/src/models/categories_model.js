import mongoose from 'mongoose'

const categorySchema = new mongoose.Schema({
  type: { type: String, default: 'Investment' },
  color: { type: String, default: '#36AE7C' },
})

export default mongoose.model('Category', categorySchema)
