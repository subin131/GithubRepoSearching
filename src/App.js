import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import DetailPage from "./pages/DetailPage";


function App() {
  return (
    <>

    <Router>
      <Routes>
        <Route exact path="/" element={<SearchPage/>} />
        <Route path="/detail/:owner/:repo" element={<DetailPage/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;