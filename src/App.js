import Header from 'components/Header';
import CartFeature from 'features/Cart';
import ProductFeature from 'features/Product';
import HotDealPage from 'features/DealShock/Pages/HotDealPage';
import MainPage from 'features/Product/Pages/MainPage';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import CategoryPage from 'features/Product/Pages/CategoryPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Redirect from="/home" to="/" exact />
        <Route path="/products" component={ProductFeature}></Route>
        <Route path="/cart" component={CartFeature}></Route>
        <Route path="/deal" exact component={HotDealPage} />
        <Route path="/category/:id" exact component={CategoryPage}></Route>

        <Route path="/" exact component={MainPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
