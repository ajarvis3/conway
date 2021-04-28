import React from "react";
import "./App.css";
import { RecoilRoot } from "recoil";
import Control from "./control/Control";
import Game from "./conway/Game";

function App() {
   return (
      <RecoilRoot>
         <div className="App">
            <Control />
            <Game />
         </div>
      </RecoilRoot>
   );
}

export default App;
