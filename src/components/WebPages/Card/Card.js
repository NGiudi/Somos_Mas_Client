// imports from react
import React from 'react';

// import from externals libraries.
import { Badge, Box, Image } from '@chakra-ui/react';

//import styles
import { Content, Title } from './CardStyles';

function Card({ data }) {

  if (!data)
    return <h5> error </h5>

  const { altImage, category, date, imageUrl, title, text } = data;

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m="auto">
      <Image src={imageUrl} alt={altImage} />

      <Box p="6">
        <Badge borderRadius="full" px="2" colorScheme="yellow">
          {category}
        </Badge>

        <Title> { title } </Title>

        <Content> { text } </Content>

        <Box as="span" ml="2" color="gray.600" fontSize="sm"> { date } </Box>
      </Box>
    </Box>
  );
}

export default Card;