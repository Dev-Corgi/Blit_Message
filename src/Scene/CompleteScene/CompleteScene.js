import React, { memo } from "react";
import "./CompleteScene.css";
import img_finish from "Assets/img_finish.png";
import img_finish_finishbutton from "Assets/img_finish_finishbutton.png";
import img_finish_nextbutton from "Assets/img_finish_nextbutton.png";
import { useNavigate, useParams } from "react-router";
export default function CompleteScene() {
    const navigate = useNavigate();
    const { groupCode } = useParams();
    return (
        <div>
            <img className={"complete_gif"} src={img_finish}></img>
            <div className={"complete_text"}>차수 정산 완료!</div>
            <div className={"complete_nextbutton"}></div>
            <div className={"complete_finishbutton"}></div>

            <button className="complete_nextbutton" onClick={() => navigate(`/NewIndex/${groupCode}`)} style={{ background: "none", border: "none", padding: 0 }}>
                <img src={img_finish_nextbutton} alt="Input Link Button" />
            </button>

            <button className="complete_finishbutton" onClick={() => navigate(`/Result/${groupCode}`)} style={{ background: "none", border: "none", padding: 0 }}>
                <img src={img_finish_finishbutton} alt="Input Link Button" />
            </button>
        </div>
    );
}
