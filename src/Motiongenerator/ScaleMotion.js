export default class ScaleMotion  {
    constructor(delay,duration,easetype,initialscale,endscale) {
      this.initialscale = initialscale
      this.endscale = endscale
      this.delay = delay
      this.duration = duration
      this.easetype = easetype
      this.motion = {
        scaleX: [this.initialscale[0], this.endscale[0]], scaleY: [this.initialscale[1], this.endscale[1]],
          transition: {
            duration: this.duration,
            delay: this.delay,
            easetype:this.easetype
          }
      };      
    }
  }