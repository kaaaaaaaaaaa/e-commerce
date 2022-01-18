import Header from 'components/Header';
import React, { useEffect } from 'react';
import productsApi from './api/productApi';
import './App.css';

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      };

      const productsList = await productsApi.getAll(params);
      console.log('products:', productsList);
    };
    fetchProducts();
  }, []);
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
