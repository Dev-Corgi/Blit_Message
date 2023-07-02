import React from 'react';

import  './ListScene.css';
import List from './List';
import img_list_BackgroundPic from "Assets/img_list_BackgroundPic.png"
import img_list_AddButton from "Assets/img_list_AddButton.png"
import { useNavigate } from 'react-router';

export default function ListScene() {
  const navigate = useNavigate();
  return (
    <div>
      <img className={"list_BackgroundPic"} src={img_list_BackgroundPic}></img>
      <div className={"list_BackgroundBlur"}></div>
      <div className={"list_PartyList"}>
        <List index = "/GroupInfo1"></List>
        <List  index = "/GroupInfo2"></List>
        <List  index = "/GroupInfo3"></List>
        <List  index = "/GroupInfo4"></List>
        <List  index = "/GroupInfo5"></List>
      </div>
      <div className={"list_TopLine"}></div>
      <div className={"list_BottomLine"}></div>
      <div className={"list_AddButton"}>
      </div>

      <button className="list_AddButton" onClick={() => navigate("/MakeGroup")} style={{ background: "none", border: "none", padding: 0 }}>
        <img src={img_list_AddButton} alt="Input Link Button" />
      </button>
      <div className={"list_Title"}>
        <div className={"textBlock"}>새로운 모임을 만들</div>
        <div className={"textBlock2"}>시간이에요!</div>
      </div>
    </div>
  );
};
