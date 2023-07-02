export default class GuageController {
  constructor(inputController, eventname, initialValue, maxValue) {
    this.eventTarget = new EventTarget();
    this.gaugeevent = new CustomEvent('guageevent', {
      detail : {
        state : 0,
        value : initialValue
      }
    });
    this.maxvalue = maxValue;
    this.handleGuage = this.handleGuage.bind(this);
    this.inputController = inputController
    this.inputController.addEventListener(eventname, this.handleGuage);
  }

  handleGuage(event) {
      //아래
      if (event.detail.state > 0) {
        if (this.gaugeevent.detail.value < this.maxvalue) {
          this.gaugeevent.detail.state = 1;
          this.gaugeevent.detail.value++;
          console.log(this.gaugeevent.detail.value)
        }
      }

      //위
      else {
        if (this.gaugeevent.detail.value > 0) {
          this.gaugeevent.detail.state = -1;
          this.gaugeevent.detail.value--;
          console.log(this.gaugeevent.detail.value)
        }
      }
      this.eventTarget.dispatchEvent(this.gaugeevent);
  }

  destroy() {
    this.inputController.removeEventListener(
      this.inputController.type,
      this.handleGuage
    );
  }
}
