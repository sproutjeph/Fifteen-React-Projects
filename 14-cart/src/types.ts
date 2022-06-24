export enum ActionKinds {
  'ADD_ITEM' = 'ADD_ITEM',
  'REMOVE_ITEM' = 'REMOVE_ITEM',
  'LOADING' = 'LOADING',
  'DISPLAY_ITEMS' = 'DISPLAY_ITEMS',
  'CLEAR_CART' = 'CLEAR_CART',
  'INCREASEITEM' = 'INCREASEITEM',
  'DECREASEITEM' = 'DECREASEITEM',
  'GET_TOTAL' = 'GET_TOTAL',
  'GET_TOTAL_PRICE' = 'GET_TOTAL_PRICE',
}

export interface Product { 
  id: string;
  title: string;
  price: string;
  img: string;
  amount: number;
}

export interface DefaultStateInterface {
  isLoading: boolean;
  cart: Product[];
  total: number;
  amount: number;
}

export interface ActionsInterface {
  type: ActionKinds;
  payload?: any;
}

export interface ValueInterface extends DefaultStateInterface {
  clearCart: () => void;
  removeItem: (id: string) => void;
  increaseItem: (id: string) => void;
  decreaseItem: (id: string) => void;
}
