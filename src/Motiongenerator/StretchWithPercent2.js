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
      "motion": { width : this.initialrect[0]+"px", height : this.initialrect[1]+"px", left :  this.initialrect[2]+"px" , top :  this.initialrect[3]+"px",
      transition: {
        duration: this.duration,
        delay: this.delay,
        easetype:this.easetype
      }},
    };      
  }

  handleMotion(input) {
    if(input.state > 0){
      this.variants["motion"] = { width : [null,this.endrect[0]+"px"], height : [null,this.endrect[1]+"px"], left :  [null,this.endrect[2]+"px"] , top :  [null,this.endrect[3]+"px"]}
   }

   if(input.state <0){
    this.variants["motion"] = { width : [null,this.initialrect[0]+"px"], height : [null,this.initialrect[1]+"px"], left :  [null,this.initialrect[2]+"px"] , top :  [null,this.initialrect[3]+"px"]}
   }

    return "motion"
  }

}