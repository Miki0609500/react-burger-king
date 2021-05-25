import { SET_BURGER_FOOD, SET_LOADING } from "../actions/burger-food"

const initialState = {
  items: [],
  isLoading: false
}

const burgerFood = (state = initialState , action) => {
  switch(action.type){
    case SET_BURGER_FOOD:
      return {
        ...state,
        items: [...action.payload],
        isLoading: false
      }
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload
      }
    default:
      return state
  }
}

export default burgerFood