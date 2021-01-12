import { LightningElement, api } from 'lwc';

export default class Container extends LightningElement {
    speechQueues = [];

    connectedCallback() {
        this.speechQueues.push({
          queue: [],
          liveRegion: 'alertRegion'
        });
        this.speechQueues.push({
          queue: [],
          liveRegion: 'assertiveRegion'
        });
        this.speechQueues.push({
          queue: [],
          liveRegion: 'politeRegion'
        });
        this.speechQueues.push({
          queue: [],
          liveRegion: 'statusRegion'
        });
    }  // End init method

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
        default:
            return this.speechQueues[3].queue;
        }  // End switch
    }  // End determineType method

    addToQueue(e) {
       this.determineType(e.detail.type).push(e.detail.message);
    }  // End addToQueue
}