import slack from '@slack/client' <% if (sources === 'sources') { %>
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

// SLACK RTM CLIENT
const SlackClient = slack.RtmClient
const slackEvent = slack.RTM_EVENTS
const rtm = new SlackClient(config.slack.token, { logLevel: 'false' })
rtm.start()

rtm.on(slackEvent.MESSAGE, (message) => {
  // User input
  const text = message.text

  // User id
  // It will be used by to identify each conversation with a user
  const conversationId = message.user

  // Token and language can laso be passed as arguments to reply
  myBot.reply(text, conversationId, {}).then(replies => {
    replies.forEach(reply => {
      rtm.sendMessage(reply, message.channel)
    })
  }).catch(err => {
    console.log(`An error occured: ${err}`)
    rtm.sendMessage('Oops, I got a problem.', message.channel)
  })
})
