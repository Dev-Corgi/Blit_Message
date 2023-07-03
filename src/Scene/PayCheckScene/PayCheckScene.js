import React, { useEffect, useState } from "react";

import "./PayCheckScene.css";
import InputField from "Components/InputField/InputField";
import img_paycheck_button from "Assets/img_paycheck_buttom.png";
import { useNavigate, useParams } from "react-router";
export default function PayCheckScene() {
    const navigate = useNavigate();
    const { groupCode } = useParams();
    const [amount, setAmount] = useState("");
    const [meetingData, setMeetingData] = useState(null);

    const handleAmountChange = (value) => {
        setAmount(value);
    };

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

    const handleSubmit = () => {
        // API 요청을 보내는 코드 작성
        const data = {
            cost: amount,
        };
        console.log(meetingData);
        fetch(`https://api.chungran.net/api/meeting/round/${meetingData.rounds.length}/?meeting_code=${groupCode}`, {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((responseData) => {
                // API 요청에 대한 응답 처리
                console.log(responseData);
                // 성공적으로 처리된 경우 다음 페이지로 이동
                navigate(`/Complete/${groupCode}`);
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
                <div className={"textBlock"}>신나는 시간 보내셨나요?</div>
                <div className={"textBlock2"}>정산 타임 이에요!</div>
            </div>

            <div className={"makegroup_namefieldframe"}>
                <InputField title={"금액"} value={amount} onChange={handleAmountChange} />
            </div>

            <button className="makegroup_button" onClick={handleSubmit} style={{ background: "none", border: "none", padding: 0 }}>
                <img src={img_paycheck_button} alt="Input Link Button" />
            </button>
        </div>
    );
}
