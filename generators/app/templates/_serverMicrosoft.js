import express from 'express'
import builder from 'botbuilder' <% if (sources === 'sources') { %>
import Bot from './core/bot' <% } else { %>
import { Bot } from 'bot-dialog' <% } %>
import requireAll from 'require-all'
import _ from 'lodash'
const actions = requireAll(`${__dirname}/actions`)


import config from '../config'

const recastToken = ''

// RECAST BOT INSTANCE
// A language can be provided in the constructor
const myBot = new Bot({
  token: recastToken || config.recastToken || process.env.TOKEN || process.argv[2],
  notIntent: {
    en: ['Sorry but I don\'t understand.'],
    fr: ['Desole mais je ne comprends pas.'],
  },
  // language: 'en',
})

// Register all actions in our bot
myBot.registerActions(_.values(actions))

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
