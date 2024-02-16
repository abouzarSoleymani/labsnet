import { create } from 'zustand';

export interface Breadcrumb {
  title: string;
  path: string;
}

interface BreadcrumbState {
  breadcrumbs: Breadcrumb[];
  updateBreadcrumbs: (newBreadcrumbs: Breadcrumb[]) => void;
  clearBreadcrumbs: () => void;
}

export const useBreadcrumbStore = create<BreadcrumbState>(set => ({
  breadcrumbs: [],
  updateBreadcrumbs: newBreadcrumbs => set({ breadcrumbs: newBreadcrumbs }),
  clearBreadcrumbs: () => set({ breadcrumbs: [] }),
}));
