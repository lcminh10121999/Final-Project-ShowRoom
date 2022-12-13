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


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/admin" element={<MasterLayout />} >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="category" element={<Category />} >
            <Route path="list" element={<Category />} />
          </Route>
          <Route path="user" element={<User />} />
          <Route path="product" element={<Product />} />
          <Route path="order" element={<Order />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
