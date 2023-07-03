import React from 'react';
import img_main_cardbackground from "Assets/img_main_cardbackground.png"
import './MainScene.css';

export default function Card(props) {
  return (
    <div>
    <img className={"main_cardbackground"} src = {img_main_cardbackground}></img>
    <div className={"main_cardforeground"}></div>
    <div className={"main_cardbottomcard"}>
      <div className={"main_cardbottomcard_index"}>{props.index+"차"}</div>
      <div className={"main_cardbottomcard_storename"}>{props.storename}</div>
      <div className={"main_cardbottomcard_price"}>{props.price+"원"}</div>
      <div className={"main_cardbottomcard_membercoun"}>{props.membercount+"명"}</div>
      <div className={"main_cardbottomcard_plusbutton"}></div>
    </div>
    </div>
  );
};

