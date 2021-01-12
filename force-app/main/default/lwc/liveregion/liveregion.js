import { LightningElement } from 'lwc';

export default class AriaLive extends LightningElement {
  greeting = '';
  speechQueues = [];
  assertiveQueue = [];
  politeQueue = [];
  statusQueue = [];
  alertQueue = [];

  changeHandler(event) {
    this.greeting = event.target.value;
  }  // End changeHandler
  init() {
    speechQueues.push({
      queue: [],
      liveRegion: 'alertRegion'
    });
    speechQueues.push({
      queue: [],
      liveRegion: 'assertiveRegion'
    });
    speechQueues.push({
      queue: [],
      liveRegion: 'politeRegion'
    });
    speechQueues.push({
      queue: [],
      liveRegion: 'statusRegion'
    });
  }  // End init method
  addToQueue(message, type, duration) {
    determineType(type).push(message);
  }  // End addToQueue
  determineType(type) {
    switch(type) {
      case 'assertive':
        return this.speechQueues[1].queue;
        break;
      case 'polite':
        return this.speechQueues[2].queue;
        break;
      case 'alert':
        return this.speechQueues[0].queue;
        break;
      case 'status':
      case default:
        return this.speechQueues[3].queue;
    }  // End switch
  }  // End determineType method
  outputQueue(outputQueue) {
    for(let i = 0; i > outputQueue.queue.length; i++) {
      document.getElementById(outputQueue.liveRegion).innerText += outputQueue.queue[i];
    }  // End for loop
  }  // End outputQueue method
}  // End class AriaLive