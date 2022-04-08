import Header from 'components/Header';
import CartFeature from 'features/Cart';
import HotDealPage from 'features/DealShock/Pages/HotDealPage';
import ProductFeature from 'features/Product';
import SearchResult from 'features/Product/components/SearchResult';
import CategoryPage from 'features/Product/Pages/CategoryPage';
import MainPage from 'features/Product/Pages/MainPage';
import User from 'features/User';
import { Redirect, Route, Switch } from 'react-router-dom';
import theme from './styles/GlobalStyle';
import { ThemeProvider } from '@material-ui/core/styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Switch>
          <Redirect from="/home" to="/" exact />
          <Route path="/products" component={ProductFeature}></Route>
          <Route path="/cart" component={CartFeature}></Route>
          <Route path="/deal" exact component={HotDealPage} />
          <Route path="/category/:id" exact component={CategoryPage}></Route>
          <Route path="/user" component={User} />
          <Route path="/search=:value" component={SearchResult} />

          <Route path="/" exact component={MainPage}></Route>
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
