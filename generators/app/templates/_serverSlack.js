import slack from '@slack/client'
import myBot from './bot'
import config from '../config'

<% if (mongo === 'yes') { %>
// DATABASE INITIALIZATION
myBot.useDatabase(config.database) <% } %>

// SLACK RTM CLIENT
const SlackClient = slack.RtmClient
const slackEvent = slack.RTM_EVENTS
const rtm = new SlackClient(config.slack.token, { logLevel: 'false' })
rtm.start()
console.log('Server started!')

rtm.on(slackEvent.MESSAGE, (message) => {
  // User input
  const text = message.text

  console.log(`Message received: ${text}`)
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
