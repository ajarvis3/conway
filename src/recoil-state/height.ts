import { atom } from "recoil";

const heightState = atom({
   key: "heightState", // unique ID (with respect to other atoms/selectors)
   default: 5, // default value (aka initial value)
});

export default heightState;
