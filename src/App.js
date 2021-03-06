import React from "react";
import GlobalStyles from "./components/styled/Global";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";

import { StyledAppContainer } from "./components/styled/Containers/AppContainer.Styled";

function App() {
  return (
    <StyledAppContainer>
      <GlobalStyles />
      <Nav className="page-padding" />

      <Routes>
        <Route exact path="/my_portfolio" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/resume" element={<Resume />} />
      </Routes>

      <Footer />
    </StyledAppContainer>
  );
}

export default App;
