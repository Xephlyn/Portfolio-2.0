"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ResumePage() {
  const [activeTab, setActiveTab] = useState("skills");
  const [darkMode, setDarkMode] = useState(true);

  // Tech skills with proficiency levels
  const techSkills = [
    { name: "JavaScript/TypeScript", level: 90 },
    { name: "HTML/CSS", level: 95 },
    { name: "Next.js", level: 85 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Route API", level: 80 },
    { name: "TensorFlow", level: 75 },
    { name: "HeroUI", level: 85 },
    { name: "Firebase", level: 85 },
    { name: "Vercel", level: 90 },
    { name: "Figma/Canva", level: 80 },
    { name: "Jira/Miro", level: 85 },
    { name: "npm", level: 90 },
  ];

  // Technical projects
  const projects = [
    {
      title: "MyStudioBuddy",
      description: "Empowering musicians to create studio-ready recordings",
      role: "Lead Logic Developer",
      tech: ["Next.js", "JavaScript", "Audio API", "Firebase"],
      details:
        "Led the development of audio manipulation logic and became proficient with audio data flows in JSX. Used an agile approach to bring this app from concept to implementation.",
      highlight: true,
    },
    {
      title: "Brick Breaker Game",
      description: "Classic arcade game with modern features",
      role: "Frontend Developer",
      tech: ["Next.js", "Canvas API", "React Hooks", "Tailwind CSS"],
      details:
        "Created a responsive game with pause functionality, dynamic difficulty, and custom physics engine.",
      highlight: false,
    },
    {
      title: "Developer Portfolio",
      description: "Interactive showcase of projects and skills",
      role: "Designer & Developer",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Responsive Design"],
      details:
        "Built a responsive, animated portfolio site with dark/light mode and interactive elements.",
      highlight: false,
    },
  ];

  return (
    <div className="mt-20 min-h-screen transition-colors duration-300 dark:bg-gradient-to-br dark:from-gray-900 dark:to-indigo-950 dark:text-white bg-gradient-to-br from-gray-100 to-indigo-100 text-gray-800">
      {/* Header with theme toggle */}
      <header className="max-w-6xl mx-auto pt-8 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Dakota Johnson
        </h1>
      </header>

      {/* Intro section */}
      <section className="max-w-6xl mx-auto mt-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="md:w-2/3">
            <h2 className="text-2xl font-semibold mb-4">
              Full Stack Developer
            </h2>
            <p className="text-lg mb-6">
              Creative problem solver with a passion for building innovative web
              applications. Transitioning from retail management with strong
              leadership experience to full stack development, bringing a unique
              perspective to technical challenges.
            </p>
            <p className="mb-6">
              I thrive on taking complex problems head-on and creating exciting
              projects that deliver exceptional user experiences. My background
              in customer service and team leadership enhances my collaborative
              approach to development.
            </p>
          </div>
          <div className="md:w-1/3 bg-gradient-to-br from-blue-800/20 to-purple-800/20 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-3 dark:text-blue-300 text-blue-700">
              Contact
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-blue-400">🔗</span>
                <a
                  href="https://github.com/Xephlyn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  github.com/Xephlyn
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400">🔗</span>
                <a
                  href="https://www.linkedin.com/in/dakota-johnson-6b55a832b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Navigation tabs */}
      <section className="max-w-6xl mx-auto mt-12 px-4 sm:px-6 lg:px-8">
        <div className="flex border-b border-gray-600 overflow-x-auto no-scrollbar">
          {["skills", "projects", "experience", "education"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-medium text-sm uppercase tracking-wider transition-colors ${
                activeTab === tab
                  ? "border-b-2 border-blue-500 text-blue-400"
                  : "text-gray-400 hover:text-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* Content sections */}
      <section className="max-w-6xl mx-auto mt-10 px-4 sm:px-6 lg:px-8 pb-20">
        {/* Skills Tab */}
        {activeTab === "skills" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {/* Technical Skills */}
            <div>
              <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                Technical Skills
              </h2>
              <div className="space-y-4">
                {techSkills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills & Approach */}
            <div>
              <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                Approach & Soft Skills
              </h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-800/20 to-purple-800/20 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 dark:text-blue-300 text-blue-700">
                    Development Philosophy
                  </h3>
                  <p className="mb-3">
                    I approach development with an agile mindset, focusing on
                    iterative improvement and user-centered design. I believe in
                    writing clean, maintainable code that solves real problems.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-800/20 to-purple-800/20 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 dark:text-blue-300 text-blue-700">
                    Leadership & Teamwork
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Team management and mentorship</li>
                    <li>Clear communication across departments</li>
                    <li>Problem-solving under pressure</li>
                    <li>Adaptability in changing environments</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-800/20 to-purple-800/20 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 dark:text-blue-300 text-blue-700">
                    Customer Focus
                  </h3>
                  <p>
                    My retail background has instilled a deep understanding of
                    user needs and expectations, which I apply to creating
                    intuitive, user-friendly applications.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Projects Tab */}
        {activeTab === "projects" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Technical Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl transition-all duration-300 bg-gradient-to-br from-blue-700/40 to-purple-700/40 shadow-lg bg-gradient-to-br from-blue-800/20 to-purple-800/20"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300">
                      {project.title}
                    </h3>
                    <span className="text-sm bg-blue-900/50 px-2 py-1 rounded text-blue-300">
                      {project.role}
                    </span>
                  </div>
                  <p className="text-lg mb-3">{project.description}</p>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs bg-indigo-900/50 px-2 py-1 rounded text-indigo-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="dark:text-gray-300 text-black">
                      {project.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Experience Tab */}
        {activeTab === "experience" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Professional Experience
            </h2>

            <div className="space-y-12">
              {/* Current/Latest Experience - Full Detail */}
              <div className="relative pl-8 border-l-2 border-blue-600">
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-600"></div>
                <div className="mb-2">
                  <h3 className="text-xl font-bold">
                    Department Manager & Acting Store Manager
                  </h3>
                  <div className="flex justify-between text-blue-400">
                    <span className="font-medium">Petland, Deerfoot City</span>
                    <span>Jan 2021 - Feb 2024</span>
                  </div>
                </div>
                <ul className="list-disc pl-5 space-y-2 dark:text-gray-300 text-black">
                  <li>
                    Led a team to achieve sales and operational goals, ensuring
                    efficiency and customer satisfaction.
                  </li>
                  <li>
                    Managed inventory, scheduling, and team development to
                    optimize store performance.
                  </li>
                  <li>
                    Provided training and mentorship to staff, fostering a
                    culture of growth and excellence.
                  </li>
                  <li>
                    Resolved customer concerns effectively, enhancing brand
                    reputation and loyalty.
                  </li>
                </ul>
              </div>

              {/* Previous Experiences - More Condensed */}
              <div className="relative pl-8 border-l-2 border-indigo-500/60">
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-indigo-500/60"></div>
                <div className="mb-2">
                  <h3 className="text-xl font-bold">Security Professional</h3>
                  <div className="flex justify-between text-blue-400">
                    <span className="font-medium">
                      Paladin Contracted Security
                    </span>
                    <span>2019 - 2020</span>
                  </div>
                </div>
                <ul className="list-disc pl-5 space-y-1 dark:text-gray-300 text-black text-sm">
                  <li>
                    Contracted to various locations with unique security
                    requirements, requiring adaptability and quick learning.
                  </li>
                  <li>
                    Managed time efficiently when conducting patrols and
                    maintaining facility access restrictions.
                  </li>
                  <li>
                    Served as key holder and property manager, responsible for
                    secured areas and communication with law enforcement.
                  </li>
                  <li>
                    Obtained comprehensive safety certifications including First
                    Aid/CPR, MOAB, and de-escalation tactics.
                  </li>
                </ul>
              </div>

              <div className="relative pl-8 border-l-2 border-indigo-500/40">
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-indigo-500/40"></div>
                <div className="mb-2">
                  <h3 className="text-xl font-bold">
                    Line-cook & Assistant Catering Supervisor
                  </h3>
                  <div className="flex justify-between text-blue-400">
                    <span className="font-medium">
                      Highwood Catering Company
                    </span>
                    <span>2017 - 2019</span>
                  </div>
                </div>
                <ul className="list-disc pl-5 space-y-1 dark:text-gray-300 text-black text-sm">
                  <li>
                    Managed all aspects of banquet events from organization to
                    execution and tear-down.
                  </li>
                  <li>
                    Supervised staff in food service operations while
                    maintaining quality and efficiency.
                  </li>
                  <li>
                    Provided direct customer service and maintained cleanliness
                    standards.
                  </li>
                  <li>
                    Assisted head cook in meal preparation and execution for
                    both buffet and plated events.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}

        {/* Education Tab */}
        {activeTab === "education" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Education & Training
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-800/20 to-purple-800/20 p-6 rounded-xl">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold dark:text-blue-300 text-blue-700">
                      InceptionU
                    </h3>
                    <p className="text-lg">Full Stack Development Program</p>
                  </div>
                  <span className="text-blue-400">Sept 2024 - Mar 2025</span>
                </div>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Hands-on experience in agile development and real-world
                    project collaboration.
                  </li>
                  <li>
                    Focused on modern full-stack technologies, building scalable
                    web applications.
                  </li>
                  <li>
                    Participated in team projects utilizing industry-standard
                    development workflows.
                  </li>
                  <li>
                    Developed applications with JavaScript/TypeScript, Next.js,
                    and modern frameworks.
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-800/20 to-purple-800/20 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 dark:text-blue-300 text-blue-700">
                  Professional Certifications
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-medium">
                      First Aid and CPR Class-A
                    </span>{" "}
                    - Certified in emergency response techniques
                  </li>
                  <li>
                    <span className="font-medium">Alberta Pro-tect</span> -
                    Professional security training
                  </li>
                  <li>
                    <span className="font-medium">
                      MOAB (Management of Aggressive Behavior)
                    </span>{" "}
                    - Conflict resolution
                  </li>
                  <li>
                    <span className="font-medium">De-escalation Tactics</span> -
                    Professional communication in tense situations
                  </li>
                </ul>
              </div>

              <div className="md:col-span-2 bg-gradient-to-br from-blue-800/20 to-purple-800/20 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 dark:text-blue-300 text-blue-700">
                  Continuing Education
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">
                      Technical Skills Development
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 dark:text-gray-300 text-black">
                      <li>Advanced JavaScript Patterns & Best Practices</li>
                      <li>React & Next.js Architecture</li>
                      <li>Modern CSS and Animation Techniques</li>
                      <li>API Design and Implementation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">
                      Professional Development
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 dark:text-gray-300 text-black">
                      <li>Agile Development Methodologies</li>
                      <li>Project Management Fundamentals</li>
                      <li>Team Leadership in Technical Environments</li>
                      <li>User Experience Research & Implementation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </section>
    </div>
  );
}
