export const ADD_PRODUCT = 'ADD_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const EDIT_PRODUCT = 'EDIT_PRODUCT';

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product,
});

export const deleteProduct = (productId) => ({
  type: DELETE_PRODUCT,
  payload: productId,
});
export const editProduct = (productId, newName) => ({
  type: EDIT_PRODUCT,
  payload: {
    productId,
    newName
  },
});