import _ from 'lodash'
import { Bot, Action }from 'recastai-botlerplate'
import config from './config'

const bot = new Bot()
<% if (mongo) { %>
bot.useMongo(config.database)
<% } %>

/* ***************** *\
 *     Actions
\* ***************** */
bot.registerAction(class Greetings extends Action {
  constructor(conversationData) {
    super()
    this.answers = {
      en: ['Hey', 'Hello!'],
      fr: ['Salut', 'Bonjour!'],
    }
  }
})
<% if (microsoft) { %>
bot.useMicrosoftBotConnector(config.microsoft)
server.post('/api/messages', bot.listen())
<% } %>
