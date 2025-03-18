"use client";
import React, { useState, useEffect, useRef } from "react";

const ParticleSystem = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, isActive: false });

  // Configurable parameters with state
  const [particleCount, setParticleCount] = useState(100);
  const [particleSize, setParticleSize] = useState(3);
  const [speedFactor, setSpeedFactor] = useState(1.0);
  const [colorMode, setColorMode] = useState("rainbow");
  const [interactionMode, setInteractionMode] = useState("attract");
  const [trailEffect, setTrailEffect] = useState(true);

  // Initialize canvas and particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    // Create particles
    const createParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * particleSize + 1,
          speed: {
            x: (Math.random() - 0.5) * speedFactor * 2,
            y: (Math.random() - 0.5) * speedFactor * 2,
          },
          color: getRandomColor(),
          angle: Math.random() * Math.PI * 2,
          initialLifeTime: Math.random() * 100 + 50,
          lifeTime: Math.random() * 100 + 50,
        });
      }
    };

    // Random color generation
    const getRandomColor = () => {
      if (colorMode === "rainbow") {
        return `hsl(${Math.random() * 360}, 80%, 60%)`;
      } else if (colorMode === "monochrome") {
        return `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.5})`;
      } else if (colorMode === "neon") {
        const neonColors = [
          "rgba(255, 0, 128, 0.7)", // Pink
          "rgba(0, 255, 255, 0.7)", // Cyan
          "rgba(128, 0, 255, 0.7)", // Purple
          "rgba(0, 255, 128, 0.7)", // Green
        ];
        return neonColors[Math.floor(Math.random() * neonColors.length)];
      }
      return "#ffffff";
    };

    // Animation loop
    const animate = () => {
      if (!canvas) return;

      // Clear canvas with trail effect
      if (trailEffect) {
        ctx.fillStyle = "rgba(10, 15, 30, 0.2)";
        ctx.fillRect(0, 0, width, height);
      } else {
        ctx.clearRect(0, 0, width, height);
      }

      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        // Update position
        particle.x += particle.speed.x;
        particle.y += particle.speed.y;

        // Boundary check
        if (particle.x < 0 || particle.x > width) {
          particle.speed.x *= -1;
        }
        if (particle.y < 0 || particle.y > height) {
          particle.speed.y *= -1;
        }

        // Mouse interaction
        if (mouseRef.current.isActive) {
          const dx = mouseRef.current.x - particle.x;
          const dy = mouseRef.current.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const force = Math.min(100 / (distance || 1), 5);

          if (interactionMode === "attract") {
            particle.speed.x += dx * force * 0.01;
            particle.speed.y += dy * force * 0.01;
          } else if (interactionMode === "repel") {
            particle.speed.x -= dx * force * 0.01;
            particle.speed.y -= dy * force * 0.01;
          } else if (interactionMode === "vortex") {
            // Calculate angle between mouse and particle
            const angle = Math.atan2(dy, dx);
            // Apply perpendicular force
            particle.speed.x += Math.cos(angle + Math.PI / 2) * force * 0.02;
            particle.speed.y += Math.sin(angle + Math.PI / 2) * force * 0.02;
          }
        }

        // Speed limit
        const currentSpeed = Math.sqrt(
          particle.speed.x * particle.speed.x +
            particle.speed.y * particle.speed.y
        );
        if (currentSpeed > speedFactor * 3) {
          particle.speed.x =
            (particle.speed.x / currentSpeed) * speedFactor * 3;
          particle.speed.y =
            (particle.speed.y / currentSpeed) * speedFactor * 3;
        }

        // Draw particle
        ctx.beginPath();

        // Gradient for particles
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.radius * 2
        );
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = gradient;
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();

        // Draw connecting lines for nearby particles
        particlesRef.current.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(255, 255, 255, ${
                0.1 * (1 - distance / 100)
              })`;
              ctx.lineWidth = 0.5;
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
            }
          }
        });

        // Update lifetime
        particle.lifeTime -= 0.2;
        if (particle.lifeTime <= 0) {
          // Reset particle
          particle.x = Math.random() * width;
          particle.y = Math.random() * height;
          particle.speed.x = (Math.random() - 0.5) * speedFactor * 2;
          particle.speed.y = (Math.random() - 0.5) * speedFactor * 2;
          particle.color = getRandomColor();
          particle.lifeTime = particle.initialLifeTime;
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    // Handle resize
    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    // Handle mouse events
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleMouseDown = () => {
      mouseRef.current.isActive = true;
    };

    const handleMouseUp = () => {
      mouseRef.current.isActive = false;
    };

    const handleMouseLeave = () => {
      mouseRef.current.isActive = false;
    };

    // Setup event listeners
    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mouseup", handleMouseUp);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    canvas.addEventListener(
      "touchstart",
      (e) => {
        handleMouseDown();
        handleMouseMove(e.touches[0]);
      },
      { passive: true }
    );
    canvas.addEventListener(
      "touchmove",
      (e) => {
        handleMouseMove(e.touches[0]);
      },
      { passive: true }
    );
    canvas.addEventListener("touchend", handleMouseUp, { passive: true });

    // Initial setup
    handleResize();
    createParticles();
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mouseup", handleMouseUp);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      canvas.removeEventListener("touchstart", handleMouseDown);
      canvas.removeEventListener("touchmove", handleMouseMove);
      canvas.removeEventListener("touchend", handleMouseUp);
      cancelAnimationFrame(animationRef.current);
    };
  }, [
    particleCount,
    particleSize,
    speedFactor,
    colorMode,
    interactionMode,
    trailEffect,
  ]);

  // Handle control changes
  const handleParticleCountChange = (e) => {
    setParticleCount(parseInt(e.target.value, 10));
  };

  const handleSizeChange = (e) => {
    setParticleSize(parseInt(e.target.value, 10));
  };

  const handleSpeedChange = (e) => {
    setSpeedFactor(parseFloat(e.target.value));
  };

  const handleColorModeChange = (e) => {
    setColorMode(e.target.value);
  };

  const handleInteractionModeChange = (e) => {
    setInteractionMode(e.target.value);
  };

  const toggleTrailEffect = () => {
    setTrailEffect(!trailEffect);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-gray-900 rounded-lg overflow-hidden shadow-xl">
      <div className="p-4 bg-gray-800 text-white">
        <h2 className="text-xl font-bold mb-2">Interactive Particle System</h2>
        <p className="text-gray-300 mb-4">
          Adjust parameters and interact with your mouse/touch
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Particles: {particleCount}
            </label>
            <input
              type="range"
              min="50"
              max="300"
              step="10"
              value={particleCount}
              onChange={handleParticleCountChange}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Size: {particleSize}
            </label>
            <input
              type="range"
              min="1"
              max="10"
              step="1"
              value={particleSize}
              onChange={handleSizeChange}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Speed: {speedFactor.toFixed(1)}
            </label>
            <input
              type="range"
              min="0.1"
              max="3.0"
              step="0.1"
              value={speedFactor}
              onChange={handleSpeedChange}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Color Mode:
            </label>
            <select
              value={colorMode}
              onChange={handleColorModeChange}
              className="w-full p-2 bg-gray-700 text-white rounded"
            >
              <option value="rainbow">Rainbow</option>
              <option value="monochrome">Monochrome</option>
              <option value="neon">Neon</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Interaction Mode:
            </label>
            <select
              value={interactionMode}
              onChange={handleInteractionModeChange}
              className="w-full p-2 bg-gray-700 text-white rounded"
            >
              <option value="attract">Attract</option>
              <option value="repel">Repel</option>
              <option value="vortex">Vortex</option>
            </select>
          </div>

          <div className="flex items-center">
            <button
              onClick={toggleTrailEffect}
              className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
            >
              {trailEffect ? "Disable Trails" : "Enable Trails"}
            </button>
          </div>
        </div>
      </div>

      <div className="relative w-full">
        <canvas ref={canvasRef} className="w-full h-64 md:h-96 bg-gray-900" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-75 text-white text-center">
          <p className="bg-black bg-opacity-50 p-2 rounded">
            Click and drag to interact with particles
          </p>
        </div>
      </div>

      <div className="p-4 bg-gray-800 text-gray-300 text-sm">
        <p>
          This component demonstrates several advanced JavaScript techniques:
        </p>
        <ul className="list-disc ml-5 mt-2 space-y-1">
          <li>Canvas-based particle animation system</li>
          <li>Physics-based interactions and forces</li>
          <li>Dynamic visual effects and color generation</li>
          <li>Optimized rendering with frame animation</li>
          <li>Touch and mouse event handling</li>
        </ul>
      </div>
    </div>
  );
};

export default ParticleSystem;
