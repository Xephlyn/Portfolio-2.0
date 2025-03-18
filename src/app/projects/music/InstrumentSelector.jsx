"use client";
import React, { useState } from "react";

const InstrumentSelector = ({ currentInstrument, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const instruments = [
    { name: "Piano", description: "Classic piano sound" },
    { name: "Drums", description: "Percussive drum sounds" },
    { name: "Bass", description: "Deep bass tones" },
    { name: "Guitar", description: "Plucked string sounds" },
    { name: "Synth", description: "Electronic synthesizer" },
    { name: "Strings", description: "Orchestral string section" },
  ];

  const handleSelect = (instrumentName) => {
    onChange(instrumentName);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div className="flex items-center">
        <div className="font-bold mr-2">Instrument:</div>
        <button
          className="px-4 py-2 bg-gray-100 rounded flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          {currentInstrument}
          <svg
            className={`ml-2 w-4 h-4 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-64 bg-white rounded shadow-lg">
          {instruments.map((instrument) => (
            <div
              key={instrument.name}
              className={`p-3 hover:bg-gray-100 cursor-pointer ${
                instrument.name === currentInstrument ? "bg-blue-50" : ""
              }`}
              onClick={() => handleSelect(instrument.name)}
            >
              <div className="font-semibold">{instrument.name}</div>
              <div className="text-xs text-gray-500">
                {instrument.description}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InstrumentSelector;
