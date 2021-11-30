import logo from './logo.svg';
import { useState } from 'react';
import './App.css';


function App(props) {

  // props are read only ❌
  // props.user = 'jan'

  // const stateArray = useState(0);
  // const count = stateArray[0]
  // const setCount = stateArray[1]
  // console.log(stateArray)

  // this is just to demo the lazy initializer
  const setInitialValue = () => {
    console.log('set initial value')
    return 0
  }

  // this is how we add state
  // add a lazy initializer to set the initial value only once
  // const [count, setCount] = useState(() => setInitialValue())
  const [count, setCount] = useState(0)
  const [liked, setLiked] = useState(false)

  const clickHandler = () => {
    // increment the state of count by 1
    // count = 1; -> ❌ don't mutate state directly
    // if we use the previous state to calculate the new state 
    // you should pass a function to setCount

    // setCount(count + 1)
    setCount(count => count + 1)
  }
  const likeHandler = () => setLiked(liked => !liked)

  return (
    <div className="App">
      <header className="App-header">

        {/* <h1>hello {props.user}</h1> */}
        <h1>Counter: {count}</h1>
        <button onClick={clickHandler}>Click me 👇</button>
        <h1>{liked ? 'I like it 👍' : 'I do not like it 👎'}</h1>
        <button onClick={likeHandler}>{liked ? 'Unlike' : 'Like'}</button>
      </header>
    </div>
  );
}

export default App;
