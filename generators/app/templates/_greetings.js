<% if (sources) { %>
import Action from '../core/action' <% } else { %>
import { Action } from 'botlerplate'
<% } %>
class Greetings extends Action {
  constructor() {
    this.intent = 'greetings'
  }

  reply() {
    return {
      en: ['Hey!', 'Hello!'],
      fr: ['Salut', 'Bonjour!'],
    }
  }
}

module.exports = Greetings
