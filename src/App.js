import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './Componants/Header/Header';
import Shop from './Componants/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import OrderReview from './Componants/OrderReview/OrderReview';
import ManageInventory from './Componants/ManageInventory/ManageInventory';
function App() {
  return (
    <div className=" ">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <OrderReview></OrderReview>
          </Route>
          <Route path="/inventory">
            <ManageInventory></ManageInventory>
          </Route>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
