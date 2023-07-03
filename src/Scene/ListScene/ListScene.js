import React from "react";

import "./ListScene.css";
import List from "./List";
import img_list_BackgroundPic from "Assets/img_list_BackgroundPic.png";
import img_list_AddButton from "Assets/img_list_AddButton.png";
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";

export default function ListScene() {
    const navigate = useNavigate();
    const accessToken = localStorage.getItem("accessToken");
    const [partyList, setPartyList] = useState([]);

    useEffect(() => {
        // 액세스 토큰이 존재하지 않을 경우 처리
        if (!accessToken) {
            console.error("Access token not found");
            // 필요한 오류 처리 로직을 추가하세요
            return;
        }

        // API 요청
        fetch("https://api.chungran.net/api/meeting/meeting", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
            .then((response) => {
                // 응답 처리
                if (!response.ok) {
                    throw new Error("Error fetching meeting list");
                }
                return response.json();
            })
            .then((datas) => {
                // 받아온 미팅 목록 처리
                console.log("meeting list data: ");
                console.log(datas);
                const updatedPartyList = datas.map((item) => ({
                    index: `/GroupInfo/${item.meeting_code}`,
                    name: item.name,
                    created_at: new Date(item.created_at).toLocaleDateString(),
                    // 다른 필요한 속성들...
                }));
                setPartyList(updatedPartyList);
            })
            .catch((error) => {
                console.error("Error:", error);
                // 필요한 오류 처리 로직을 추가하세요
            });
    }, [accessToken]);

    return (
        <div>
            <img className={"list_BackgroundPic"} src={img_list_BackgroundPic} alt="Background" />
            <div className={"list_BackgroundBlur"}></div>
            <div className={"list_PartyList"}>
                {partyList.map((party, index) => (
                    <List key={index} index={party.index} name={party.name} created_at={party.created_at} />
                ))}
            </div>

            <div className={"list_TopLine"}></div>
            <div className={"list_BottomLine"}></div>
            <div className={"list_AddButton"}></div>

            <button className="list_AddButton" onClick={() => navigate("/MakeGroup")} style={{ background: "none", border: "none", padding: 0 }}>
                <img src={img_list_AddButton} alt="Add Button" />
            </button>
            <div className={"list_Title"}>
                <div className={"textBlock"}>새로운 모임을 만들</div>
                <div className={"textBlock2"}>시간이에요!</div>
            </div>
        </div>
    );
}
