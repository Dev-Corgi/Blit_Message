import React, {useEffect,useState} from "react";
import {motion} from "framer-motion";

export default function Div (props)  {

  const [state, setState] = useState({});
  const [motionstate,setMotionState] = useState(0)

  useEffect(() => {
    if(props.animate != null){
      if(props.inputcontroller != null){
      const handleMotion = (event) => {
        setMotionState(props.animate.handleMotion(event.detail))
        setState({});
      }
      props.inputcontroller.addEventListener(props.eventname, handleMotion);
    }
      else {
        setMotionState(props.animate.handleMotion({state:1}));
      setState({});
    }
  }

  if(props.exit != null){
    setMotionState(props.exit.handleMotion({state:1}));
  }
  }, []);

  return (
    <motion.div
      className={props.classname}
      animate = {props.animate ? props.animate.variants["motion"] : {}}
      exit={props.exit ?  props.exit.variants["motion"] : {}}
      style={props.stylecomp}
      >
      {props.children}
    </motion.div>

  );
};

