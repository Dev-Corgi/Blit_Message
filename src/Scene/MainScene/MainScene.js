import React, { memo, useEffect, useState } from "react";
import "./MainScene.css";
import Card from "./Card";
import img_main_button from "Assets/img_main_button.png";
import { useNavigate, useParams } from "react-router";
import img_list_background from "Assets/img_list_BackgroundPic.png";
export default function MainScene(props) {
    const navigate = useNavigate();
    const { groupCode } = useParams();
    const [meetingData, setMeetingData] = useState(null);

    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");

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
                setMeetingData(data);
            })
            .catch((error) => {
                console.error("Error:", error);
                // Handle error condition when fetching meeting data fails
            });
    }, [groupCode]);

    if (!meetingData) {
        return <div>Loading...</div>;
    }

    const currentRound = meetingData.rounds.length;
    const attendantsCount = meetingData.attendants.length;
    const totalPrice = meetingData.rounds.reduce((acc, round) => acc + round.cost, 0);

    return (
        <div>
            <img className={"main_background"} src={img_list_background}></img>
            <div className={"main_foreground"}></div>
            <div className={"main_priceframe"}>
                <div className={"main_priceframeonging"}>{currentRound}차 진행중</div>
                <div className={"main_priceframemembercount"}>{attendantsCount}명 참여중</div>
                <div className={"main_priceframeprice"}>{totalPrice} 원</div>
                <div className={"main_priceframetitle"}>지금까지</div>
                <div className={"main_priceframeline"}></div>
                <div className={"main_priceframerect"}></div>
            </div>

            {meetingData.rounds.map((round, index) => (
                <div className={`main_card${index + 1}`}>
                    <Card key={index + 1} index={index + 1} storename={"가게 이름 예정"} price={round.cost} membercount={meetingData.attendants.length} />
                </div>
            ))}

            <button className="main_button" onClick={() => navigate("/PayCheck")} style={{ background: "none", border: "none", padding: 0 }}>
                <img src={img_main_button} alt="Input Link Button" />
            </button>
        </div>
    );
}
