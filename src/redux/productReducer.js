import { ADD_PRODUCT,DELETE_PRODUCT, EDIT_PRODUCT } from './productAction';

const initialState = {
  products: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(product => product.productId !== action.payload),
      };
      case EDIT_PRODUCT:
        return {
          ...state,
          products: state.products.map(product =>
            product.productId === action.payload.productId ? { ...product, quantity: action.payload.newName } : product
          ),
        };
    default:
      return state;
  }
};

export default rootReducer;