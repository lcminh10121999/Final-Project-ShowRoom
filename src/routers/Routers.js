import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import CarListing from "../pages/carListing/CarListing";
import CarDetails from "../pages/carDetails/CarDetails";
import Blog from "../pages/blog/Blog";
import BlogDetails from "../pages/blogDetails/BlogDetails";
import NotFound from "../pages/notFound/NotFound";
import Contact from "../pages/contact/Contact";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="/cars/:slug" element={<CarDetails />} />
      <Route path="/blogs" element={<Blog />} />
      <Route path="/blogs/:slug" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
