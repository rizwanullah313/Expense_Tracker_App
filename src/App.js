// import logo from './logo.svg';
import './App.css';
import Child from './Child.js';
import {TreansactionProvider} from './transContext';
function App() {
  return (
    <TreansactionProvider>
      < Child />
    </TreansactionProvider>
  );
}

export default App;
// pass by value
// pass by refernece