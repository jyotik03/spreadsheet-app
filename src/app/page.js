"use client";

import { useState } from 'react';
import { create } from 'zustand';

// Create Zustand store
const useStore = create((set) => ({
  grid: Array(1000).fill(""),
  updateCell: (index, value) => set((state) => {
    const newGrid = [...state.grid];
    newGrid[index] = value;
    return { grid: newGrid };
  }),
}));

export default function Home() {
  const { grid, updateCell } = useStore();
  const [alignment, setAlignment] = useState("left");
  const [fontSize, setFontSize] = useState("14px");
  const [searchQuery, setSearchQuery] = useState("");
  const [history, setHistory] = useState([grid]);
  const [currentStep, setCurrentStep] = useState(0);
  const itemsPerPage = 100;
  const [currentPage, setCurrentPage] = useState(1);

  // Handle input change for each cell
  const handleInputChange = (index, value) => {
    if (index % 2 === 0 && isNaN(value)) {
      alert("Only numeric values allowed in this cell!");
      return;
    }
    const newGrid = [...grid];
    newGrid[index] = value;
    updateCell(index, value);
    addHistory(newGrid);
  };

  // Add grid state to history
  const addHistory = (newGrid) => {
    const newHistory = history.slice(0, currentStep + 1);
    newHistory.push(newGrid);
    setHistory(newHistory);
    setCurrentStep(newHistory.length - 1);
  };

  // Undo function
  const handleUndo = () => {
    if (currentStep > 0) {
      const previousStep = currentStep - 1;
      setCurrentStep(previousStep);
      updateCell(0, history[previousStep]); // Update the grid state
    }
  };

  // Redo function
  const handleRedo = () => {
    if (currentStep < history.length - 1) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      updateCell(0, history[nextStep]); // Update the grid state
    }
  };

  // Filter and paginate grid
  const filteredGrid = grid.filter(cell => cell.includes(searchQuery));
  const totalPages = Math.ceil(filteredGrid.length / itemsPerPage);
  const paginatedGrid = filteredGrid.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div>
      <div className="mb-4">
        <select
          className="border p-2 mr-2"
          onChange={(e) => setAlignment(e.target.value)}
          value={alignment}
        >
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
        </select>
        <input
          type="number"
          min="8"
          max="32"
          step="1"
          className="border p-2"
          value={parseInt(fontSize, 10)}
          onChange={(e) => setFontSize(`${e.target.value}px`)}
          placeholder="Font Size (px)"
        />
        <input
          type="text"
          className="border p-2 mb-4 ml-2"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleUndo} disabled={currentStep <= 0}>Undo</button>
        <button onClick={handleRedo} disabled={currentStep >= history.length - 1}>Redo</button>
      </div>
      <div className="grid grid-cols-10 gap-1 p-4">
        {paginatedGrid.map((cell, index) => (
          <input
            key={index}
            className="border p-2"
            style={{ fontSize, textAlign: alignment }}
            value={cell}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
        ))}
      </div>
      <div className="mt-4 flex items-center">
        <button
          className="border p-2 mr-2"
          onClick={() => setCurrentPage(page => Math.max(page - 1, 1))}
          disabled={currentPage <= 1}
        >
          Previous
        </button>
        <span className="mx-2">Page {currentPage} of {totalPages}</span>
        <button
          className="border p-2"
          onClick={() => setCurrentPage(page => Math.min(page + 1, totalPages))}
          disabled={currentPage >= totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
