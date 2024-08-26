import React from 'react';
import Cell from './Cell';
import { useStore } from '../store';

const Grid = () => {
  const { grid, updateCell } = useStore();

  return (
    <div className="grid grid-cols-10 gap-0.5">
      {grid.map((cell, index) => (
        <Cell
          key={index}
          value={cell}
          onChange={(value) => updateCell(index, value)}
        />
      ))}
    </div>
  );
};

export default Grid;
