import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Error from "./pages/Error";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import GlobalStyle from "./styles/global.styled";
const App: React.FC = () => {
  const theme = {
    themeColor: "#E6D93A",
    primaryBackground: "#111018",
    secondaryBackground: "#212026",
    primaryText: "#FFFFFF",
    secondaryText: "#BCBCBC",
  };
  console.log("APP");
  
  return (
     <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:omdbId" element={<MovieDetails />} />
          <Route element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};
export default App;
