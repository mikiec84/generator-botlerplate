<% if (sources === 'module') { %>
import { Action } from 'bot-dialog'
<% } else { %>
import Action from '../core/action'
<% } %>

class Booking extends Action {
  constructor() {
    super()
    this.intent = 'booking'
    this.next = 'Information'
    this.constraints = [
      {
        entities: [{ entity: 'datetime', alias: 'date' }],
        isMissing: { en: ['Can you give me the date you like to book the meeting room {{room-number}}?']},
      },
      { entities: [{ entity: 'number', alias: 'room-number' }],
        isMissing: { en: ['I need the number of the meeting room you\'d like to book.', 'What is the number of the room you want?'] }
      },
    ]
  }

  reply() {
    return { en: ['Taking your order in consideration :)'] }
  }
}
module.exports = Booking
