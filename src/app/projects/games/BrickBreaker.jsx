"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const BrickBreaker = ({ isPaused, updateGameState }) => {
  const canvasRef = useRef(null);
  const bricksRef = useRef([]);
  const animationFrameIdRef = useRef(null);
  const ballRef = useRef({
    x: 0,
    y: 0,
    dx: 4,
    dy: -4,
    radius: 8,
    baseSpeed: 4,
  });
  const paddleRef = useRef({ width: 75, height: 10, x: 0 });
  const collisionCountRef = useRef(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const previousPausedStateRef = useRef(isPaused);

  // Configuration
  const SPEED_INCREASE_THRESHOLD = 6; // Number of collisions before speed increase
  const SPEED_INCREASE_AMOUNT = 0.2; // How much to increase speed by

  const initializeBricks = () => {
    const brickRowCount = 5;
    const brickColumnCount = 8;
    const bricks = [];
    for (let c = 0; c < brickColumnCount; c++) {
      bricks[c] = [];
      for (let r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
      }
    }
    bricksRef.current = bricks;
  };

  const initializeGame = () => {
    const canvas = canvasRef.current;
    ballRef.current = {
      x: canvas.width / 2,
      y: canvas.height - 30,
      dx: 4,
      dy: -4,
      radius: 8,
      baseSpeed: 4,
    };
    paddleRef.current = {
      width: 75,
      height: 10,
      x: canvas.width / 2 - 75 / 2,
    };
    collisionCountRef.current = 0;
    initializeBricks();
  };

  const handleSpeedIncrease = () => {
    const ball = ballRef.current;
    collisionCountRef.current++;

    if (collisionCountRef.current % SPEED_INCREASE_THRESHOLD === 0) {
      // Maintain direction but increase speed
      const currentSpeed = Math.sqrt(ball.dx * ball.dx + ball.dy * ball.dy);
      const newSpeed = currentSpeed + SPEED_INCREASE_AMOUNT;
      const ratio = newSpeed / currentSpeed;

      ball.dx *= ratio;
      ball.dy *= ratio;
    }
  };

  const calculatePaddleCollisionAngle = (ball, paddle, canvas) => {
    // Calculate where on the paddle the ball hit
    const relativeIntersectX = ball.x - paddle.x - paddle.width / 2;
    const normalizedIntersect = relativeIntersectX / (paddle.width / 2);

    // Calculate incoming angle (in radians)
    const incomingAngle = Math.atan2(-ball.dy, ball.dx);
    // Convert to degrees and normalize to 0-360
    const incomingDegrees = ((incomingAngle * 180) / Math.PI + 360) % 360;

    // If incoming angle is between 45° and 155°, calculate new angle
    if (incomingDegrees >= 45 && incomingDegrees <= 155) {
      // Calculate new angle based on where the ball hit the paddle
      // normalizedIntersect is between -1 and 1
      // Convert to angle between 45° and 135°
      const bounceAngle = normalizedIntersect * 45; // This gives us -45 to 45 degrees

      // Convert angle to velocity components
      const speed = Math.sqrt(ball.dx * ball.dx + ball.dy * ball.dy);
      const angleRad = (bounceAngle * Math.PI) / 180;

      ball.dx = speed * Math.sin(angleRad);
      ball.dy = -speed * Math.cos(angleRad);
    } else {
      // For shallow angles, just reverse vertical direction
      ball.dy = -ball.dy;
    }
  };

  // Handle restart from parent component
  useEffect(() => {
    const handleRestart = () => {
      setGameStarted(false);
      setIsGameOver(false);
      setScore(0);
      setTimeout(() => {
        startNewGame();
      }, 0);
    };

    window.addEventListener("restartBrickBreaker", handleRestart);

    return () => {
      window.removeEventListener("restartBrickBreaker", handleRestart);
    };
  }, []);

  // Handle spacebar for pause
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.code === "Space" && gameStarted && !isGameOver) {
        // Only trigger if game is in progress
        if (updateGameState) {
          updateGameState({
            isStarted: gameStarted,
            isGameOver: isGameOver,
            score: score,
            requestPauseToggle: true,
          });
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [gameStarted, isGameOver, score, updateGameState]);

  // Handle pause state changes
  useEffect(() => {
    if (previousPausedStateRef.current !== isPaused) {
      previousPausedStateRef.current = isPaused;

      if (isPaused) {
        // Cancel the animation frame when paused
        if (animationFrameIdRef.current) {
          cancelAnimationFrame(animationFrameIdRef.current);
        }
      } else if (gameStarted && !isGameOver) {
        // Resume the game loop if game is active
        // Don't increase speed when resuming
        startGameLoop();
      }
    }
  }, [isPaused, gameStarted, isGameOver]);

  // Update parent component with game state
  useEffect(() => {
    if (updateGameState) {
      updateGameState({
        isStarted: gameStarted,
        isGameOver: isGameOver,
        score: score,
      });
    }
  }, [gameStarted, isGameOver, score, updateGameState]);

  const startGameLoop = () => {
    if (!canvasRef.current || isPaused) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Store the current time to manage frame rate
    let lastTime = performance.now();
    // Target milliseconds per frame (60 FPS)
    const targetFrameTime = 16.67;

    const ball = ballRef.current;
    const paddle = paddleRef.current;

    // Constants for bricks
    const brickWidth = 75;
    const brickHeight = 20;
    const brickPadding = 10;
    const brickOffsetTop = 30;
    const brickOffsetLeft = 30;

    // Event listeners for paddle movement
    let rightPressed = false;
    let leftPressed = false;

    const keyDownHandler = (e) => {
      if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = true;
      } else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = true;
      }
    };

    const keyUpHandler = (e) => {
      if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = false;
      } else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = false;
      }
    };

    const mouseMoveHandler = (e) => {
      const relativeX = e.clientX - canvas.getBoundingClientRect().left;
      if (relativeX > 0 && relativeX < canvas.width) {
        paddle.x = relativeX - paddle.width / 2;
      }
    };

    // Collision detection
    const collisionDetection = () => {
      for (let c = 0; c < bricksRef.current.length; c++) {
        for (let r = 0; r < bricksRef.current[c].length; r++) {
          const b = bricksRef.current[c][r];
          if (b.status === 1) {
            if (
              ball.x > b.x &&
              ball.x < b.x + brickWidth &&
              ball.y > b.y &&
              ball.y < b.y + brickHeight
            ) {
              ball.dy = -ball.dy;
              b.status = 0;
              setScore((prevScore) => prevScore + 1);
              handleSpeedIncrease();
            }
          }
        }
      }
    };

    // Drawing functions
    const drawBall = () => {
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
      ctx.fillStyle = "#0095DD";
      ctx.fill();
      ctx.closePath();
    };

    const drawPaddle = () => {
      ctx.beginPath();
      ctx.rect(
        paddle.x,
        canvas.height - paddle.height,
        paddle.width,
        paddle.height
      );
      ctx.fillStyle = "#0095DD";
      ctx.fill();
      ctx.closePath();
    };

    const drawBricks = () => {
      for (let c = 0; c < bricksRef.current.length; c++) {
        for (let r = 0; r < bricksRef.current[c].length; r++) {
          if (bricksRef.current[c][r].status === 1) {
            const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
            const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
            bricksRef.current[c][r].x = brickX;
            bricksRef.current[c][r].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, brickWidth, brickHeight);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
          }
        }
      }
    };

    const drawScore = () => {
      ctx.font = "16px Arial";
      ctx.fillStyle = "#FFFFFF";
      ctx.fillText(`Score: ${score}`, canvas.width - 80, 20);
    };

    const draw = (timestamp) => {
      if (!gameStarted || isGameOver || isPaused) return;

      // Calculate time delta and only update if enough time has passed
      const deltaTime = timestamp - lastTime;

      // Clear and draw every frame
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBricks();
      drawBall();
      drawPaddle();
      drawScore();
      collisionDetection();

      // Only update physics if enough time has passed to maintain consistent speed
      if (deltaTime >= targetFrameTime) {
        // Ball collision with walls
        if (
          ball.x + ball.dx > canvas.width - ball.radius ||
          ball.x + ball.dx < ball.radius
        ) {
          ball.dx = -ball.dx;
          handleSpeedIncrease();
        }
        if (ball.y + ball.dy < ball.radius) {
          ball.dy = -ball.dy;
          handleSpeedIncrease();
        } else if (ball.y + ball.dy > canvas.height - ball.radius) {
          if (ball.x > paddle.x && ball.x < paddle.x + paddle.width) {
            calculatePaddleCollisionAngle(ball, paddle, canvas);
            handleSpeedIncrease();
          } else {
            setIsGameOver(true);
            setGameStarted(false);
            return;
          }
        }

        // Paddle movement
        if (rightPressed && paddle.x < canvas.width - paddle.width) {
          paddle.x += 7;
        } else if (leftPressed && paddle.x > 0) {
          paddle.x -= 7;
        }

        // Move the ball based on its velocity
        ball.x += ball.dx;
        ball.y += ball.dy;

        // Update last frame time
        lastTime = timestamp;
      }

      animationFrameIdRef.current = requestAnimationFrame(draw);
    };

    // Event listeners
    document.addEventListener("keydown", keyDownHandler);
    document.addEventListener("keyup", keyUpHandler);
    document.addEventListener("mousemove", mouseMoveHandler);

    // Start game loop
    animationFrameIdRef.current = requestAnimationFrame(draw);

    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
      document.removeEventListener("keydown", keyDownHandler);
      document.removeEventListener("keyup", keyUpHandler);
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  };

  // Main game loop effect
  useEffect(() => {
    if (gameStarted && !isGameOver && !isPaused) {
      if (score === 0) {
        initializeGame();
      }

      return startGameLoop();
    }
  }, [gameStarted, isGameOver, score, isPaused]);

  // Draw pause/game over screen
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (!gameStarted || isGameOver || isPaused) {
      // If the game is paused but started, draw the current state first
      if (isPaused && gameStarted && !isGameOver) {
        // Draw existing game elements
        const ball = ballRef.current;
        const paddle = paddleRef.current;

        // Constants for bricks
        const brickWidth = 75;
        const brickHeight = 20;
        const brickPadding = 10;
        const brickOffsetTop = 30;
        const brickOffsetLeft = 30;

        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw bricks
        for (let c = 0; c < bricksRef.current.length; c++) {
          for (let r = 0; r < bricksRef.current[c].length; r++) {
            if (bricksRef.current[c][r].status === 1) {
              const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
              const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
              ctx.beginPath();
              ctx.rect(brickX, brickY, brickWidth, brickHeight);
              ctx.fillStyle = "#0095DD";
              ctx.fill();
              ctx.closePath();
            }
          }
        }

        // Draw ball
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();

        // Draw paddle
        ctx.beginPath();
        ctx.rect(
          paddle.x,
          canvas.height - paddle.height,
          paddle.width,
          paddle.height
        );
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();

        // Draw score
        ctx.font = "16px Arial";
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText(`Score: ${score}`, canvas.width - 80, 20);
      } else {
        // For not started or game over, just clear the canvas for the overlay
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }

      // Draw overlay
      ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw message
      ctx.font = "30px Arial";
      ctx.fillStyle = "#FFFFFF";
      ctx.textAlign = "center";

      if (isPaused && gameStarted) {
        ctx.fillText("GAME PAUSED", canvas.width / 2, canvas.height / 2);
        ctx.font = "16px Arial";
        ctx.fillText(
          "Click 'Resume Game' to continue",
          canvas.width / 2,
          canvas.height / 2 + 40
        );
      } else if (isGameOver) {
        ctx.fillText("GAME OVER", canvas.width / 2, canvas.height / 2 - 30);
        ctx.font = "20px Arial";
        ctx.fillText(
          `Final Score: ${score}`,
          canvas.width / 2,
          canvas.height / 2 + 10
        );
        ctx.font = "16px Arial";
        ctx.fillText(
          "Click 'Start Game' to play again",
          canvas.width / 2,
          canvas.height / 2 + 50
        );
      } else if (!gameStarted) {
        ctx.fillText("BRICK BREAKER", canvas.width / 2, canvas.height / 2 - 30);
        ctx.font = "16px Arial";
        ctx.fillText(
          "Break all the bricks to win!",
          canvas.width / 2,
          canvas.height / 2 + 10
        );
        ctx.fillText(
          "Use arrow keys or mouse to move the paddle",
          canvas.width / 2,
          canvas.height / 2 + 40
        );
      }
    }
  }, [gameStarted, isGameOver, isPaused, score]);

  const startNewGame = () => {
    setGameStarted(true);
    setIsGameOver(false);
    setScore(0);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-xl font-bold">Score: {score}</div>
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        className="border border-gray-300 rounded bg-gray-900"
      />
      {!gameStarted && (
        <div className="text-center">
          {isGameOver && (
            <div className="text-xl text-red-500 mb-4">
              Game Over! Score: {score}
            </div>
          )}
          <Button
            onClick={startNewGame}
            className="mt-4 bg-blue-500 hover:bg-blue-600"
          >
            {isGameOver ? "Play Again" : "Start Game"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default BrickBreaker;
