
import react, { Component } from "react";
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Linechart from "./Component/Linechart.js";


const rootElement = document.getElementById("root");

function App() {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Linechart />} />

      </Routes>
    </BrowserRouter>,
    rootElement
  );
}

export default App;