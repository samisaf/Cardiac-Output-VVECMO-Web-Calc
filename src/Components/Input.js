import React from "react";

export default function({ label, placeholder, onChange }) {
  const row = "flex m-2";
  const colLabel = "w-2/3";
  const colInput = "w-1/3 text-center";

  
  return (
    <div className={row}>
      <label className={colLabel}>{label}</label>
      <input
        className={colInput}
        placeholder={placeholder}
        type="number"
        onChange={e => onChange(Number(e.target.value))}
      />
    </div>
  );
}
