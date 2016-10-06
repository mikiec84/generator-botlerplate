 <% if (sources === 'module') { %>
import Bot from 'botlerplate' <% } %>
   <% if (sources === 'sources') { %>
import Bot from './core/bot' <% } %>
import config from '../config'
import slack from '@slack/client'

const SlackClient = slack.RtmClient
const slackEvent = slack.RTM_EVENTS
const rtm = new SlackClient(config.slack.token, { logLevel: 'false' })
rtm.start()

rtm.on(slackEvent.MESSAGE, (message) => {
  const user = rtm.dataStore.getUserById(message.user)
  const dm = rtm.dataStore.getDMByName(user.name).id
})

const recastToken = '' || process.env.TOKEN || process.argv[2]

const myBot = new Bot({
  token: recastToken,
  noIntent: {
    en: ['I don\'t understand!'],
    fr: ['Je ne comprend pas'],
  },
})

<% if (mongo) { %>
  myBot.useDatabase(config.database) <% } %>


/** boucle principale (slack/facebook/whatever) **/
myBot.reply(text, IdConversation).then(replies => {
  responses.forEach(reply => {
    rtm.sendMessage(reply)
  })
})
