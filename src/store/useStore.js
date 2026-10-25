import { create } from 'zustand';

export const useStore = create((set) => ({
  tasks: [],
  search: '',
  selectedColumn: 'all',
  
  setTasks: (newTasks) => set({ tasks: newTasks }),
  setSearch: (newSearch) => set({ search: newSearch }),
  setSelectedColumn: (columnId) => set({ selectedColumn: columnId }),
}));