// import { create } from 'zustand';
// // import { persist } from 'zustand/middleware';
// import { Camper } from '@/types/camper';
// import { Filters } from '@/types/filters';
// import { getCampers } from '../api/serverApi';

// type State = {
//   campers: Camper[];
//   filters: Filters;
//   favorites: string[];
//   page: number;
//   limit: number;
//   loading: boolean;
//   fetchCampers: () => Promise<void>;
//   toggleFavorite: (id: string) => void;
//   setFilters: (filters: Filters) => void;
//   resetResults: () => void;
// };

// export const useCamperStore = create<State>((set, get) => ({
//   campers: [],
//   filters: {} as Filters,
//   favorites: [],
//   page: 1,
//   limit: 4,
//   loading: false,
//   fetchCampers: async () => {
//     set({ loading: true, campers: [] });
//     const { items } = await getCampers(get().filters);
//     set({ campers: items, loading: false });
//   },
//   toggleFavorite: (id) =>
//     set((state) => ({
//       favorites: state.favorites.includes(id)
//         ? state.favorites.filter((f) => f !== id)
//         : [...state.favorites, id],
//     })),
//   setFilters: (filters) => set({ filters }),

//   resetResults: () => set({ campers: [] }),
// }));

'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { getCampers, getCampersById } from '@/lib/api/clientApi';
import { Filters } from '@/types/filters';

export interface Camper {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: string;
  engine: string;
  AC: boolean;
  bathroom: boolean;
  kitchen: boolean;
  TV: boolean;
  radio: boolean;
  refrigerator: boolean;
  microwave: boolean;
  gas: boolean;
  water: boolean;
}

interface CamperStore {
  campers: Camper[];
  total: number;
  isLoading: boolean;
  selectedCamper: Camper | null;
  filters: Filters;
  favorites: string[];

  fetchCampers: (reset?: boolean) => Promise<void>;
  loadMore: () => Promise<void>;
  setFilters: (filters: Partial<Filters>) => void;
  resetFilters: () => void;
  fetchCamperById: (id: string) => Promise<void>;

  toggleFavorite: (id: string) => void;
}

export const useCampersStore = create<CamperStore>()(
  persist(
    (set, get) => ({
      campers: [],
      total: 0,
      isLoading: false,
      selectedCamper: null,

      filters: {
        page: 1,
        limit: 4,
        location: '',
        form: undefined,
        equipment: [],
      },

      favorites: [],
      setFilters: (newFilters) => {
        set((state) => ({
          filters: { ...state.filters, ...newFilters, page: 1 },
        }));
      },

      resetFilters: () => {
        set({
          filters: { page: 1, limit: 4, equipment: [] },
        });
      },

      fetchCampers: async (reset = true) => {
        const { filters } = get();

        set({ isLoading: true });

        const params = {
          ...filters,
          equipment: filters.equipment?.join(','),
        };

        const data = await getCampers(params);

        set((state) => ({
          campers: reset ? data.items : [...state.campers, ...data.items],
          total: data.total,
          isLoading: false,
        }));
      },

      loadMore: async () => {
        set((state) => ({
          filters: {
            ...state.filters,
            page: (state.filters.page || 1) + 1,
          },
        }));

        await get().fetchCampers(false);
      },

      fetchCamperById: async (id) => {
        set({ isLoading: true });
        const data = await getCampersById(id);
        set({ selectedCamper: data, isLoading: false });
      },

      toggleFavorite: (id) => {
        set((state) => ({
          favorites: state.favorites.includes(id)
            ? state.favorites.filter((f) => f !== id)
            : [...state.favorites, id],
        }));
      },
    }),
    { name: 'campers-store', partialize: (state) => ({ favorites: state.favorites }) }
  )
);
