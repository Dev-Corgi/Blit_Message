import React from 'react';

import'./MakeGroupScene.css';
import InputField from 'Components/InputField/InputField';
import img_makegroupbutton from "Assets/img_makegroupbutton.png"
import { useNavigate } from 'react-router';
export default function MakeGroupScene() {
    const navigate = useNavigate();
  return (
    <div>
      <div className={"makegroup_title"}>
        <div className={"textBlock"}>친구들 다모여!</div>
        <div className={"textBlock2"}>약속을 잡아볼까요?</div>
      </div>
      
      <div className={"makegroup_namefieldframe"}>
      <InputField title = {"모임 이름"}></InputField>
      </div>
      <div className={"makegroup_dateinputfieldframe"}>
      <InputField title = {"모임 날짜"}></InputField>
      </div>

      <button className="makegroup_button" onClick={() => navigate("/List")} style={{ background: "none", border: "none", padding: 0 }}>
        <img src={img_makegroupbutton} alt="Input Link Button" />
      </button>
      </div>
  );
};
