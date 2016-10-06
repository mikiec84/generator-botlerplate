<% if (sources === 'module') { %>
import Bot from 'botlerplate'
import actions from '../action/greetings' <% } %> <% if (sources === 'sources') { %>
import Bot from './core/bot'
import requireAll from 'require-all' <% } %>
import config from '../config'
import slack from '@kikinteractive/kik'
<% if (sources === 'sources') { %>
const actions = requireAll(`${__dirname}/actions`) <% } %>
import http from 'http'

const bot = new Kik({
  username: config.kik.username,
  apiKey: config.kik.apiKey,
  baseUrl: config.kik.baseUrl,
})

bot.updateBotConfiguration()

bot.onTextMessage((message) => {
})

const recastToken = '' || process.env.TOKEN || process.argv[2]

const myBot = new Bot({
  token: recastToken,
  noIntent: {
    en: ['I don\'t understand!'],
    fr: ['Je ne comprend pas'],
  },
})

<% if (mongo === 'yes') { %>
  myBot.useDatabase(config.database) <% } %>

/** boucle principale (slack/facebook/whatever) **/
myBot.reply(text, IdConversation).then(replies => {
  res.replies.forEach(rep => {
    message.res.reply(rep)
  })
})

let server = http
.createServer(bot.incoming())
.listen(process.env.PORT || 8080)
