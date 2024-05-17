import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import IndividualBlogs from "./pages/IndividualBlogs";
import StopwatchParent from "./pages/stopwatch/StopwatchParent";
import Crypto from "./pages/crypto_proj/App";
import BlogsHome from "./pages/BlogsHome";
import BlogLayout from "./BlogLayout";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<div>This is new about</div>} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/blogs" element={<BlogLayout />}>
          <Route index element={<BlogsHome />} />
          <Route path=":id" element={<Blogs />} />
          {/* <Route   /> */}
          <Route path="category/:categoryId" element={<IndividualBlogs />} />
        </Route>

        <Route path="/stopwatch" element={<StopwatchParent />} />
        <Route path="/crypto" element={<Crypto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
