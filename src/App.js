import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import { removeFromCart } from './actions/cartActions';
function App() {

  const counter = useSelector(state => state.counter);
  const isLooged = useSelector(state=> state.isLoogged);
  const dispatch = useDispatch()

  const products = [
    {name: 'Notebook', price: 1000, id: 1},
    {name: 'Mouse', price: 200, id: 2},
    {name: 'Keyboard', price: 300, id: 3},
    {name: 'Gamepad', price: 400, id: 4},

  ]

  const addtocart = (product)=>{
    dispatch({type: 'ADD_TO_CART', payload: product})
  }

  const remove = (product)=>{
    dispatch(removeFromCart(product))
  }

  const cartProducts = useSelector(state => state.cart)

  return (


    <div className="App">
     
     {/* <p>Counter : {counter}</p>
     <p>is Logged in :{isLooged} </p>

     <button onClick={()=>dispatch(increment())}>Increment</button>
     <button onClick={()=>dispatch(decrement())}>Derement</button> */}

     <h2>Shooping cart with redux</h2>
    <div className='products'>
        {products.map((item)=>{

          return (
            <div className='product' key={item.id}>
              <p>{item.name}</p>
              <p>{item.price}</p>

              <button onClick={()=>addtocart(item)}>Add to cart</button>
            </div>
          )
          })}
    </div>

    <div className='cart'>
      <h2>Cart</h2>
      <h3>Total: {cartProducts.length} items</h3>

      <div className=''>
          {cartProducts.map((item)=>{
            return (
              <div className='cart-item' key={item.id}>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <button onClick={()=>remove(item)}>Remove</button>
              </div>
            )
          })}
      </div>
    </div>

    </div>
  );
}

export default App;
