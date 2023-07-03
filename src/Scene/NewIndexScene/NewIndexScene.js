import React, { useEffect, useState } from "react";

import "./NewIndexScene.css";
import InputField from "Components/InputField/InputField";
import img_makegroupbutton from "Assets/img_makegroupbutton.png";
import { useNavigate, useParams } from "react-router";
import img_newindex_button from "Assets/img_newindex_button.png";
export default function NewIndexScene() {
    const navigate = useNavigate();
    const { groupCode } = useParams();

    const handleSubmit = () => {
        // API 요청을 보내는 코드 작성
        fetch(`https://api.chungran.net/api/meeting/round/?meeting_code=${groupCode}`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((responseData) => {
                // API 요청에 대한 응답 처리
                console.log(responseData);
                // 성공적으로 처리된 경우 다음 페이지로 이동
                navigate(`/Main/${groupCode}`);
            })
            .catch((error) => {
                // API 요청 실패 또는 에러 처리
                console.error("Error:", error);
                // 실패한 경우 에러 페이지로 이동 또는 에러 메시지 표시 등의 처리
                navigate("/Error");
            });
    };

    return (
        <div>
            <div className={"makegroup_title"}>
                <div className={"textBlock"}>야호! 다음 차수로</div>
                <div className={"textBlock2"}>이동해 볼까요?</div>
            </div>

            <div className={"makegroup_namefieldframe"}>{/* <InputField title={"가게 이름"}></InputField> */}</div>

            <button className="makegroup_button" onClick={handleSubmit} style={{ background: "none", border: "none", padding: 0 }}>
                <img src={img_newindex_button} alt="Input Link Button" />
            </button>
        </div>
    );
}
