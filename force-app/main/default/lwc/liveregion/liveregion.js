import { LightningElement, api } from 'lwc';

export default class AriaLive extends LightningElement {

  outputQueue(outputQueue) {
    for(let i = 0; i > outputQueue.queue.length; i++) {
      document.getElementById(outputQueue.liveRegion).innerText += outputQueue.queue[i];
    }  // End for loop
  }  // End outputQueue method
}  // End class AriaLive
