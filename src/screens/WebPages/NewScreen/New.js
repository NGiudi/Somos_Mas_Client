// import from react.
import React from 'react';
import { useParams } from 'react-router';
import { useQuery } from 'react-query';

// import from external libraries.
import { Badge, Center, Image } from '@chakra-ui/react';
import parse from 'html-react-parser';

// import from local files.
import { Article, Title } from './NewStyles';
import PageLayout from '../PageLayout';

// import services.
import { getNewPost } from '../../../services/axios/queries/news';

//import constants.
import { HTTP_CODE_204, HTTP_CODE_500 } from '../../../constants/numbers';
import { NEW_QUERY } from '../../../constants/queries';

function NewScreen() {
  const { id } = useParams();

  const { isLoading, isError, data } = useQuery(NEW_QUERY, () => getNewPost(id));
  
  if (isLoading)
    return <h1>Loading...</h1>

  if (isError)
    return <h1>Error</h1>

  if (data.status === HTTP_CODE_204)
    return <h1>La moticia que quiere acceder no existe</h1>

  if (data.status === HTTP_CODE_500)
    return <h1>No se pudo encontrar el contendio de la pagina. Lo sentimos</h1>

  console.log(data);
  
  return (
    <PageLayout>
      <Article>
        <Badge mt="4rem" borderRadius="full" px="2" colorScheme="yellow">
          {data.data.category.name}
        </Badge>

        <Title> { data.data.title } </Title>
        
        <Center my="2rem">
          <Image src={data.data.imageURL} />
        </Center>
        
        { parse(data.data.content) }

      </Article>
    </PageLayout>
  );
}

export default NewScreen;