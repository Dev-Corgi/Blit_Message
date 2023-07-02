import React from "react";
import { useNavigate } from "react-router";
import "./ListScene.css";

export default function List(props) {
    const navigate = useNavigate();
    const { name, created_at } = props;

    return (
        <button className={"list_List"} onClick={() => navigate(props.index)} style={{ background: "none", border: "none", padding: 0 }}>
            <div className={"list_title"}>{name}</div>
            <div className={"list_date"}>{created_at}</div>
            <div className={"list_Line"}></div>
        </button>
    );
}
