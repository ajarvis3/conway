import { atom } from "recoil";

const runState = atom({
   key: "runState",
   default: false,
});

export default runState;
