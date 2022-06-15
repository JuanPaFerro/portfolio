import React, { useRef, useEffect } from "react";

const SnakeGame = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle = "#011221";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
  }, []);

  return (
    <div className="w-[510px] h-[475px] border border-lines flex px-4 justify-between items-center rounded-xl">
      <div className="h-[430px] w-[230px] rounded-xl border overflow-hidden z-10">
        <canvas
          ref={canvasRef}
          id="snakeboard"
          width="230"
          height="430"
        ></canvas>
      </div>
      <div className="h-[430px] w-[230px]"></div>
    </div>
  );
};

export default SnakeGame;
