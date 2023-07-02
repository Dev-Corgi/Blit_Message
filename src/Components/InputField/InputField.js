import React from 'react';
import { useState } from 'react';

import './InputField.css';

export default function InputField(props) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <div className="inputfield_namefieldtitle">{props.title}</div>
      <input className="inputfield_namefieldrect" value={inputValue} onChange={handleInputChange} />
    </div>
  );
}
