import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type User = {
  token: string | null;
  isAuthenticated: boolean;
};

type AuthActions = {
  setLogin: (token: string) => void;
  setLogout: () => void;
};

const useAuthStore = create<User & AuthActions>()(
  persist(
    set => ({
      token: null,
      isAuthenticated: false,
      setLogin: token => set({ token, isAuthenticated: true }),
      setLogout: () => set({ token: null, isAuthenticated: false }),
    }),
    {
      name: 'token',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuthStore;
