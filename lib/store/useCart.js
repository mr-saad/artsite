import { create } from "zustand";

export const useCart = create(() => ({
  items: [],
}));

export const add = (newItem) => {
  useCart.setState((state) =>  ({items: [...state.items, newItem]}));
};

export const remove = (newId) => {
  useCart.setState((state) =>
    ({items: state.items.filter((item) => item.id !== newId)}),
  );
};
