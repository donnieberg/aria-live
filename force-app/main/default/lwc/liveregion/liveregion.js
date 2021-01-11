import { LightningElement } from 'lwc';

export default class AriaLive extends LightningElement {
  greeting = '';
  changeHandler(event) {
    this.greeting = event.target.value;
  }
}