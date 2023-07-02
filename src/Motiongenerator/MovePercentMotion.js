export default class ScaleMotion  {
    constructor(condition,delay,duration,easetype,movingpercent) {
      this.motionstate = "motion"
      this.condition = condition
      this.initialscale = initialscale
      this.endscale = endscale
      this.rectsize = rectsize
      this.movingpercent = movingpercent
      this.delay = delay
      this.duration = duration
      this.easetype = easetype
      this.variants = {
        "motion": { right : -movingpercent[0], left : +movingpercent[0], bottom : -movingpercent[1], top : +movingpercent[1],
          transition: {
            duration: this.duration,
            delay: this.delay, 
            easetype:this.easetype
          }},
      };      
    }
  
    handleMotion(input) {
      return "motion"
    }

  }