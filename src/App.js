import logo from './logo.svg';
import './App.css';
import MasterLayout from './layout/admin/MasterLayout';
import { BrowserRouter as Router, Route, Link, Routes, } from "react-router-dom";
import Dashboard from './component/admin/dashboard';
import Category from './component/admin/category';
import User from './component/admin/user';
import Product from './component/admin/product';
import NotFoundPage from './component/admin/NotFoundPage';
import Order from './component/admin/order/order';
import CarItemDetail from './component/admin/CarItemDetail';
import Brand from './component/admin/Brand';
import ProductCreate from './component/admin/ProductCteate';
import Login from './component/admin/Login';
import Register from './component/admin/Register';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/admin/login' element={<Login />} />
        <Route path='/admin/register' element={<Register />} />
        <Route path="/admin" element={<MasterLayout />} >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="category" >
            <Route index element={<Category />} />
            <Route path="list" element={<Category />} />
          </Route>
          <Route path="brand" >
            <Route index element={<Brand />} />
            <Route path="list" element={<Brand />} />
          </Route>
          <Route path="user" element={<User />} />
          <Route path="product" >
            <Route index element={<Product />} />
            <Route path="list" element={<Product />} />
            <Route path="detail/:id" element={<CarItemDetail />} />
            <Route path='create' element={<ProductCreate />} />
          </Route>
          <Route path="order" element={<Order />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
