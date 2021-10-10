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
import Login from './Componants/Login/Login';
import Signup from './Componants/Signup/Signup';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Shipping from './Componants/Shipping/Shipping';
function App() {
  return (
    <div className=" ">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route path="/home">
              <Shop></Shop>
            </Route>
            <Route path="/review">
              <OrderReview></OrderReview>
            </Route>
            <PrivateRoute path="/inventory">
              <ManageInventory></ManageInventory>
            </PrivateRoute>
            <PrivateRoute exact path="/shipping">
              <Shipping></Shipping>
            </PrivateRoute>
            <Route exact path="/">
              <Shop></Shop>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
