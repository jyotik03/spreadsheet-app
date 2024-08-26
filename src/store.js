import create from 'zustand';

export const useStore = create((set) => ({
  grid: Array(1000).fill(''),
  updateCell: (index, value) => set((state) => {
    const newGrid = [...state.grid];
    newGrid[index] = value;
    return { grid: newGrid };
  }),
}));
