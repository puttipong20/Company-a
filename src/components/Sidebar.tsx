import { Box, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  return (
    <Box
      h={"100vh"}
      w={"20%"}
      p={3}
      bg={"#fff"}
      border={"2px solid #ccc"}
      borderRadius={"5px"}
    >
      <Text
        onClick={() => navigate("/")}
        textAlign={"center"}
        py={4}
        mb={1}
        cursor={"pointer"}
        _hover={{ bg: "blue.300" }}
        borderRadius={"15px"}
      >
        Home
      </Text>
      <Text
        onClick={() => navigate("/about")}
        textAlign={"center"}
        py={4}
        mb={1}
        cursor={"pointer"}
        _hover={{ bg: "blue.300" }}
        borderRadius={"15px"}
      >
        About
      </Text>
      <Text
        onClick={() => navigate("/contact")}
        textAlign={"center"}
        py={4}
        mb={1}
        cursor={"pointer"}
        _hover={{ bg: "blue.300" }}
        borderRadius={"15px"}
      >
        Contact
      </Text>
    </Box>
  );
}

export default Sidebar;
