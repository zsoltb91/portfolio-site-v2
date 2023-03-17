import React from "react";
import "./App.css";
import MainContainer from "./components/MainContainer/MainContainer";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import WeatherData from "./components/WeatherData/WeatherData";
import Footer from "./components/Footer/Footer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Projects from "./components/Projects/Projects";
import MemoryGame from "./components/MemoryGame/MemoryGame";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <MainContainer>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Intro />
            </>
          }
        />

        <Route
          path="/projects"
          element={
            <>
              <Projects />
            </>
          }
        />

        <Route
          path="/weatherapp"
          element={
            <>
              <WeatherData />
            </>
          }
        />

        <Route
          path="/memgame"
          element={
            <>
              <MemoryGame />
            </>
          }
        />

        <Route
          path="/contact"
          element={
            <>
              <Contact />
            </>
          }
        />
      </Routes>
      <Footer />
    </MainContainer>
  );
}

export default App;
