import React, { useEffect, useState } from "react";
import "./ResultScene.css";
import img_result_image from "Assets/img_result_image.png";
import img_list_BackgroundPic from "Assets/img_list_BackgroundPic.png";
import { useParams } from "react-router";
export default function ResultScene() {
    const { groupCode } = useParams();
    const accessToken = localStorage.getItem("accessToken");
    const [meetingData, setMeetingData] = useState(null);

    useEffect(() => {
        if (!accessToken) {
            console.error("Access token not found");
            // Handle error condition when access token is not available
            return;
        }

        fetch(`https://api.chungran.net/api/meeting/meeting/${groupCode}`, {
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
                console.log(data);
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

    const totalRound = meetingData.rounds.length;
    const totalCost = meetingData.rounds.reduce((acc, cur) => acc + cur.cost, 0);
    const date = new Date(meetingData.created_at).toLocaleDateString();
    return (
        <div>
            <img className={"frame163"} src={img_list_BackgroundPic}></img>
            <div className={"frame164"}></div>
            <div className={"result_Card"}>
                <img className={"result_pic"} src={img_result_image}></img>
                <div className={"result_playtitle"}>{meetingData.name}</div>
                <div className={"result_indextitle"}>차수</div>
                <div className={"result_membertitle"}>참여인원</div>
                <div className={"result_membertext"}>{meetingData.attendants.length} 명이서 신나게 놀았네요!</div>
                <div className={"result_datetitle"}>날짜</div>
                <div className={"result_storetext"}>방문한 가게</div>
                <div className={"result_priceheader"}>총금액</div>
                <div className={"result_sharetext"}>링크를 공유해 정산을 완료하세요!</div>
                <div className={"result_pricetext"}>{totalCost} 원</div>
                <div className={"result_storetext2"}>윤이네, 인천 볼링장, 투다리</div>
                <div className={"result_timetitle"}>논시간</div>
                <div className={"result_timetext"}>4시간 30분</div>
                <div className={"result_datetext"}>{date}</div>
                <div className={"result_indextext"}>{totalRound}차 까지 불태웠다</div>
                <div className={"result_Line"}></div>
                <div className={"result_Elupse2"}></div>
                <div className={"result_Elipse"}></div>
                <div className={"result_LinkFrame"}>
                    <div className={"result_Link"}>api.chungran.com/meeting/?meeting_code={meetingData.meeting_code}</div>
                </div>
            </div>
            <div className={"result_Text"}>
                <div className={"textBlock"}>정산이</div>
                <div className={"textBlock2"}>완료되었어요!</div>
            </div>
        </div>
    );
}
