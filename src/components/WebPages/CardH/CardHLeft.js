// import from react.
import React from 'react';

// import from external libraries.
import { Box } from '@chakra-ui/react';

// import from local files. 
import { Image, Section, SecTitle } from './CardHStyles';

function CardHLeft(props) {
  const { title, content, imageURL, imageAlt } = props.data
  
  return (
    <Section>
      <Image src={imageURL} alt={imageAlt}/>

      <Box maxW="800px">
        <SecTitle>{title}</SecTitle>
        <p>{content}</p>
      </Box>
    </Section>
  );
}

export default CardHLeft;