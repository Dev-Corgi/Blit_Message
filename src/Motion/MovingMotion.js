export default class MovingMotion  {
    constructor(condition,xdistance, ydistance,delay,duration,easetype) {
      this.motionstate = "motion"
      this.currentX = 0
      this.currentY = 0
      this.xspeed = xdistance
      this.yspeed = ydistance
      this.condition = condition
      this.delay = delay
      this.duration = duration
      this.easetype = easetype
      this.variants = {
      "motion" : {x:this.currentX,y:this.currentY,
        transition: {
          duration: this.duration,
          delay: this.delay,
          ease:this.easetype
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
        ease:this.easetype
      }}
      return "motion"
    }

  }