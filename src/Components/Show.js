import React from "react";

export default function({ label, value }) {
  const row = "flex m-2";
  const lstyle = "w-2/3";
  const vstyle = "w-1/3 text-center";

  const showText = isFinite(value) & (value > 0) ? value.toString() : "";

  return (
    <div className={row}>
      <p className={lstyle}>{label}</p>
      <p className={vstyle}>{showText}</p>
    </div>
  );
}
