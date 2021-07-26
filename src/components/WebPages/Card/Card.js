// imports from react
import React from 'react';
import { Link } from 'react-router-dom';

// import from externals libraries.
import { Badge, Box, Button, Image } from '@chakra-ui/react';

//import styles
import { Content, Footer, Title } from './CardStyles';

function Card({ data }) {

  if (!data)
    return <h5> error </h5>

  const { category, content, date, id, imageAlt, imageURL, title } = data;

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m="auto">
      <Image src={imageURL} alt={imageAlt} />

      <Box p="6">
        <Badge borderRadius="full" px="2" colorScheme="yellow">
          {category.name}
        </Badge>

        <Title>{ title }</Title>
        <Content>{ content }</Content>
        <Footer>Creado el: { date }</Footer>

        <Box mt="1rem" textAlign="right">
          <Link to={`/news/${id}`}>
            <Button variant="outline">Leer Articulo</Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Card;