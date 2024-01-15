import { Box, Container, Flex, Text } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Container maxW={"100%"} mt={5}>
      <Navbar />
      <Flex bg={"#f1f1f1"}>
        <Sidebar />
        <Box p={5} minW={"80%"}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Box
            position={"fixed"}
            zIndex={2}
            right={"10"}
            bottom={"10"}
            border={"1px solid #ccc"}
            p={2}
            borderRadius={"15px"}
            cursor={"pointer"}
            _hover={{bg: "#ff4d4d",color: "#fff"}}
            onClick={() => window.open(' http://localhost:5174/?username=user1&email=user1@gmail.com&projectId=Company-a')}
          >
            แจ้งปัญหา
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}

export default App;
