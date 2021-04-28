import { SetterOrUpdater } from "recoil";

interface IControlProps {
   state: number;
   setState: SetterOrUpdater<number>;
   label: string;
}

export default IControlProps;
