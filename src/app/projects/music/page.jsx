"use client";

import React, { useState } from "react";
import BeatPad from "./BeatPad";
import InstrumentSelector from "./InstrumentSelector";

export default function Page() {
  const [instruments, setInstruments] = useState([
    { id: 1, name: "Piano", active: true },
  ]);

  const addInstrument = () => {
    const instrumentOptions = [
      "Piano",
      "Drums",
      "Bass",
      "Guitar",
      "Synth",
      "Strings",
    ];

    // Find an instrument that isn't already in use
    const unusedInstruments = instrumentOptions.filter(
      (opt) => !instruments.some((inst) => inst.name === opt)
    );

    if (unusedInstruments.length > 0) {
      const newId = Math.max(...instruments.map((i) => i.id), 0) + 1;
      setInstruments([
        ...instruments.map((inst) => ({ ...inst, active: false })),
        { id: newId, name: unusedInstruments[0], active: true },
      ]);
    }
  };

  const removeInstrument = (id) => {
    if (instruments.length <= 1) return; // Always keep at least one instrument

    const newInstruments = instruments.filter((inst) => inst.id !== id);

    // Make sure one tab is active
    if (!newInstruments.some((inst) => inst.active)) {
      newInstruments[0].active = true;
    }

    setInstruments(newInstruments);
  };

  const selectInstrument = (id) => {
    setInstruments(
      instruments.map((inst) => ({
        ...inst,
        active: inst.id === id,
      }))
    );
  };

  const changeInstrumentType = (id, newName) => {
    setInstruments(
      instruments.map((inst) =>
        inst.id === id ? { ...inst, name: newName } : inst
      )
    );
  };

  return (
    <div className="p-8 max-w-6xl mx-auto mt-20">
      <h1 className="text-3xl font-bold mb-4">Beat Creator Studio</h1>
      <p className="mb-6 text-gray-600">Work in progress</p>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Instrument Tabs */}
        <div className="flex border-b">
          {instruments.map((inst) => (
            <div
              key={inst.id}
              className={`relative px-4 py-2 cursor-pointer flex items-center ${
                inst.active ? "bg-blue-500 text-white" : "hover:bg-gray-100"
              }`}
              onClick={() => selectInstrument(inst.id)}
            >
              <span>{inst.name}</span>
              {instruments.length > 1 && (
                <button
                  className="ml-2 text-sm opacity-70 hover:opacity-100"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeInstrument(inst.id);
                  }}
                >
                  ×
                </button>
              )}
            </div>
          ))}
          <button
            className="px-4 py-2 text-blue-500 hover:bg-gray-100"
            onClick={addInstrument}
          >
            + Add Instrument
          </button>
        </div>

        {/* Active Instrument Panel */}
        <div className="p-6">
          {instruments.map(
            (inst) =>
              inst.active && (
                <div key={inst.id}>
                  <div className="flex justify-between mb-4">
                    <InstrumentSelector
                      currentInstrument={inst.name}
                      onChange={(newName) =>
                        changeInstrumentType(inst.id, newName)
                      }
                    />
                    <div className="flex space-x-2">
                      <button className="px-4 py-2 bg-green-500 text-white rounded">
                        Play
                      </button>
                      <button className="px-4 py-2 bg-gray-200 rounded">
                        Clear
                      </button>
                    </div>
                  </div>
                  <BeatPad instrument={inst.name} />
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}
