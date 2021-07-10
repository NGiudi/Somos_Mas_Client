// imports from react.
import React from 'react';

// imports from externals libraries.
import { Text, SimpleGrid } from "@chakra-ui/react";

// imports from local files.
import Footer from '../../components/WebPages/Footer/Footer';

const Home = () => {
  
  return (
    <SimpleGrid mt={10}>      
      <Text m="auto" maxW="1000px" w="70%" mt="6rem" as="h1" fontSize="2xl" textAlign="center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>

      <Footer />
    </SimpleGrid>
  )
}

export default Home;