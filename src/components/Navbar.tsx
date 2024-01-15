import { Box, Flex } from "@chakra-ui/react"

function Navbar() {
  return (
    <Flex justifyContent={'space-between'} bg={'blue.300'} p={5} borderTopRadius={'15px'}>
        <Box>Company A</Box>
        <Box>admin@gmail.com</Box>
    </Flex>
  )
}

export default Navbar