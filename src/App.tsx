import Navbar from "./components/navbar";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box p="8" borderWidth="1px" borderColor="border.disabled" color="fg.disabled" height={"100vh"}>
        <Navbar />
    </Box>
  );
}

export default App;
