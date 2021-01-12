import { LightningElement } from 'lwc';

export default class Input extends LightningElement {
    value = '';
    totalCharactersAllowed = 10;
    limitErrorMessage = null;

    changeHandler(event) {
      this.value = event.target.value;
      if(this.value.length > 5) {
        this.limitErrorMessage = this.totalCharactersAllowed - this.value.length + ' characters remaining';

        const event = new CustomEvent('limit', {
          detail: {
            id: 'test1',
            type: 'error',
            message: this.limitErrorMessage
          }
        });
        this.dispatchEvent(event);
      }
    }
}