export default class StretchWithPercent  {
    constructor(condition,delay,duration,easetype,initialrect,endrect) {
      this.motionstate = "motion"
      this.condition = condition
      this.initialrect = initialrect
      this.endrect = endrect
      this.delay = delay
      this.duration = duration
      this.easetype = easetype
      this.variants = {
        "motion": { top : [this.initialrect[0]+"%"], right : [this.initialrect[1]+"%"], bottom : [this.initialrect[2]+"%"], left : [this.initialrect[3]+"%"],
        transition: {
          duration: this.duration,
          delay: this.delay,
          ease:this.easetype
        }},
      };      
    }
  
    handleMotion(input) {
        this.variants["motion"] = { top : [null,this.endrect[0]+"%"], right : [null,this.endrect[1]+"%"], bottom : [null,this.endrect[2]+"%"], left : [null,this.endrect[3]+"%"]
        ,transition: {
          duration: this.duration,
          delay: this.delay,
          ease:this.easetype
        }}



      return "motion"
    }

  }