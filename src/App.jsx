import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './components/ProductList'
import { Provider } from 'react-redux';
import store from './redux/store';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import ManageProducts from './screen/ManageProducts';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/manage-products" element={<ManageProducts />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App