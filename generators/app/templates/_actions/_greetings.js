import { Action } from 'bot-dialog-manager'

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
