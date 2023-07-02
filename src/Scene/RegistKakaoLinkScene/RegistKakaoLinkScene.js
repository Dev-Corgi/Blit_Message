import React from 'react';
import { useNavigate } from 'react-router';
import'./RegistKakaoLinkScene.css';
import InputField from 'Components/InputField/InputField';
import img_inputlinkbutton from "Assets/img_inputlinkbutton.png"
export default function RegistKakaoLinkScene() {
  const navigate = useNavigate();
  return (
    <div>
      <div className={"makegroup_title"}>
        <div className={"textBlock"}>친구들 다모여!</div>
        <div className={"textBlock2"}>약속을 잡아볼까요?</div>
      </div>
      
      <div className={"makegroup_kakaolinkframe"}>
      <InputField title = {"카카오 송금 링크"}></InputField>
      </div>


      <button className="makegroup_button" onClick={() => navigate("/Main")} style={{ background: "none", border: "none", padding: 0 }}>
        <img src={img_inputlinkbutton} alt="Input Link Button" />
      </button>
    </div>
  );
};
