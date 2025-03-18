"use client";

import { useState } from "react";
import Link from "next/link";

export default function SkillsPage() {
  const [hoverCard, setHoverCard] = useState(null);

  const skillCategories = [
    {
      id: "design",
      title: "Design",
      description: "Custom design approaches for different brand identities.",
      link: "/skills/design",
      bgColor: "from-purple-600/20 to-pink-600/20",
      borderColor: "border-purple-500",
      iconColor: "text-pink-400",
      icon: "🎨",
    },
    {
      id: "technical",
      title: "Technical Excellence",
      description: "Interactive experiences and data-driven development.",
      link: "/skills/technical",
      bgColor: "from-blue-600/20 to-cyan-600/20",
      borderColor: "border-blue-500",
      iconColor: "text-blue-400",
      icon: "💻",
    },
    {
      id: "development",
      title: "Full Stack Development",
      description: "JavaScript/TypeScript, Next.js, and modern frameworks.",
      link: "/skills/resume",
      bgColor: "from-emerald-600/20 to-teal-600/20",
      borderColor: "border-emerald-500",
      iconColor: "text-emerald-400",
      icon: "⚡",
    },
    {
      id: "leadership",
      title: "Team Leadership",
      description: "Project management and team collaboration.",
      link: "/skills/resume",
      bgColor: "from-amber-600/20 to-yellow-600/20",
      borderColor: "border-amber-500",
      iconColor: "text-amber-400",
      icon: "👥",
    },
  ];

  return (
    <div className="mt-20 min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-white pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-16 pt-10">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 mb-6">
            My Skills & Expertise
          </h1>
          <p className="text-xl max-w-3xl mx-auto dark:text-gray-300 text-gray-600">
            Explore the different areas of my expertise and discover how I can
            help bring your ideas to life.
          </p>
        </header>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category) => (
            <Link href={category.link} key={category.id}>
              <div
                className={`relative rounded-xl overflow-hidden border border-opacity-30 ${category.borderColor} bg-gradient-to-br ${category.bgColor} h-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl`}
                onMouseEnter={() => setHoverCard(category.id)}
                onMouseLeave={() => setHoverCard(null)}
              >
                {/* Corner Accent */}
                <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-br from-white/5 to-white/10 rounded-bl-full"></div>

                {/* Content */}
                <div className="p-8 h-full flex flex-col">
                  <div className={`text-4xl mb-4 ${category.iconColor}`}>
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-bold mb-3">{category.title}</h2>
                  <p className="text-lg mb-6 dark:text-gray-300 text-gray-700 flex-grow">
                    {category.description}
                  </p>
                  <div
                    className={`inline-flex items-center text-sm font-medium ${category.iconColor} mt-auto`}
                  >
                    Explore more
                    <svg
                      className={`ml-2 w-5 h-5 transition-transform duration-300 ${
                        hoverCard === category.id ? "translate-x-1" : ""
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional Highlights */}
        <section className="bg-white/10 dark:bg-gray-800/30 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            Why Work With Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 dark:bg-gray-700/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-500 dark:text-blue-400">
                User-Focused Approach
              </h3>
              <p className="dark:text-gray-300 text-gray-700">
                Creating intuitive, accessible experiences that prioritize user
                needs and drive engagement.
              </p>
            </div>
            <div className="bg-white/10 dark:bg-gray-700/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-purple-500 dark:text-purple-400">
                Technical Versatility
              </h3>
              <p className="dark:text-gray-300 text-gray-700">
                Adapting the right technologies and approaches to solve your
                specific challenges.
              </p>
            </div>
            <div className="bg-white/10 dark:bg-gray-700/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-emerald-500 dark:text-emerald-400">
                Collaborative Process
              </h3>
              <p className="dark:text-gray-300 text-gray-700">
                Working together to transform ideas into solutions through open
                communication and iterative development.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center pb-10">
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-xl font-medium text-white hover:from-blue-600 hover:to-purple-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Let&apos;s Work Together
          </Link>
        </div>
      </div>
    </div>
  );
}
