export const initialState = {
  total: 0,
  products: [],
};

export const storeReducer = (state, action) => {
  switch (action.type) {
    case "add": {
      return { ...state, products: action.payload };
    }
    case "remove": {
      return { ...state, products: action.payload };
    }
    case "update": {
      return { ...state, total: action.payload };
    }
    default: {
      return state;
    }
  }
};
export default storeReducer;
