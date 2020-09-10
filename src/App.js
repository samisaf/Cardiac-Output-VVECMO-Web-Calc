import React from "react";
import Switch from "./Components/Switch";
import Input from "./Components/Input";
import Show from "./Components/Show";

export default function({ name }) {
  //helper functions
  const sqrt = Math.sqrt;
  const round = (n, d = 0) => Math.round(n * 10 ** d) / 10 ** d;
  const [height, setHeight] = React.useState(0.0);
  const [weight, setWeight] = React.useState(0.0);
  const [sbp, setSbp] = React.useState(0.0);
  const [dbp, setDbp] = React.useState(0.0);
  const [rap, setRap] = React.useState(5.0);
  const [O2Art, setO2Art] = React.useState(0.0);
  const [FlowECMO, setFlowECMO] = React.useState(0.0);
  const [O2ECMO, setO2ECMO] = React.useState(0.0);
  const [O2Venous, setO2Venous] = React.useState(0.0);

  const cardiacOutput = Math.round(
    ((FlowECMO * (O2ECMO - O2Venous)) / (O2Art - O2Venous)) * 1000
  );

  const venousFlow =
    ((FlowECMO * (O2ECMO - O2Art)) / (O2Art - O2Venous)) * 1000;

  

  const map = sbp / 3 + (2 * dbp) / 3;
  const svr = (1000 * 80 * (map - rap)) / cardiacOutput;
  const bsa = 0.007184 * weight**.425* height**.725;

  const cardiacIndex = cardiacOutput / bsa;

  const card = "max-w-sm rounded shadow-lg bg-gray-300 p-2 m-2";
  const title = "font-bold";
  const row = "flex m-2";
  const colLabel = "w-2/3";
  const colInput = "w-1/3 text-center";

  return (
    <div className={card}>
      <p className={title}>Cardiac Output in VV ECMO</p>

      <Input label="ECMO Flow Rate (L/min)" onChange={setFlowECMO} />
      <Input label="ECMO Arterial O2 Saturation (%)" onChange={setO2ECMO} />
      <Input label="ECMO Venous O2 Saturation (%)" onChange={setO2Venous} />
      <Input label="Arterial O2 Saturation (%)" onChange={setO2Art} />

      <Input label="SBP (mmHg)" onChange={setSbp} />
      <Input label="DBP (mmHg)" onChange={setDbp} />
      <Input label="RAP (mmHg)" placeholder={rap} onChange={setRap} />
      <Input label="Height (cm)" onChange={setHeight} />
      <Input label="Weight (kg)" onChange={setWeight} />

      <div className={title}>
        <Show label="Cardiac Output (mL/min)" value={round(cardiacOutput)} />
        <Show label="Venous Flow (mL/min)" value={round(venousFlow)} />
        <Show label="Cardiac Index (mL/min)" value={round(cardiacIndex)} />
        <Show label="SVR (dynes-sec/cm⁵)" value={round(svr)} />
        <Show label="MAP (mmHG)" value={round(map)} />
        <Show label="BSA - Du Bois (m²)" value={round(bsa, 2)} />

      </div>
      <p className="text-center text-sm">
        Information presented here, including use of the calculator, is strictly for educational purposes and should not be used for any other purpose.
      </p>
      <p className="text-center text-xs">
        © Sami Safadi, MD
      </p>
    </div>
  );
}
