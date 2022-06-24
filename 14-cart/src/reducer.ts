import { ActionKinds, ActionsInterface, DefaultStateInterface } from './types'; 

const reducer = (state: DefaultStateInterface, action: ActionsInterface) => {
  if (action.type === ActionKinds.LOADING) {
    return { ...state, isLoading: true };
  }
  if (action.type === ActionKinds.REMOVE_ITEM) {
    const newItems = state.cart.filter((item) => item.id !== action.payload);
    return { ...state, cart: newItems };
  }
  if (action.type === ActionKinds.CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === ActionKinds.INCREASEITEM) {
    const newItems = state.cart.map((item) =>
      item.id === action.payload ? { ...item, amount: item.amount + 1 } : item
    );
    return { ...state, cart: newItems };
  }
  if (action.type === ActionKinds.DECREASEITEM) {
    const newItems = state.cart
      .map((item) =>
        item.id === action.payload ? { ...item, amount: item.amount - 1 } : item
      )
      .filter((item) => item.amount !== 0);
    return { ...state, cart: newItems };
  }
  if (action.type === ActionKinds.GET_TOTAL) {
    const totalItems = state.cart.reduce((acc, item) => {
      return (acc = item.amount + acc);
    }, 0);

    return { ...state, amount: totalItems }; 
  }
  if (action.type === ActionKinds.GET_TOTAL_PRICE) {
    const totalPrice = state.cart.reduce((acc, item) => {
      return (acc = +item.price * +item.amount + acc);
    }, 0);

    return { ...state, total: parseFloat(totalPrice.toFixed(2)) };
  }
  if (action.type === ActionKinds.DISPLAY_ITEMS) {
    return { ...state, cart: action.payload, isLoading: false };
  }
  return state;
};

export default reducer;
