import { ADD_FOOD_CART, CLEAR_CART, MINUS_CART_ITEM, PLUS_CART_ITEM, REMOVE_CART_ITEM } from "../actions/cart"

const initialState = {
  cartItems: {},
  totalCount: 0,
  totalPrice: 0
}

const getTotalPrice = (arr, count) => arr.reduce((_, obj) => {
  return obj.price * count
}, 0)


// const getTotalSum = (obj, path) => {
//   Object.keys(obj).reduce((sum, key) => console.log(obj[key].path))
// }

const cart = (state = initialState, action) => {
  switch(action.type){
    case ADD_FOOD_CART:
      
      const currentFoodItems = state.cartItems[action.payload.id]
        ?  [...state.cartItems[action.payload.id].items]
        : [action.payload]

        const currentCount = state.cartItems[action.payload.id]
          ? state.cartItems[action.payload.id].totalCount + 1
          : [action.payload].length

      const newCartItems = {
        ...state.cartItems,
        [action.payload.id]: {
          items: currentFoodItems,
          totalCount: currentCount,
          totalPrice: getTotalPrice(currentFoodItems, currentCount)
        }
      }

      // const totalCount = getTotalSum(newCartItems, 'totalCount')
      // const totalPrice = getTotalSum(newCartItems, 'totalPrice')
      const totalCount = Object.keys(newCartItems).reduce((sum, key) => newCartItems[key].totalCount + sum, 0 )
      const totalPrice = Object.keys(newCartItems).reduce((sum, key) => newCartItems[key].totalPrice + sum, 0 )

    return {
      ...state,
      cartItems: newCartItems,
      totalCount,
      totalPrice
    }
    case CLEAR_CART:
      return { cartItems: {}, totalCount: 0, totalPrice: 0 }
    case REMOVE_CART_ITEM:{
      const newCartItems = {
        ...state.cartItems
      }

      const currentTotalCount = newCartItems[action.payload].totalCount
      const currentTotalPrice = newCartItems[action.payload].totalPrice
      delete newCartItems[action.payload]
      return {
        ...state,
        cartItems: newCartItems,
        totalCount: state.totalCount - currentTotalCount,
        totalPrice: state.totalPrice - currentTotalPrice

      }
    }

    case PLUS_CART_ITEM:{

      const oldItems = [
          ...state.cartItems[action.payload].items
        ]

      const currentCount = state.cartItems[action.payload].totalCount + 1

      const newCartItems = {
        ...state.cartItems,
        [action.payload]: {
          items: oldItems,
          totalCount: currentCount,
          totalPrice: getTotalPrice(oldItems, currentCount)
        }
      }

      const totalCount = Object.keys(newCartItems).reduce((sum, key) => newCartItems[key].totalCount + sum, 0 )
      const totalPrice = Object.keys(newCartItems).reduce((sum, key) => newCartItems[key].totalPrice + sum, 0 )

      return {
        ...state,
        cartItems: newCartItems,
        totalCount,
        totalPrice
      }
    }

    case MINUS_CART_ITEM:{
      const oldItems = state.cartItems[action.payload].items
      const currentCount = state.cartItems[action.payload].totalCount > 1 
        ? state.cartItems[action.payload].totalCount - 1
        : state.cartItems[action.payload].totalCount

      const newCartItems = {
        ...state.cartItems,
        [action.payload]: {
          items: oldItems,
          totalCount: currentCount,
          totalPrice: getTotalPrice(oldItems, currentCount)
        }
      }
      const totalCount = Object.keys(newCartItems).reduce((sum, key) => newCartItems[key].totalCount + sum, 0 )
      const totalPrice = Object.keys(newCartItems).reduce((sum, key) => newCartItems[key].totalPrice + sum, 0 )

      return {
        ...state,
        cartItems: newCartItems,
        totalPrice,
        totalCount,
      }
    }
    default:
      return state
  }
}

export default cart