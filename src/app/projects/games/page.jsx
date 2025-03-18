"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";

export default function GamesPage() {
  const router = useRouter();

  const navigateToBrickBreaker = () => {
    router.push("/projects/games/brickbreaker");
  };

  return (
    <div className="mt-20 min-h-screen bg-gradient-to-b from-gray-400 to-black dark:from-gray-900 dark:to-black text-gray-200 dark:text-gray-200">
      {/* Header Section - Styled like Technical page */}
      <header className="max-w-6xl mx-auto pt-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-6 dark:bg-gradient-to-r dark:from-blue-700 dark:to-purple-200">
            Interactive Games
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 dark:text-gray-300">
            Exploring web development through interactive game design and
            implementation. These projects showcase the power of modern web
            technologies in creating engaging experiences.
          </p>

          <div className="mt-10">
            <Button
              onClick={navigateToBrickBreaker}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-xl font-medium text-white hover:from-blue-600 hover:to-purple-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Try Brick Breaker Now
            </Button>
          </div>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="mb-12">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-blue-700 dark:to-purple-200 bg-gradient-to-r from-blue-400 to-purple-600">
              Game Collection
            </h2>
            <p className="text-lg mb-4">
              Each game demonstrates different aspects of frontend development,
              from DOM manipulation to canvas rendering and state management.
              These projects serve as both entertaining experiences and
              practical showcases of web development techniques.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm">
                Canvas API
              </span>
              <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm">
                React Hooks
              </span>
              <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm">
                Game Physics
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Game Card 1 */}
            <div onClick={navigateToBrickBreaker} className="cursor-pointer">
              <div className="bg-gray-800/50 dark:bg-gray-800/50 rounded-xl shadow-xl overflow-hidden transform hover:scale-[1.03] transition-transform duration-300">
                <img
                  src="/api/placeholder/400/200"
                  alt="Brick Breaker"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-purple-300 dark:text-purple-300">
                    Brick Breaker
                  </h3>
                  <p className="text-gray-300 dark:text-gray-300">
                    Classic arcade game where you break bricks using a ball and
                    paddle. Can you clear all the bricks?
                  </p>
                  <div className="mt-4 flex gap-2">
                    <span className="inline-block px-2 py-1 bg-purple-900/30 text-purple-300 rounded-full text-xs">
                      Canvas
                    </span>
                    <span className="inline-block px-2 py-1 bg-purple-900/30 text-purple-300 rounded-full text-xs">
                      Physics
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Game Card 2 */}
            <Link href="/games/space-explorer">
              <div className="bg-gray-800/50 dark:bg-gray-800/50 rounded-xl shadow-xl overflow-hidden transform hover:scale-[1.03] transition-transform duration-300">
                <img
                  src="/api/placeholder/400/200"
                  alt="Space Explorer"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-purple-300 dark:text-purple-300">
                    Space Explorer
                  </h3>
                  <p className="text-gray-300 dark:text-gray-300">
                    Navigate through the cosmos, discover new planets, and build
                    your own space empire.
                  </p>
                  <div className="mt-4 flex gap-2">
                    <span className="inline-block px-2 py-1 bg-purple-900/30 text-purple-300 rounded-full text-xs">
                      WebGL
                    </span>
                    <span className="inline-block px-2 py-1 bg-purple-900/30 text-purple-300 rounded-full text-xs">
                      Procedural
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Section - Game Development Philosophy */}
      <section className="bg-gray-800/30 dark:bg-gray-800/30 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-400 dark:text-purple-400">
              Game Development Philosophy
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-300 dark:text-gray-300">
              Building games for the web combines technical challenge with
              creative expression
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-800/50 dark:bg-gray-800/50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-purple-300 dark:text-purple-300">
                Learning Through Creation
              </h3>
              <p>
                Game development provides a practical, engaging way to master
                complex programming concepts and improve problem-solving skills.
              </p>
            </div>
            <div className="bg-gray-800/50 dark:bg-gray-800/50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-purple-300 dark:text-purple-300">
                Technical Showcase
              </h3>
              <p>
                Each game demonstrates proficiency with different web
                technologies, from DOM manipulation to advanced canvas rendering
                techniques.
              </p>
            </div>
            <div className="bg-gray-800/50 dark:bg-gray-800/50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-purple-300 dark:text-purple-300">
                User Experience Focus
              </h3>
              <p>
                Games must be intuitive, responsive, and enjoyable, making them
                perfect projects for honing UX design and implementation skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Explore More Interactive Experiences
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-300 dark:text-gray-300 mb-10">
            Check back regularly as new games and interactive experiences are
            added
          </p>
          <Button
            onClick={navigateToBrickBreaker}
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-xl font-medium text-white hover:from-blue-600 hover:to-purple-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Play Brick Breaker
          </Button>
        </div>
      </section>
    </div>
  );
}
