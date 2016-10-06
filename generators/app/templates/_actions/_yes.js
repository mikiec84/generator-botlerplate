<% if (sources === 'module') { %>
import { Action } from 'botlerplate'
<% } else { %>
import Action from '../core/action'
<% } %>

class Yes extends Action {
  constructor() {
    this.intent = 'yes'
    this.dependencies = [
      {
        actions: ['Information'],
        isMissing: { en: ['I need you email address and your name before booking the meeting-room.'] },
      }
    ]
    this.endConversation = true
  }

  reply() {
    return { en: ['Great, your room is booked.'] }
  }
}

module.exports = Information
