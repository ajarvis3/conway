import React from "react";
import { useRecoilState } from "recoil";
import { heightState, widthState } from "../recoil-state";
import RunButton from "./RunButton";
import IControlProps from "./types/ControlProps";
import validator from "validator";

const ControlItem = (props: IControlProps) => {
   const { state, setState, label } = props;
   const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (validator.isInt(event.target.value)) {
         setState(parseInt(event.target.value));
      } else {
         setState(0);
      }
   };

   return (
      <span>
         {label}:
         <input type="number" onChange={onChange} value={state} />
      </span>
   );
};

const Control = () => {
   const [width, setWidth] = useRecoilState(widthState);
   const [height, setHeight] = useRecoilState(heightState);

   return (
      <div id="control">
         <ControlItem state={width} setState={setWidth} label="Width" />
         <ControlItem state={height} setState={setHeight} label="Height" />
         <RunButton />
      </div>
   );
};

export default Control;
