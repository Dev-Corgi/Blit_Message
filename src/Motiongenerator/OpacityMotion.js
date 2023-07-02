export default class OpacityMotion  {
    constructor(condition,delay,duration,easetype,opacityTo) {
      this.motionstate = "motion"
      this.condition = condition
      this.delay = delay
      this.duration = duration
      this.easetype = easetype
      this.variants = {
      "motion" : {opacity: opacityTo,
      transition: {
        duration: this.duration,
        delay: this.delay,
        easetype:this.easetype
      }
    },
    };
    }
  
    handleMotion(input) {
      return "motion"
    }

  }