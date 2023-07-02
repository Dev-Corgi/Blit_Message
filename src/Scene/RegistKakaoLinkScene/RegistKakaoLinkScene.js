import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./RegistKakaoLinkScene.css";
import InputField from "Components/InputField/InputField";
import img_inputlinkbutton from "Assets/img_inputlinkbutton.png";

export default function RegistKakaoLinkScene() {
    const navigate = useNavigate();
    const [kakaoLink, setKakaoLink] = useState("");

    const handleLinkChange = (value) => {
        setKakaoLink(value);
    };

    const handleSubmit = () => {
        const regex = /https:\/\/qr\.kakaopay\.com\/(.*)$/;
        const match = kakaoLink.match(regex);
        console.log(kakaoLink);
        console.log(match);

        if (match) {
            const code = match[1];
            const accessToken = localStorage.getItem("accessToken");

            if (!accessToken) {
                console.error("Access token not found");
                return;
            }

            fetch("http://localhost:8000/api/auth/kakao_pay/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
                body: JSON.stringify({ kakao_pay_code: code }),
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Error registering Kakao Pay link");
                    }
                    return response.json();
                })
                .then((data) => {
                    // 성공적으로 처리된 경우의 로직 작성
                    console.log("Kakao Pay link registered:", data);
                    navigate("/Main");
                })
                .catch((error) => {
                    console.error("Error:", error);
                    // 오류 처리 로직 추가
                });
        }
    };

    return (
        <div>
            <div className={"makegroup_title"}>
                <div className={"textBlock"}>친구들 다모여!</div>
                <div className={"textBlock2"}>약속을 잡아볼까요?</div>
            </div>

            <div className={"makegroup_kakaolinkframe"}>
                <InputField title={"카카오 송금 링크"} onChange={handleLinkChange} />
            </div>

            <button className="makegroup_button" onClick={handleSubmit} style={{ background: "none", border: "none", padding: 0 }}>
                <img src={img_inputlinkbutton} alt="Input Link Button" />
            </button>
        </div>
    );
}
