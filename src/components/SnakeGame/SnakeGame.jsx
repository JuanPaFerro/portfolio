import ArrowKeyButton from "@components/ArrowKeyButton/ArrowKeyButton";
import React, { useRef, useEffect, useState } from "react";

const SnakeGame = () => {
  const [runGame, setRunGame] = useState(false);
  const [gameStatus, setGameStatus] = useState("");
  const [score, setScore] = useState(0);
  const canvasRef = useRef();

  const handleGame = (flag) => {
    setGameStatus("");
    window.localStorage.setItem("runGame", flag);
    setRunGame(flag);
    if (flag) {
      window.localStorage.setItem("score", 0);
      setScore(0);
    }
  };
  const increaseScore = () => {
    const newScore = Number(window.localStorage.getItem("score")) + 1;
    setScore(newScore);
    window.localStorage.setItem("score", newScore);
  };

  let snake = [
    { x: 110, y: 240 },
    { x: 110, y: 250 },
    { x: 110, y: 260 },
    { x: 110, y: 270 },
    { x: 110, y: 280 },
    { x: 110, y: 290 },
  ];

  // Horizontal velocity
  let food_x;
  let food_y;
  let dx = 0;
  // Vertical velocity
  let dy = -10;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    window.addEventListener("keydown", change_direction);

    function change_direction(event) {
      const LEFT_KEY = 37;
      const RIGHT_KEY = 39;
      const UP_KEY = 38;
      const DOWN_KEY = 40;

      // Prevent the snake from reversing
      const keyPressed = event.keyCode;
      const goingUp = dy === -10;
      const goingDown = dy === 10;
      const goingRight = dx === 10;
      const goingLeft = dx === -10;
      if (keyPressed === LEFT_KEY && !goingRight) {
        dx = -10;
        dy = 0;
      }
      if (keyPressed === UP_KEY && !goingDown) {
        dx = 0;
        dy = -10;
      }
      if (keyPressed === RIGHT_KEY && !goingLeft) {
        dx = 10;
        dy = 0;
      }
      if (keyPressed === DOWN_KEY && !goingUp) {
        dx = 0;
        dy = 10;
      }
    }
    const drawSnake = () => {
      snake.forEach(drawSnakePart);
    };
    function drawSnakePart(snakePart) {
      // Set the color of the snake part
      context.fillStyle = "#43D9AD";
      // Set the border color of the snake part
      context.strokestyle = "#011221";
      // Draw a "filled" rectangle to represent the snake part at the coordinates
      // the part is located
      context.fillRect(snakePart.x, snakePart.y, 10, 10);
      // Draw a border around the snake part
      context.strokeRect(snakePart.x, snakePart.y, 10, 10);
    }
    function clear_board() {
      //  Select the color to fill the drawing
      context.fillStyle = "#011221";
      //  Select the color for the border of the canvas
      context.strokestyle = "#43D9AD";
      // Draw a "filled" rectangle to cover the entire canvas
      context.fillRect(0, 0, context.canvas.width, context.canvas.height);
      // Draw a "border" around the entire canvas
      context.strokeRect(0, 0, context.canvas.width, context.canvas.height);
    }

    if (gameStatus === "") {
      drawSnake();
    }

    function move_snake() {
      //Teleport snake to the other side of canvas
      const hitLeftWall = snake[0].x < 0;
      const hitRightWall = snake[0].x > snakeboard.width - 10;
      const hitToptWall = snake[0].y < 0;
      const hitBottomWall = snake[0].y > snakeboard.height - 10;
      if (hitLeftWall) snake[0].x = 230;
      if (hitRightWall) snake[0].x = 0;
      if (hitToptWall) snake[0].y = 430;
      if (hitBottomWall) snake[0].y = 0;

      // Create the new Snake's head
      const head = { x: snake[0].x + dx, y: snake[0].y + dy };
      // Add the new head to the beginning of snake body
      snake.unshift(head);
      const has_eaten_food = snake[0].x === food_x && snake[0].y === food_y;
      if (has_eaten_food) {
        increaseScore();

        // Generate new food location
        gen_food();
      } else {
        // Remove the last part of snake body
        snake.pop();
      }
    }
    function has_game_ended() {
      if (window.localStorage.getItem("runGame") === "false") {
        return true;
      }
      if (Number(window.localStorage.getItem("score")) === 10) {
        setGameStatus("win");
        return true;
      }
      for (let i = 4; i < snake.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
          setGameStatus("lost");
          return true;
        }
      }
    }
    const main = () => {
      if (has_game_ended()) {
        setRunGame(false);
        return;
      }

      setTimeout(() => {
        clear_board();
        drawFood();
        move_snake();
        drawSnake();
        // Repeat
        main();
      }, 100);
    };
    function drawFood() {
      context.fillStyle = "#43D9AD";
      context.strokestyle = "#011221";
      context.fillRect(food_x, food_y, 10, 10);
      context.strokeRect(food_x, food_y, 10, 10);
    }
    function random_food(min, max) {
      return Math.round((Math.random() * (max - min) + min) / 10) * 10;
    }
    function gen_food() {
      // Generate a random number the food x-coordinate
      food_x = random_food(0, snakeboard.width - 10);
      // Generate a random number for the food y-coordinate
      food_y = random_food(0, snakeboard.height - 10);
      // if the new food location is where the snake currently is, generate a new food location
      snake.forEach(function has_snake_eaten_food(part) {
        const has_eaten = part.x == food_x && part.y == food_y;
        if (has_eaten) gen_food();
      });
    }
    if (runGame) {
      main();
      gen_food();
    }
  }, [runGame]);

  return (
    <div className="w-[510px] h-[475px] bg-gradient-to-br from-[#175553B2] to-[#43D9AD17] border border-lines flex px-6 justify-between items-center rounded-xl">
      <div
        id="canvasHolder"
        className="h-[430px] w-[230px] rounded-xl border relative overflow-hidden bg-darker-blue z-10"
      >
        {gameStatus !== "" && !runGame && (
          <div className="absolute bottom-16 w-full flex flex-col items-center space-y-6 transition duration-500">
            <div className="bg-[#011627] py-1 font-medium text-[24px] w-full flex justify-center">
              <p className="text-gradient-green">
                {gameStatus === "win" ? "WELL DONE!" : "GAME OVER!"}
              </p>
            </div>
            <button
              className={`text-snippets ${
                gameStatus === "win" ? "text-white" : "text-gray"
              }`}
              onClick={() => handleGame(true)}
            >
              {gameStatus === "win" ? "play" : "start"}-again
            </button>
          </div>
        )}
        {gameStatus === "" && !runGame && (
          <div className="absolute bottom-20 w-full flex justify-center">
            <button
              className="text-black font-medium text-snippets  bg-orange py-2 px-3 rounded-lg"
              onClick={() => handleGame(true)}
            >
              start-game
            </button>
          </div>
        )}
        <canvas
          ref={canvasRef}
          id="snakeboard"
          width="230"
          height="430"
        ></canvas>
      </div>
      <div className="h-[430px] w-[230px] flex flex-col items-end relative">
        <button
          className="text-white absolute bottom-0 right-0 border rounded-lg text-snippets px-3 py-2 font-medium"
          onClick={() => handleGame(false)}
        >
          skip
        </button>

        <div className="w-48 h-40 p-4 rounded-lg flex flex-col justify-between space-y-2 bg-[#01142330]">
          <div className="text-white text-snippets">
            <p>{`// use keyboard`}</p>
            <p>{`// arrows to play`}</p>
          </div>
          <div className="grid grid-cols-3 grid-rows-2 gap-2 z-10">
            <ArrowKeyButton direction="up" />
            <ArrowKeyButton direction="left" />
            <ArrowKeyButton direction="down" />
            <ArrowKeyButton direction="right" />
          </div>
        </div>
        <div className="w-48 h-24 p-4 rounded-lg flex flex-col justify-between space-y-4">
          <div className="text-white text-snippets">
            <p>{`// food left`}</p>
          </div>
          <div className="z-10 space-y-4">
            <div className="flex justify-between">
              <div
                className={`h-[10px] w-[10px] bg-${
                  score >= 1
                    ? "gradient-green shadow-[0px_0px_19px_2px_#43D9AD]"
                    : "lines"
                } rounded-xl`}
              ></div>
              <div
                className={`h-[10px] w-[10px] bg-${
                  score >= 2
                    ? "gradient-green shadow-[0px_0px_19px_2px_#43D9AD]"
                    : "lines"
                } rounded-xl`}
              ></div>
              <div
                className={`h-[10px] w-[10px] bg-${
                  score >= 3
                    ? "gradient-green shadow-[0px_0px_19px_2px_#43D9AD]"
                    : "lines"
                } rounded-xl`}
              ></div>
              <div
                className={`h-[10px] w-[10px] bg-${
                  score >= 4
                    ? "gradient-green shadow-[0px_0px_19px_2px_#43D9AD]"
                    : "lines"
                } rounded-xl`}
              ></div>
              <div
                className={`h-[10px] w-[10px] bg-${
                  score >= 5
                    ? "gradient-green shadow-[0px_0px_19px_2px_#43D9AD]"
                    : "lines"
                } rounded-xl`}
              ></div>
            </div>
            <div className="flex justify-between">
              <div
                className={`h-[10px] w-[10px] bg-${
                  score >= 6
                    ? "gradient-green shadow-[0px_0px_19px_2px_#43D9AD]"
                    : "lines"
                } rounded-xl`}
              ></div>
              <div
                className={`h-[10px] w-[10px] bg-${
                  score >= 7
                    ? "gradient-green shadow-[0px_0px_19px_2px_#43D9AD]"
                    : "lines"
                } rounded-xl`}
              ></div>
              <div
                className={`h-[10px] w-[10px] bg-${
                  score >= 8
                    ? "gradient-green shadow-[0px_0px_19px_2px_#43D9AD]"
                    : "lines"
                } rounded-xl`}
              ></div>
              <div
                className={`h-[10px] w-[10px] bg-${
                  score >= 9
                    ? "gradient-green shadow-[0px_0px_19px_2px_#43D9AD]"
                    : "lines"
                } rounded-xl`}
              ></div>
              <div
                className={`h-[10px] w-[10px] bg-${
                  score >= 10
                    ? "gradient-green shadow-[0px_0px_19px_2px_#43D9AD]"
                    : "lines"
                } rounded-xl`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnakeGame;
