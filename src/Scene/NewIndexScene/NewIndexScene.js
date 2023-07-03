import React from 'react';

import'./NewIndexScene.css';
import InputField from 'Components/InputField/InputField';
import img_makegroupbutton from "Assets/img_makegroupbutton.png"
import { useNavigate } from 'react-router';
import img_newindex_button from "Assets/img_newindex_button.png"
export default function NewIndexScene() {
    const navigate = useNavigate();
  return (
    <div>
      <div className={"makegroup_title"}>
        <div className={"textBlock"}>야호! 다음 차수로</div>
        <div className={"textBlock2"}>이동해 볼까요?</div>
      </div>
      
      <div className={"makegroup_namefieldframe"}>
      <InputField title = {"가게 이름"}></InputField>
      </div>

      <button className="makegroup_button" onClick={() => navigate("/Main")} style={{ background: "none", border: "none", padding: 0 }}>
        <img src={img_newindex_button} alt="Input Link Button" />
      </button>
      </div>
  );
};
