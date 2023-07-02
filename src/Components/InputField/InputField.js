import React from "react";

import "./InputField.css";

export default function InputField(props) {
    const handleInputChange = (event) => {
        const value = event.target.value;
        props.onChange(value); // 입력값 변경 시 상위 컴포넌트로 값을 전달
    };

    return (
        <div>
            <div className="inputfield_namefieldtitle">{props.title}</div>
            <input className="inputfield_namefieldrect" onChange={handleInputChange} />
        </div>
    );
}
