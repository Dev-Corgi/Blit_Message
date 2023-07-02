export default class ScrollController {
  constructor(delay) {
    this.eventTarget = new EventTarget();
    this.scrollevent = new CustomEvent('scrollevent', {
      detail :{
        state: 0
      }
    });
    this.condition = true;
    this.delay = delay;
    this.handleScroll = this.handleScroll.bind(this);
    window.addEventListener('wheel', this.handleScroll);
  }

  handleScroll(event) {
    if (this.condition) {
      this.condition = false;

      //아래
      if (event.deltaY > 0) {
        this.scrollevent.detail.state = 1;
      }
      //위
      else {
        this.scrollevent.detail.state = -1;
      }

      this.eventTarget.dispatchEvent(this.scrollevent);
      setTimeout(() => { this.condition = true }, this.delay);
    }
  }

  destroy() {
    window.removeEventListener('wheel', this.handleScroll);
  }
}