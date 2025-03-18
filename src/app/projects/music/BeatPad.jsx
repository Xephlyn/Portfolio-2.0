"use client";
import React, { useState, useEffect } from "react";
import * as Tone from "tone";

const BeatPad = ({ instrument }) => {
  // Define notes in reverse order (high to low)
  const notes = ["C5", "B4", "A4", "G4", "F4", "E4", "D4", "C4"];
  const steps = 16; // 16 time steps (0.25 second intervals * 16 = 4 seconds total)

  // Initialize the grid
  const [grid, setGrid] = useState(
    Array(notes.length)
      .fill()
      .map(() => Array(steps).fill(false))
  );

  // Track if sequence is currently playing
  const [isPlaying, setIsPlaying] = useState(false);
  // Current step that's playing (for visual feedback)
  const [currentStep, setCurrentStep] = useState(-1);

  // Initialize the instrument
  const [synth, setSynth] = useState(null);

  useEffect(() => {
    // Initialize Tone.js synth based on selected instrument
    let newSynth;

    switch (instrument.toLowerCase()) {
      case "piano":
        newSynth = new Tone.Sampler({
          urls: {
            C4: "C4.mp3",
          },
          baseUrl: "/samples/piano/",
          onload: () => console.log("Piano samples loaded"),
        }).toDestination();
        break;
      case "drums":
        newSynth = new Tone.MembraneSynth().toDestination();
        break;
      case "bass":
        newSynth = new Tone.Synth({
          oscillator: { type: "triangle" },
          envelope: { attack: 0.05, decay: 0.2, sustain: 0.1, release: 1 },
        }).toDestination();
        break;
      case "synth":
        newSynth = new Tone.PolySynth(Tone.Synth).toDestination();
        break;
      case "guitar":
        newSynth = new Tone.PluckSynth().toDestination();
        break;
      case "strings":
        newSynth = new Tone.FMSynth().toDestination();
        break;
      default:
        newSynth = new Tone.Synth().toDestination();
    }

    setSynth(newSynth);

    // Clean up when component unmounts
    return () => {
      if (newSynth) {
        newSynth.dispose();
      }
    };
  }, [instrument]);

  // Handle toggling a cell in the grid
  const toggleCell = (noteIndex, stepIndex) => {
    const newGrid = [...grid];
    newGrid[noteIndex][stepIndex] = !newGrid[noteIndex][stepIndex];
    setGrid(newGrid);

    // Play the note when toggled on
    if (newGrid[noteIndex][stepIndex] && synth) {
      synth.triggerAttackRelease(notes[noteIndex], "8n");
    }
  };

  // Play the sequence
  const playSequence = async () => {
    // Make sure Tone.js is started (needed due to browser autoplay policies)
    await Tone.start();

    // Set the tempo - 240 BPM means each 16th note is 0.25 seconds (60/240 = 0.25)
    Tone.Transport.bpm.value = 240;

    // Create a sequence
    const seq = new Tone.Sequence(
      (time, step) => {
        setCurrentStep(step);

        // Play all active notes at this step
        grid.forEach((row, noteIndex) => {
          if (row[step]) {
            synth.triggerAttackRelease(notes[noteIndex], "16n", time);
          }
        });
      },
      [...Array(steps).keys()],
      "16n"
    );

    // Start the sequence
    setIsPlaying(true);
    seq.start(0);
    Tone.Transport.start();

    // Stop after one loop
    setTimeout(() => {
      seq.stop();
      Tone.Transport.stop();
      seq.dispose();
      setIsPlaying(false);
      setCurrentStep(-1);
    }, steps * 250 + 100); // Add a little buffer (steps * 250ms = 4 seconds)
  };

  // Clear the grid
  const clearGrid = () => {
    setGrid(
      Array(notes.length)
        .fill()
        .map(() => Array(steps).fill(false))
    );
  };

  return (
    <div className="mb-8">
      <div className="grid grid-cols-1 gap-1">
        {/* Note labels and grid rows */}
        {notes.map((note, noteIndex) => (
          <div key={note} className="flex items-center">
            <div className="w-10 text-right pr-2 text-sm font-mono">{note}</div>
            <div className="flex-1 flex">
              {Array(steps)
                .fill()
                .map((_, stepIndex) => (
                  <div
                    key={stepIndex}
                    className={`
                    h-8 border border-gray-300 flex-1 cursor-pointer transition-colors
                    ${
                      grid[noteIndex][stepIndex]
                        ? "bg-blue-500"
                        : "bg-white hover:bg-blue-100"
                    }
                    ${
                      currentStep === stepIndex ? "border-red-500 border-2" : ""
                    }
                    ${stepIndex % 4 === 0 ? "border-l-2 border-l-gray-400" : ""}
                  `}
                    onClick={() => toggleCell(noteIndex, stepIndex)}
                  ></div>
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* Time indicator */}
      <div className="flex justify-between mt-2 pl-12 pr-2 text-xs text-gray-500">
        <span>0.0s</span>
        <span>2.0s</span>
        <span>4.0s</span>
      </div>

      {/* Controls */}
      <div className="mt-4 flex justify-center space-x-4">
        <button
          className={`px-4 py-2 rounded ${
            isPlaying
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-green-500 text-white hover:bg-green-600"
          }`}
          onClick={playSequence}
          disabled={isPlaying}
        >
          Play Sequence
        </button>
        <button
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          onClick={clearGrid}
        >
          Clear Grid
        </button>
      </div>
    </div>
  );
};

export default BeatPad;
