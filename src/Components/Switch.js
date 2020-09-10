import React from "react";
import "../style.css";

const Switch = ({ isOn, toggle }) => {
  const color = '#06D6A0';

  return (
    <div className="react-switch">
      <input
        onChange={toggle}
        checked={isOn}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        style={{ background: isOn && color }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </div>
  );
};

export default Switch;
