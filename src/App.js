
import './App.css';

//Components
import Subheader from './components/Header/header.component';
import Myheader from './components/subheader/subheader';
import HomePage from './container/HomePage/Home';
import { BrowserRouter as Router, Route } from "react-router-dom";

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
//Font awesome
import './fontawesome-free-5.15.2-web/css/all.min.css';
import { Switch } from "react-router"
import CartPage from './components/cart/cart';
import ProductDetails from './components/products/productdetails';
import ProductsPage from './components/products/productsPage.';
import Checkout from './components/checkout/checkout';

function App() {
  return (
    <div className="app">
      
      <Router>
      <Subheader/>
      <Myheader/>
           
   <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/cart" exact component={CartPage} />
      <Route path="/checkout" exact component={Checkout} />
      <Route path="/:productSlug/:productId/p" component={ProductDetails} />
       <Route path="/:slug" component={ProductsPage} />
       
      </Switch>

   </Router>
       

    </div>

  );
}
export default App;


