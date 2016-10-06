import mongoose from 'mongoose'

const conversationSchema = new mongoose.Schema({
  conversationId: String,
  userData: Object,
  conversationData: Object,
  history: [{ content: String, speake: String }],
})

const Conversation = mongoose.model('Conversation', conversationSchema)

module.exports = Conversation
