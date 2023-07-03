import React from "react";

import "./GroupInfoScene.css";
import MemberFrame from "./MemberFrame";
import img_group_startbutton from "Assets/img_group_startbutton.png";
import img_group_background from "Assets/img_group_background.png";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";

export default function GroupInfoScene() {
    const { groupCode } = useParams();
    const navigate = useNavigate();
    const accessToken = localStorage.getItem("accessToken");
    const [meetingData, setMeetingData] = useState(null);

    useEffect(() => {
        if (!accessToken) {
            console.error("Access token not found");
            // Handle error condition when access token is not available
            return;
        }

        fetch(`http://api.chungran.net/api/meeting/meeting/${groupCode}/`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error fetching meeting data");
                }
                return response.json();
            })
            .then((data) => {
                setMeetingData(data);
            })
            .catch((error) => {
                console.error("Error:", error);
                // Handle error condition when fetching meeting data fails
            });
    }, [accessToken, groupCode]);

    if (!meetingData) {
        // Render loading state or return null
        return null;
    }

    const { name, created_at, rounds, attendants, meeting_code } = meetingData;

    return (
        <div>
            <img className={"group_background"} src={img_group_background} alt="Group Background" />
            <div className={"group_Foreground"}></div>
            <div className={"group_arrow1"}></div>
            <div className={"group_memberlist"}>
                {attendants.map((attendant, index) => (
                    <MemberFrame key={index} membername={attendant} />
                ))}
            </div>
            <div className={"group_titleframe"}>
                <button className="group_startbutton" onClick={() => navigate(`/Main/${groupCode}`)} style={{ background: "none", border: "none", padding: 0 }}>
                    <img src={img_group_startbutton} alt="Start Button" />
                </button>
                <div className={"group_membercount"}>{attendants.length}명 참여중</div>
                <div className={"group_title"}>{name}</div>
                <div className={"group_grouptext"}>모임링크: api.chungran.net/meeting/?meeting_code={meeting_code}</div>
            </div>
        </div>
    );
}
