import { Route, Routes } from "react-router-dom";
import Stories from "./pages/Stories";
import Home from "./pages/Home";
import Service from "./pages/Services";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Layout from "./ui/Layout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>  
          <Route index element={<Home />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/services" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
