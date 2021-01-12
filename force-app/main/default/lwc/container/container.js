import { LightningElement, api } from 'lwc';

export default class Container extends LightningElement {
    announcements = [];

    handleLimit(e) {
        this.announcements.push(e.detail)
    }

}