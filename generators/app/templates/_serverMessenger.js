import express from 'express'
import bodyParser from 'body-parser'
import request from 'request' <% if (sources === 'sources') { %>
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

const app = express()
app.use(bodyParser.json())
app.set('port', process.env.PORT || config.port || 8080)

function sendMessage(messageData) {
  request({
    uri: 'https://graph.facebook.com/v2.6/me/messages',
    qs: { access_token: config.messenger.pageAccessToken },
    method: 'POST',
    json: messageData,
  }, (error, response) => {
    if (!error && response.statusCode === 200) {
      console.log('All good job is done')
    }
  })
}

/*
* type of message to send back
*/

function replyMessage(recipientId, messageText) {
  const messageData = {
    recipient: {
      id: recipientId,
    },
    message: {
      text: messageText,
    },
  }
  sendMessage(messageData)
}

/*
* Connect your webhook
*/

app.get('/webhook', (req, res) => {
  if (req.query['hub.mode'] === 'subscribe' &&
  req.query['hub.verify_token'] === config.messenger.validationToken) {
    console.log('Validating webhook')
    res.status(200).send(req.query['hub.challenge'])
  } else {
    console.error('Failed validation. Make sure the validation tokens match.')
    res.sendStatus(403)
  }
})

/*
* Take care of the messages
*/

app.post('/webhook', (req, res) => {
  const data = req.body
  if (data.object === 'page') {
    data.entry.forEach(pageEntry => {
      pageEntry.messaging.forEach(messagingEvent => {
        if (messagingEvent.message) {
          // User input
          const text = messagingEvent.message.text

          // User's conversation unique id
          // It will be used by to identify each conversation with a user
          const conversationId = messagingEvent.sender.id

          myBot.reply(text, conversationId, {}).then(replies => {
            replies.forEach(reply => {
              replyMessage(conversationId, reply)
            })
          }).catch(err => {
            console.log(`An error occured: ${err}`)
            replyMessage(conversationId, 'Oops, I got a problem.')
          })
        }
      })
    })
    res.sendStatus(200)
  }
})

app.listen(app.get('port'), () => {
  console.log('Our bot is running on port', app.get('port'))
})
