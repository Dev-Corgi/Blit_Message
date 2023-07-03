import React from "react";

import "./MakeGroupScene.css";
import InputField from "Components/InputField/InputField";
import img_makegroupbutton from "Assets/img_makegroupbutton.png";
import { useNavigate } from "react-router";

import { useState } from "react";

export default function MakeGroupScene() {
    const navigate = useNavigate();
    const [name, setName] = useState("");

    const handleCreateMeeting = () => {
        const accessToken = localStorage.getItem("accessToken");

        // 액세스 토큰이 존재하지 않을 경우 처리
        if (!accessToken) {
            console.error("Access token not found");
            // 필요한 오류 처리 로직을 추가하세요
            return;
        }

        const data = { name };

        fetch("http://api.chungran.net/api/meeting/meeting/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                // 응답 처리
                if (!response.ok) {
                    throw new Error("Error creating meeting");
                }
                return response.json();
            })
            .then((responseData) => {
                // 생성된 미팅 처리
                console.log(responseData);
                // 필요한 로직을 추가하세요
                navigate("/List"); // 리스트 페이지로 이동
            })
            .catch((error) => {
                console.error("Error:", error);
                // 필요한 오류 처리 로직을 추가하세요
            });
    };

    return (
        <div>
            <div className={"makegroup_title"}>
                <div className={"textBlock"}>친구들 다모여!</div>
                <div className={"textBlock2"}>약속을 잡아볼까요?</div>
            </div>

            <div className={"makegroup_namefieldframe"}>
                <input type="text" placeholder="모임 이름" value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div className={"makegroup_dateinputfieldframe"}>{/* 날짜 입력 필드 등 추가 필드 */}</div>

            <button className="makegroup_button" onClick={handleCreateMeeting} style={{ background: "none", border: "none", padding: 0 }}>
                <img src={img_makegroupbutton} alt="Input Link Button" />
            </button>
        </div>
    );
}
