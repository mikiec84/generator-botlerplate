import Kik from '@kikinteractive/kik'
import http from 'http'
import myBot from './bot'
import config from '../config'

<% if (mongo === 'yes') { %>
// DATABASE INITIALIZATION
myBot.useDatabase(config.database) <% } %>

const bot = new Kik({
  username: config.kik.username,
  apiKey: config.kik.apiKey,
  baseUrl: config.kik.baseUrl,
})

bot.updateBotConfiguration()

bot.onTextMessage(message => {
  // User input
  const text = message.body

  // User's conversation unique id
  // It will be used by to identify each conversation with a user
  const conversationId = message.chatid

  console.log(`Message received: ${text}`)

  // Token and language can laso be passed as arguments to reply
  myBot.reply(text, conversationId, {}).then(replies => {
    replies.forEach(reply => {
      message.reply(reply)
    })
  }).catch(err => {
    console.log(`An error occured: ${err}`)
    message.reply('Oops, I got a problem.')
  })
})

let server = http
.createServer(bot.incoming())
.listen(process.env.PORT || config.port || 8080)
console.log('Server started!')
