import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Footer from "./components/footer";
import Header from "./components/header";
import Error from "./pages/error";
import Home from "./pages/home";
import MovieDetails from "./pages/movie-details";
import GlobalStyle from "./styles/global.styled";
const App: React.FC = () => {
  const theme = {
    themeColor: "#E6D93A",
    primaryBackground: "#111018",
    secondaryBackground: "#212026",
    primaryText: "#FFFFFF",
    secondaryText: "#BCBCBC",
  };
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
