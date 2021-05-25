import axios from 'axios'

export const SET_BURGER_FOOD = 'SET_BURGER_FOOD'
export const SET_LOADING = 'SET_LOADED'

export const setBurgerFood = (items) => ({ type: SET_BURGER_FOOD, payload: items })
export const setLoaded = (isLoading) => ({ type: SET_LOADING, payload: isLoading  })


export const getBurgerFood = () => async (dispatch) => {
  dispatch(setLoaded(true))
  const resp = await  axios.get(`http://localhost:3003/bk_food`)
  dispatch(setBurgerFood(resp.data))
}