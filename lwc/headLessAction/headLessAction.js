import { LightningElement, api } from 'lwc';

export default class HeadLessAction extends LightningElement {

  @api invoke() {
    console.log('Hello, world!');


  }
}