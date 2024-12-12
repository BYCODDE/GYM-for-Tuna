import { Route, Routes } from "react-router-dom";
import Stories from "./pages/Stories";
import Home from "./pages/Home";
import Service from "./pages/Services";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Layout from "./ui/Layout";
import AdminLayout from "./ui/AdminLayout";
import Dashboard from "./pages/admin-pages/Dashboard";
import AdminServices from "./pages/admin-pages/AdminServices";
import AboutMe from "./pages/admin-pages/AboutMe";
import AdminBlogs from "./pages/admin-pages/AdminBlogs";
import Blogs from "./pages/Blogs";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="admin-about" element={<AboutMe />} />
        <Route path="admin-blogs" element={<AdminBlogs />} />
        <Route path="admin-services" element={<AdminServices />} />
      </Route>
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default App;
