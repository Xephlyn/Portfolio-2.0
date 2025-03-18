"use client";

import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import BrickBreaker from "../BrickBreaker";

export default function BrickBreakerPage() {
  const router = useRouter();
  const [isPaused, setIsPaused] = useState(false);
  const gameStateRef = useRef({
    isStarted: false,
    isGameOver: false,
    score: 0,
  });

  // This effect syncs the game state from the BrickBreaker component
  const updateGameState = (state) => {
    gameStateRef.current = state;

    // Handle pause toggle request from spacebar
    if (state.requestPauseToggle) {
      setIsPaused((prev) => !prev);
    }
  };

  const navigateBack = () => {
    router.push("/projects/games");
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleRestart = () => {
    // We'll pass this to the BrickBreaker component
    if (typeof window !== "undefined") {
      // Create a custom event that BrickBreaker will listen for
      const restartEvent = new Event("restartBrickBreaker");
      window.dispatchEvent(restartEvent);

      // Ensure game is not paused when restarting
      setIsPaused(false);
    }
  };

  return (
    <div className="mt-20 min-h-screen bg-gradient-to-b from-gray-400 to-black dark:from-gray-900 dark:to-black text-gray-200 dark:text-gray-200">
      {/* Header Section */}
      <header className="max-w-6xl mx-auto pt-16 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <Button
            onClick={navigateBack}
            className="px-6 py-2 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-md shadow-md"
          >
            Back to Games
          </Button>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 dark:bg-gradient-to-r dark:from-blue-700 dark:to-purple-200">
            Brick Breaker
          </h1>
          <div className="w-24"></div> {/* Empty div for spacing */}
        </div>
      </header>

      {/* Game Instructions */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="bg-gray-800/50 dark:bg-gray-800/50 rounded-xl p-6 shadow-md">
          <h2 className="text-xl font-bold mb-4 text-purple-300">
            How to Play
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <div className="mb-2 text-center">
                <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm mb-2">
                  Movement
                </span>
                <p>
                  Move the paddle with your mouse or use the left and right
                  arrow keys
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-2 text-center">
                <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm mb-2">
                  Objective
                </span>
                <p>Break all the bricks by bouncing the ball off your paddle</p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-2 text-center">
                <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm mb-2">
                  Challenge
                </span>
                <p>The ball moves faster as you hit more bricks and walls</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Game Container */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-gray-800/50 dark:bg-gray-800/50 rounded-xl shadow-2xl overflow-hidden p-6">
          <BrickBreaker />
        </div>
      </section>

      {/* Game Details */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-800/30 dark:bg-gray-800/30 rounded-xl mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-6 text-purple-400 dark:text-purple-400">
            About The Game
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-300 dark:text-gray-300">
            Brick Breaker is a classic arcade game that demonstrates several key
            web development concepts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800/50 dark:bg-gray-800/50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3 text-purple-300 dark:text-purple-300">
              Technical Implementation
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>HTML5 Canvas for rendering game elements</li>
              <li>React Hooks for state management</li>
              <li>Custom collision detection algorithms</li>
              <li>Dynamic difficulty progression</li>
              <li>Responsive controls for both mouse and keyboard</li>
            </ul>
          </div>
          <div className="bg-gray-800/50 dark:bg-gray-800/50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3 text-purple-300 dark:text-purple-300">
              Development Process
            </h3>
            <p className="mb-4">
              This game was built with a focus on creating smooth animations and
              responsive controls while maintaining good performance.
            </p>
            <p>
              Key challenges included implementing physically accurate ball
              bouncing mechanics and creating a difficulty curve that increases
              challenge without becoming frustrating.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
