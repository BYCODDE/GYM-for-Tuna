import { Route, Routes } from "react-router-dom";
import Stories from "./pages/Stories";
import Home from "./pages/Home";
import Service from "./pages/Services";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Layout from "./ui/Layout";
import AdminLayout from "./ui/AdminLayout";
import Dashboard from "./pages/admin-pages/Dashboard";
import AdminAbout from "./pages/admin-pages/AdminAbout";
import AdminPrices from "./pages/admin-pages/AdminPrices";
import AdminServices from "./pages/admin-pages/AdminServices";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="admin-about" element={<AdminAbout />} />
        <Route path="admin-prices" element={<AdminPrices />} />
        <Route path="admin-services" element={<AdminServices />} />
      </Route>
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default App;
