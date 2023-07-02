import React from 'react';
import { useNavigate } from 'react-router';
import  './ListScene.css';


export default function List(props) {
    const navigate = useNavigate();
  return (
    <button className={"list_List"} onClick={() => navigate(props.index)} style={{ background: "none", border: "none", padding: 0 }}>
    <div className={"list_title"}>모임이 없습니다</div>
    <div className={"list_date"}>2023.4.23</div>
    <div className={"list_Line"}></div>
  </button>
  );
};
