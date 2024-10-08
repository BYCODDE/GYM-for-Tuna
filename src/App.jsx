import { Route, Routes } from "react-router-dom";
import Stories from "./pages/Stories";
import Home from "./pages/Home";
import Service from "./pages/Services";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Layout from "./ui/Layout";
import { createContext, useState } from "react";

export const MyContext = createContext();

const App = () => {
  const [burgerValue, setBurgerValue] = useState(false);

  return (
    <MyContext.Provider value={{ burgerValue, setBurgerValue }}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/services" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </MyContext.Provider>
  );
};

export default App;
