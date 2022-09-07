import React, {useState, createContext} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Contact from "../pages/Contact";
import LecNo8Navbar from "../components/LecNo8Navber";
import {
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";

export const AppContext = createContext();
const LecNo8 = () => {

  const [username, setUsername] = useState("Shahrukh Altaf");

  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  });

  return <>
  <AppContext.Provider value={{username, setUsername}}>
  <QueryClientProvider client={client}>
    <Router>
        <LecNo8Navbar />
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/menu" element={<Menu />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="*" element={<h1>Page Not Found!</h1>}></Route>
        </Routes>
    </Router>
    </QueryClientProvider>
    </AppContext.Provider>
  </>;
};

export default LecNo8;
