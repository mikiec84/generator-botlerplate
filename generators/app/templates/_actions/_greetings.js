<% if (sources === 'module') { %>
import { Action } from 'botlerplate'
<% } else { %>
import Action from '../core/action'
<% } %>

class Greetings extends Action {
  constructor() {
    super()
    this.intent = 'greetings'
    this.next = 'Booking'
  }

  reply() {
    return ['Hello ;)']
  }
}

module.exports = Greetings
