import { useCallback, useEffect, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import { heightState, runState, widthState } from "../recoil-state";
import useInterval from "./hooks/useInterval";
import Conway from "./types/Conway";

const Game = () => {
   const width = useRecoilValue(widthState);
   const height = useRecoilValue(heightState);
   const run = useRecoilValue(runState);

   const boxWidth = useRef(0);
   const boxHeight = useRef(0);

   const canvasRef = useRef<HTMLCanvasElement>(null);
   const runRef = useRef(() => {});
   const [game, setGame] = useState<Conway>(new Conway(width, height));

   useEffect(() => {
      if (!canvasRef || !canvasRef.current) return;
      const ctx = canvasRef.current.getContext("2d");
      ctx!.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      ctx!.lineWidth = 3;
      for (var h = 0; h < game.height; h++) {
         for (var w = 0; w < game.width; w++) {
            const fillColor = game.alive[h][w] ? "#ffffff" : "#000000";
            // const borderColor = game.alive[h][w] ? "#000000" : "#ffffff";
            const borderColor = "#808080";
            ctx!.fillStyle = fillColor;
            ctx!.strokeStyle = borderColor;
            const x = w * boxWidth.current;
            const y = h * boxHeight.current;
            ctx!.fillRect(x, y, boxWidth.current, boxHeight.current);
            ctx!.beginPath();
            ctx!.rect(x, y, boxWidth.current, boxHeight.current);
            ctx!.stroke();
         }
      }
   }, [game, width, height]);

   useEffect(() => {
      if (!canvasRef) return;
      setGame(new Conway(width, height));
      boxWidth.current = canvasRef.current!.width / width;
      boxHeight.current = canvasRef.current!.height / height;
   }, [width, height]);

   useEffect(() => {
      if (run) {
         runRef.current = () => {
            setGame(game.runRound());
         };
      } else {
         runRef.current = () => {};
      }
   });

   useInterval(() => {
      runRef.current();
   }, 1000);

   const onClick = useCallback(
      (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
         if (!canvasRef || !canvasRef.current) return;
         const x = Math.floor(event.nativeEvent.offsetX / boxWidth.current);
         const y = Math.floor(event.nativeEvent.offsetY / boxHeight.current);
         setGame(game.toggleAlive(y, x));
      },
      [game]
   );

   return (
      <canvas
         id="conway-game"
         ref={canvasRef}
         onClick={onClick}
         width={window.innerHeight * 0.9}
         height={window.innerHeight * 0.9}
      ></canvas>
   );
};

export default Game;
