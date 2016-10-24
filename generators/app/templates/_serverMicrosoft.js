import express from 'express'
import builder from 'botbuilder'
import myBot from './bot'
import config from '../config'

<% if (mongo === 'yes') { %>
// DATABASE INITIALIZATION
myBot.useDatabase(config.database) <% } %>

// CONNECTION TO MICROSOFT BOT
const connector = new builder.ChatConnector({
  appId: config.microsoft.appId,
  appPassword: config.microsoft.secret,
})
const microsoftBot = new builder.UniversalBot(connector)

microsoftBot.dialog('/', session => {
  // User input
  const text = session.message.text

  console.log(`Message received: ${text}`)
  // User's conversation unique id
  // It will be used by to identify each conversation with a user
  const conversationId = session.message.address.conversation.id

  // Token and language can laso be passed as arguments to reply
  myBot.reply(text, conversationId, {}).then(replies => {
    replies.forEach(reply => {
      session.send(reply)
    })
  }).catch(err => {
    console.log(`An error occured: ${err}`)
    session.send('Oops, I got a problem.')
  })
})

const server = express()
server.listen(process.env.PORT || config.port || 8080)
server.post('/', connector.listen())
console.log('Server started!')
