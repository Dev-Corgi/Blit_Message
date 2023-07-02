export default class ButtonController {
  constructor(delay) {
    this.eventTarget = new EventTarget();
    this.buttonevent = new CustomEvent('buttonevent', {
      detail :{
        state: 0
      }
    });
    this.condition = true;
    this.delay = delay;
    this.handleButton = this.handleButton.bind(this);
  }

  handleButton() {
    console.log("click1")
    if (this.condition) {
      this.condition = false;
        this.buttonevent.detail.state = 1;
      this.eventTarget.dispatchEvent(this.buttonevent);
      setTimeout(() => { this.condition = true }, this.delay);
    }
  }

  destroy() {
  }
}