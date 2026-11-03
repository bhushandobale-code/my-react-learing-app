
import { useState } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import { AdminRoutes } from "./Admin/admin.routes";

import Navbar from "./User/components/navbar";
import Footer from "./User/components/footer";

import Home from "./User/pages/Home";
import About from "./User/pages/About";
import Login from "./User/pages/Login";
import Register from "./User/pages/Register";
import Job from "./User/pages/Job";
import Contact from "./User/pages/Contact";
import Blogs from "./User/pages/Blogs";
import Terms from "./User/pages/Terms";
import ForgotPassword from "./User/pages/Forgot-password";

import "bootstrap-icons/font/bootstrap-icons.css";
import "./User/styles/App.css";

function UserLayout({ searchTerm, setSearchTerm }) {
  return (
    <div className="app">
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <main className="page-background">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        {/* User Website */}
        <Route
          element={
            <UserLayout
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          }
        >
          <Route
            path="/"
            element={<Home searchTerm={searchTerm} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/job" element={<Job />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Route>

        {/* Admin Panel */}
        {AdminRoutes}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
