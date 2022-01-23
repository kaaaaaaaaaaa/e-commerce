import Header from 'components/Header';
import ProductFeature from 'features/Product';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

function App() {
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const params = {
  //       _limit: 10,
  //     };

  //     const productsList = await productsApi.getAll(params);
  //     console.log('products:', productsList);
  //   };
  //   fetchProducts();
  // }, []);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Redirect from="/home" to="/" exact></Redirect>
        <Route path="/todos"></Route>
        <Route path="/albums"></Route>
        <Route path="/products" component={ProductFeature}></Route>
      </Switch>
    </div>
  );
}

export default App;
