import Navbar from "./components/navbar";
import Landing from "./components/Landing";

import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box padding={"2rem"} borderWidth="1px" borderColor="border.disabled" color="fg.disabled" height={"100vh"} width={"100vw"} background={"#0A0A0A"} display={"flex"} flexDirection={"column"}>
        <Navbar />
        <Landing />

    </Box>
  );
}

export default App;
