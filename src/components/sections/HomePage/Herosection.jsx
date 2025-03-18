"use client";

import React, { useState, useEffect } from "react";

const TypewriterText = ({
  texts,
  typingSpeed = 150,
  deletingSpeed = 75,
  pauseDuration = 2000,
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    const updateText = () => {
      const currentFullText = texts[currentTextIndex];

      if (!isDeleting) {
        if (displayText === currentFullText) {
          timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
          return;
        }

        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        timeout = setTimeout(updateText, typingSpeed);
      } else {
        if (displayText === "") {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          return;
        }

        setDisplayText(displayText.substring(0, displayText.length - 1));
        timeout = setTimeout(updateText, deletingSpeed);
      }
    };

    timeout = setTimeout(updateText, typingSpeed);

    return () => clearTimeout(timeout);
  }, [
    displayText,
    currentTextIndex,
    isDeleting,
    texts,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return <span className="text-blue-600">{displayText}</span>;
};

const HeroSection = () => {
  const typewriterTexts = [
    "Build your next Amazing Website?",
    "Create a brand around you Idea?",
    "Developing a powerful app?",
    "Bringing your creative Ideas to Life?",
  ];

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/Desktop.jpg')" }}
    >
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8 text-center bg-white/30 backdrop-blur-lg rounded-lg">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-2">
          Are you looking for help with
        </h1>
        <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 h-20">
          <TypewriterText
            texts={typewriterTexts}
            typingSpeed={200}
            deletingSpeed={80}
            pauseDuration={1600}
          />
        </div>

        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Transform your digital presence with our cutting-edge solutions.
          Dakota combine creativity and systems thinking to make the process
          work for you
        </p>

        <div className="flex justify-center gap-4"></div>
      </div>
    </div>
  );
};

export default HeroSection;
