import React from 'react';

import './GroupInfoScene.css';
import MemberFrame from './MemberFrame';
import img_group_startbutton from "Assets/img_group_startbutton.png"
import img_group_background from "Assets/img_group_background.png"
import { useNavigate } from 'react-router';
export default function GroupInfoScene() {
    const navigate = useNavigate();
  return (
    <div>
      <img className={"group_background"} src = {img_group_background}>
      </img>
      <div className={"group_Foreground"}></div>
        <div className={"group_arrow1"}></div>
      <div className={"group_memberlist"}>
      <MemberFrame membername = {"김은혜"}/>
<MemberFrame membername = {"김은혜"}/>
<MemberFrame membername = {"김은혜"}/>
<MemberFrame membername = {"김은혜"}/>
<MemberFrame membername = {"김은혜"}/>
</div>
      <div className={"group_titleframe"}>

        <button className="group_startbutton" onClick={() => navigate("/Main")} style={{ background: "none", border: "none", padding: 0 }}>
        <img src={img_group_startbutton} alt="Input Link Button" />
      </button>

        <div className={"group_membercount"}>12명 참여중</div>
        <div className={"group_title"}>동두천 뿌수기!</div>
        <div className={"group_grouptext"}>모임</div>
      </div>
    </div>
  );
};
