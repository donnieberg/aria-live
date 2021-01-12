import { LightningElement, api } from 'lwc';

export default class Container extends LightningElement {
    assertiveQueue = [];
    alertQueue = [];
    statusQueue = [];
    politeQueue = [];

    // speechQueues = [
    //     {
    //         liveRegion: 'alert',
    //         queue: []
    //     },
    //     {
    //         liveRegion: 'status',
    //         queue: []
    //     },
    //     {
    //         liveRegion: 'assertive',
    //         queue: []
    //     },
    //     {
    //         liveRegion: 'polite',
    //         queue: []
    //     }
    // ];

    // connectedCallback() {
    //     this.speechQueues.push({
    //       queue: [],
    //       liveRegion: 'alertRegion'
    //     });
    //     this.speechQueues.push({
    //       queue: [],
    //       liveRegion: 'assertiveRegion'
    //     });
    //     this.speechQueues.push({
    //       queue: [],
    //       liveRegion: 'politeRegion'
    //     });
    //     this.speechQueues.push({
    //       queue: [],
    //       liveRegion: 'statusRegion'
    //     });
    // }  // End init method

    determineType(type) {
        switch(type) {
        case 'assertive':
            return this.assertiveQueue;
            break;
        case 'polite':
            return this.politeQueue;
            break;
        case 'alert':
            return this.alertQueue;
            break;
        default:
            return this.statusQueue;
        }  // End switch
    }  // End determineType method

    addToQueue(e) {
       this.determineType(e.detail.type).push(e.detail.message);
    }  // End addToQueue
}