import { useRecoilState } from "recoil";
import { runState } from "../recoil-state";

const RunButton = () => {
   const [run, setRun] = useRecoilState(runState);

   return <button onClick={() => setRun(!run)}>{run ? "Stop" : "Run"}</button>;
};

export default RunButton;
