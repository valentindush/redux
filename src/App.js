import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import increment from './actions/increment';
import decrement from './actions/decrement';
function App() {

  const counter = useSelector(state => state.counter);
  const isLooged = useSelector(state=> state.isLoogged);
  const dispatch = useDispatch()
  return (
    <div className="App">
     
     <p>Counter : {counter}</p>
     <p>is Logged in :{isLooged} </p>

     <button onClick={()=>dispatch(increment())}>Increment</button>
     <button onClick={()=>dispatch(decrement())}>Derement</button>

    </div>
  );
}

export default App;
