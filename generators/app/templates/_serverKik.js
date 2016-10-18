import Kik from '@kikinteractive/kik'
import http from 'http'
import { Bot } from 'bot-dialog'
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
