import { create } from 'zustand';

export interface BreadcrumbStore {
  title: string;
  path: string;
}

interface BreadcrumbState {
  breadcrumbs: BreadcrumbStore[];
  updateBreadcrumbs: (newBreadcrumbs: BreadcrumbStore[]) => void;
  clearBreadcrumbs: () => void;
}

export const useBreadcrumbStore = create<BreadcrumbState>(set => ({
  breadcrumbs: [],
  updateBreadcrumbs: newBreadcrumbs => set({ breadcrumbs: newBreadcrumbs }),
  clearBreadcrumbs: () => set({ breadcrumbs: [] }),
}));
