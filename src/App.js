import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/Theme";
import { Container, MainBody, FadeImage } from "./styles/Global.styled";

//import component
import Showcase from "./components/Showcase";
import MySkills from "./components/MySkills";
import MyProjects from "./components/MYProjects";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

//top,bottom img from assests
import TopImg from "./assets/top.png";
import BottomImg from "./assets/bottom.png";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <MainBody>
          <Navbar />
          <Container>
            <Showcase />
            <MySkills />
            <MyProjects />
            <Footer />
          </Container>

          <FadeImage src={TopImg} top="0" />
          <FadeImage src={BottomImg} top="30vh" />
        </MainBody>
      </ThemeProvider>
    </>
  );
}

export default App;
