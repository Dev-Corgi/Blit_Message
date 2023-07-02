export default class ScaleMotion  {
    constructor(condition,delay,duration,easetype,initialscale,endscale) {
      this.motionstate = "motion"
      this.condition = condition
      this.initialscale = initialscale
      this.endscale = endscale
      this.delay = delay
      this.duration = duration
      this.easetype = easetype
      this.variants = {
        "motion": { scaleX: [this.initialscale[0], this.endscale[0]], scaleY: [this.initialscale[1], this.endscale[1]],
          transition: {
            duration: this.duration,
            delay: this.delay,
            ease:this.easetype
          }},
      };      
    }
  
    handleMotion(input) {
      return "motion"
    }

  }