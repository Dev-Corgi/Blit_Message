import React from 'react';
import './ResultScene.css';
import img_result_image from "Assets/img_result_image.png"
import img_list_BackgroundPic from "Assets/img_list_BackgroundPic.png"
export default function ResultScene() {
  return (
    <div>
      <img className={"frame163"} src = {img_list_BackgroundPic}></img>
      <div className={"frame164"}></div>
      <div className={"result_Card"}>
        <img className={"result_pic"} src = {img_result_image}></img>
        <div className={"result_playtitle"}>동두천 뿌수기!</div>
        <div className={"result_indextitle"}>차수</div>
        <div className={"result_membertitle"}>참여인원</div>
        <div className={"result_membertext"}>24 명이서 신나게 놀았네요!</div>
        <div className={"result_datetitle"}>날짜</div>
        <div className={"result_storetext"}>방문한 가게</div>
        <div className={"result_priceheader"}>총금액</div>
        <div className={"result_sharetext"}>링크를 공유해 정산을 완료하세요!</div>
        <div className={"result_pricetext"}>125,400 원</div>
        <div className={"result_storetext2"}>윤이네, 인천 볼링장, 투다리</div>
        <div className={"result_timetitle"}>논시간</div>
        <div className={"result_timetext"}>4시간 30분</div>
        <div className={"result_datetext"}>2023.03.23 월요일</div>
        <div className={"result_indextext"}>3차 까지 불태웠다</div>
        <div className={"result_Line"}></div>
        <div className={"result_Elupse2"}>
        </div>
        <div className={"result_Elipse"}>
        </div>
        <div className={"result_LinkFrame"}>
          <div className={"result_Link"}>www.BlitPay.Com/F3940SA</div>
        </div>
      </div>
      <div className={"result_Text"}>
        <div className={"textBlock"}>정산이</div>
        <div className={"textBlock2"}>완료되었어요!</div>
      </div>
    </div>
  );
}
