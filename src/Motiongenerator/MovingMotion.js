export default class MovingMotion  {
    constructor(condition,xspeed, yspeed,delay,duration,easetype) {
      this.motionstate = "motion"
      this.currentX = 0
      this.currentY = 0
      this.xspeed = xspeed
      this.yspeed = yspeed
      this.condition = condition
      this.delay = delay
      this.duration = duration
      this.easetype = easetype
      this.variants = {
      "motion" : {x:this.currentX,y:this.currentY,
        transition: {
          duration: this.duration,
          delay: this.delay,
          easetype:this.easetype
        }},
    };
    }
  
    handleMotion(input) {
      if(((this.condition == null) || (this.condition != null && this.condition(input.value)))){
        this.currentX -= this.xspeed
        this.currentY -= this.yspeed
      }
      this.variants["motion"] = {x:this.currentX,y:this.currentY,transition: {
        duration: this.duration,
        delay: this.delay,
        easetype:this.easetype
      }}
      return "motion"
    }

  }