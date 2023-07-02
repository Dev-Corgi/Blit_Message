export default class StretchWithPercent2  {
  constructor(condition,delay,duration,easetype,initialrect,endrect) {
    this.motionstate = "motion"
    this.condition = condition
    this.initialrect = initialrect
    this.endrect = endrect
    this.delay = delay
    this.duration = duration
    this.easetype = easetype
    this.variants = {
      "motion": { width : this.initialrect[0], height : this.initialrect[1], left :  this.initialrect[2] , top :  this.initialrect[3],
      transition: {
        duration: this.duration,
        delay: this.delay,
        ease:this.easetype
      }},
    };      
  }

  handleMotion(input) {
    if(input.state > 0){
      this.variants["motion"] = { width : [null,this.endrect[0]], height : [null,this.endrect[1]], left :  [null,this.endrect[2]] , top :  [null,this.endrect[3]]
      ,transition: {
        duration: this.duration,
        delay: this.delay,
        ease:this.easetype
      }}
   }

   if(input.state <0){
    this.variants["motion"] = { width : [null,this.initialrect[0]], height : [null,this.initialrect[1]], left :  [null,this.initialrect[2]] , top :  [null,this.initialrect[3]]
    ,transition: {
      duration: this.duration,
      delay: this.delay,
      ease:this.easetype
    }}
   }

    return "motion"
  }

}