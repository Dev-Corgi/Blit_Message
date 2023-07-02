import React from 'react';

import  './GroupInfoScene.css';
import ic_group_memberdot from "Assets/ic_group_memberdot.png"

export default function MemberFrame(props) {
  return (
    <div className={"group_memberframe"}>
    <div className={"group_memberpic"}></div>
    <div className={"group_membername"}>{props.membername}</div>
    <img className={"group_memberdot"} src = {ic_group_memberdot}>
    </img>
  </div>
  );
};
