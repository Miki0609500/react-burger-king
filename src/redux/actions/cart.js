export const ADD_FOOD_CART = 'ADD_FOOD_CART'
export const CLEAR_CART = 'CLEAR_CART'
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM'
export const PLUS_CART_ITEM = 'PLUS_CART_ITEM'
export const MINUS_CART_ITEM = 'MINUS_CART_ITEM'


export const addFoodCart = (objFood) => ({ type: ADD_FOOD_CART, payload: objFood})
export const clearCart = () => ({ type: CLEAR_CART})
export const removeCartItem = (id) => ({ type: REMOVE_CART_ITEM, payload: id })
export const plusCartItem = (id) => ({ type: PLUS_CART_ITEM, payload: id })
export const minusCartItem = (id) => ({ type: MINUS_CART_ITEM, payload: id })