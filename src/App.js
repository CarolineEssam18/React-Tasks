
import ShowCounter from './components/ShowCounter';
import Home from './components/Home';
import Shop from './components/Shop';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import  Nav  from './components/Nav';
import Singleitem from './components/Singleitem';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav/>
        <Switch>
          <Route component={ShowCounter} path="/count" />
          <Route component={Home} path="/" exact/>
          <Route component={Shop} path="/shop" exact />
          <Route component={Singleitem} path="/shop/:id" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
