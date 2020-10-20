import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_SAVE_PAYMENT_METHOD,
  CART_RESET_ITEM,
  CART_RESET_SHIPPING_ADDRESS,
  CART_RESET_PAYMENT_METHOD,
} from '../constants';

const initialState = {
  cartItems: [],
  shippingAddress: {},
  paymentMethod: '',
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    case CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      };
    case CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload,
      };
    case CART_RESET_ITEM:
      return {
        ...state,
        cartItems: [],
      };
    case CART_RESET_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: {},
      };
    case CART_RESET_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: '',
      };
    default:
      return state;
  }
};
