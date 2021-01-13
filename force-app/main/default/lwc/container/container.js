import { LightningElement, api, track } from 'lwc';

export default class Container extends LightningElement {
    @track assertive = [];
    @track alert = [];
    @track status = [];
    @track polite = [];

    determineType(type) {
        switch(type) {
        case 'assertive':
            return this.assertive;
            break;
        case 'polite':
            return this.polite;
            break;
        case 'alert':
            return this.alert;
            break;
        default:
            return this.status;
        }  // End switch
    }  // End determineType method

    addToQueue(e) {
        this.determineType(e.detail.type).push(e.detail.message);
    }  // End addToQueue

    @api
    get showAssertiveLatestMessage() {
        if(this.assertive.length > 0) {
           // Added this if statement to test if we're updating a string that is already present
           if(this.assertive.length > 1 && this.assertive[this.assertive.length - 1] === this.assertive[this.assertive.length - 2]) {
                // Adding a non-breaking space to the string if it is the same
               return this.assertive[this.assertive.length - 1] += '\xa0';
           }  // End if current value hasn't updated
           return this.assertive[this.assertive.length - 1];
        } else {
            return "";
        }
    } // End showAssertiveLatestMessage

    @api
    get showAlertLatestMessage() {
        if(this.alert.length > 0) {
           return this.alert[this.alert.length - 1];
        } else {
            return "";
        }
    } // End showAlertLatestMessage

    @api
    get showStatusLatestMessage() {
        if(this.status.length > 0) {
           return this.status[this.status.length - 1];
        } else {
            return "";
        }
    } // End showStatusLatestMessage

    @api
    get showPoliteLatestMessage() {
        if(this.polite.length > 0) {
           return this.polite[this.polite.length - 1];
        } else {
            return "";
        }
    } // End showPoliteLatestMessage
}