import Navbar from "./components/navbar";
import Landing from "./components/landing";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";

import { Box } from "@chakra-ui/react";

function App() {
  return (
    <>
    <Box padding={"2rem"}  color="fg.disabled" height={"100%"} width={"100%"} background={"#0A0A0A"} display={"flex"} flexDirection={"column"}>
        <Navbar />
        <Landing />      
    </Box>

    <Box padding={"2rem"}  color="fg.disabled" height={"100%"} width={"100%"} background={"#0A0A0A"} display={"flex"} flexDirection={"column"}>
        <About />      
    </Box>

    <Box padding={"2rem"}  color="fg.disabled" height={"100%"} width={"100%"} background={"#0A0A0A"} display={"flex"} flexDirection={"column"}>
        <Skills />      
    </Box>
    <Box padding={"2rem"}  color="fg.disabled" height={"100%"} width={"100%"} background={"#0A0A0A"} display={"flex"} flexDirection={"column"}>
        <Projects />      
    </Box>
    <Box padding={"2rem"}  color="fg.disabled" height={"100%"} width={"100%"} background={"#0A0A0A"} display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Contact />      
    </Box>
    </>
  );
}

export default App;
