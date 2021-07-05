import { LightningElement, api, track } from 'lwc';

export default class ScreenAction extends LightningElement {

  message = 'ここにモーダルコンテンツを記載する';
  button1 = 'ボタン１';
  button2 = 'ボタン２';

  /**
   * ヘッダーレスアクションと異なりDOMが存在するため、
   * ライフサイクルフックは利用可能。
   **/
  connectedCallback() {
    console.log('connectedCallback');
  }

  constructor() {
    console.log('constructor');
  }

  render() {
    console.log('render');
  }

  renderedCallback() {
    console.log('renderedCallback');
  }

}