import logo from './logo.svg';
import './App.css';
// import Todo from './Todo';

import Practice_counter from './practice';
import { TodoContextProvider } from './Todo';

function App() {
  return (
    <div className="App">
      <TodoContextProvider/>
      {/* <Practice_counter/> */}
    </div>
  );
}

export default App;
