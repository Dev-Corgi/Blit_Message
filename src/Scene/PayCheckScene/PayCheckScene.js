import React from 'react';

import'./PayCheckScene.css';
import InputField from 'Components/InputField/InputField';
import img_paycheck_button from "Assets/img_paycheck_buttom.png"
import { useNavigate } from 'react-router';
export default function PayCheckScene() {
    const navigate = useNavigate();
  return (
    <div>
      <div className={"makegroup_title"}>
        <div className={"textBlock"}>신나는 시간 보내셨나요?</div>
        <div className={"textBlock2"}>정산 타임 이에요!</div>
      </div>
      
      <div className={"makegroup_namefieldframe"}>
      <InputField title = {"금액"}></InputField>
      </div>

      <button className="makegroup_button" onClick={() => navigate("/Complete")} style={{ background: "none", border: "none", padding: 0 }}>
        <img src={img_paycheck_button} alt="Input Link Button" />
      </button>
      </div>
  );
};
