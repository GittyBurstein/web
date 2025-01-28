import './App.css';
import store from './Lesson-5-Redux/Redux/Store.js';
//import Nav from './web/components/nav.js';
//import { BrowserRouter } from 'react-router-dom';
import Screen from './Lesson-5-Redux/componnents/Screen.js';
import { Provider } from 'react-redux';
function App() {
  return (
  <Provider store={store}>
    <div>
       <Screen></Screen>
    </div>
 </Provider>
    //<BrowserRouter>
     // <div className="App">
        //<Nav />
      //</div>
    //</BrowserRouter>
  );
}

export default App;
