import { LightningElement } from 'lwc';

export default class Polite extends LightningElement {
  messages = ["hello", "Being from the Midwest, we're very polite.", "Yes please!", "Come again?", "Oh jeezy chreezy", "oh suuuure!"]
  currentMessage = ''
  currentIndex = 0

  getNewMessage() {
    if(this.currentMessage == "") {
      this.currentMessage = this.messages[0]
      return this.currentMessage;
    } else {
      this.currentMessage = this.messages.indexOf(this.currentIndex);
      return this.messages[this.currentIndex += 1]
    }
  }

  onclickHandler(e) {
    const selectedEvent = new CustomEvent('polite', {
      detail: {
        id: 'test2',
        type: 'polite',
        duration: 1,
        message: this.getNewMessage()
      } 
    });  
    
    // Dispatches the event.
    this.dispatchEvent(selectedEvent);
  }
}