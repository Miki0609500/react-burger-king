import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { BurgerFood, Categories } from '../components'
import LoadingBlock from '../components/BurgerFood/LoadingBlock'
import { getBurgerFood } from '../redux/actions/burger-food'
import { addFoodCart } from '../redux/actions/cart'

const categotyName = ['Новинки', 'Кинг Комбо', 'Кинг Бокс 5в1', 'Бургеры из говядины', 'Бургеры из курицы и рыбы', 
                      'Креветки', 'Роллы', 'Картошка', 'Закуски', 'Напитки']

const Home = () => {

  const cartItems = useSelector(({ cart }) => cart.cartItems)
  const {items, isLoading} = useSelector(({ burgerFood }) => burgerFood)


  const dispatch = useDispatch()
  
  const handlerAddFoodToCart = (obj) => {
    dispatch(addFoodCart(obj))
  }


  React.useEffect(() => {
    dispatch(getBurgerFood())
  }, [])

  return <div>
    <div className='content__top'>
      <div className='container'>
        <Categories  items={categotyName}  />
      </div>
    </div>
    <div className="content__wrap">
      <div className="container">
        <div className='content__main'>
        {
          categotyName.map((item, index) => <div key={`${item}_${index}`} className='menu__item'  id={item}>
            <h2 className='content__title'>{item}</h2>
            <div className='content__items'>
            {
              !isLoading 
                ? items.map(item => index === item.category 
                    ? <BurgerFood
                        addedCount={cartItems[item.id] && cartItems[item.id].totalCount}
                        handlerAddFoodToCart={handlerAddFoodToCart} 
                        key={item.id} 
                        {...item} /> 
                    : null )
                : Array(12).fill(0).map((_, index) => <LoadingBlock key={index} />)
            }
            </div>
          </div>)
        }
        </div>
      </div>
    </div>
  </div>
}

export default Home
