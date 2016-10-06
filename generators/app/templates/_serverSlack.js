 <% if (sources === 'module') { %>
import Bot from 'botlerplate' <% } %>
   <% if (sources === 'sources') { %>
import Bot from './core/bot' <% } %>

import config from '../config'

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
myBot.reply(text, IDDeLaConversation).then(replies => {
  responses.forEach(reply => {
    envoyerLaResponseAuChannel(reply)
  })
})
