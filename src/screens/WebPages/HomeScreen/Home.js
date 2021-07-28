// import from react.
import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';

// import from external libraries.
import { Button, Center, Text } from '@chakra-ui/react';

// import from local files.
import { Rectangular, Title } from '../../../assets/styles/globalStyles';
import Card from '../../../components/WebPages/Card/Card';
import { Grid, Section } from './HomeStyles';
import PageLayout from '../PageLayout';

// import services.
import { getHomeData } from '../../../services/axios/queries/home';

// import constants.
import { HTTP_CODE_204, HTTP_CODE_500 } from '../../../constants/numbers';
import { HOME_QUERY } from '../../../constants/queries';

const Home = () => {
  const { isLoading, isError, data } = useQuery(HOME_QUERY, getHomeData);

  if (isLoading)
    return <h1>Loading...</h1>

  if (isError || data.status === HTTP_CODE_500)
    return <h1>Error</h1>

  return (
    <PageLayout>
      {/* welcome text */}
      <Section>
        <Text m="auto" maxW="1000px" w="70%" mt="6rem" as="h1" fontSize="2xl" textAlign="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </Section>
      
      {/* last news. */}
      <Section>
        <Title>Novedades</Title>
        <Rectangular/>
        
        { /* news section */
          data.status !== HTTP_CODE_204 ? (
            <>
              <Grid>
                { data.news.map(card => {
                    return (
                      <Card data={card} key={card.id}/>
                    );
                })}
              </Grid>

              <Center mt="3rem">
                <Link to="/news">
                  <Button>Ver más noticias</Button>
                </Link>
              </Center>
            </>
        ) : (
          <h1>No data</h1>
        )}
      </Section>

      {/* testimonials */}
      <Section>
        <Title>Testimonios</Title>
        <Rectangular/>
      </Section>
    </PageLayout>
  )
}

export default Home;