import React, { memo } from 'react';
import './MainScene.css';
import Card from './Card';
import img_main_button from "Assets/img_main_button.png"
import { useNavigate } from 'react-router';
import img_list_background from "Assets/img_list_BackgroundPic.png"
export default function MainScene(props) {
    const navigate = useNavigate();
  return (
    <div>
      <img className={"main_background"} src = {img_list_background}></img>
      <div className={"main_foreground"}></div>
      <div className={"main_priceframe"}>
        <div className={"main_priceframeonging"}>2차 진행중</div>
        <div className={"main_priceframemembercount"}>5명 참여중</div>
        <div className={"main_priceframeprice"}>35,000 원</div>
        <div className={"main_priceframetitle"}>지금까지</div>
        <div className={"main_priceframeline"}></div>
        <div className={"main_priceframerect"}></div>
      </div>
      <div className={"main_card"}>
        <Card index = {1} storename = {"윤이네 불족발"} price = {"35,000"} membercount = {"12"}></Card>
      </div>

      <button className="main_button" onClick={() => navigate("/PayCheck")} style={{ background: "none", border: "none", padding: 0 }}>
        <img src={img_main_button} alt="Input Link Button" />
      </button>
      <div className={"main_card2"}>
      <Card index = {2} storename = {"인천 볼링장"} price = {"47,500"} membercount = {"8"}></Card>
        </div>
    </div>
  );
};
