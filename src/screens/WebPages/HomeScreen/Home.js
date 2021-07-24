// imports from react.
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

// imports from externals libraries.
import { Button, Center, Text } from '@chakra-ui/react';

// imports from local files.
import Footer from '../../../components/WebPages/Footer/Footer';
import Header from '../../../components/WebPages/Header/Header';
import Card from '../../../components/WebPages/Card/Card';

// imports styles
import { Grid, Rectangular, Section, SectionTitle } from './HomeStyles';

const cards = [
  { 
    altImage: "foto de george russel",
    category: "formula 1",
    date: "hace 2 semanas", 
    imageUrl: "https://cdn-9.motorsport.com/images/mgl/2eA4BKp2/s8/george-russell-williams-1.jpg",  
    title: "La vida de George Russel", 
    text: "este primer contenido habla acerca de la carrera profesional de russel en la formula 1. Se espera un excelente futuro para este piloto que cada día destaca más." 
  },
  { 
    altImage: "foto de george russel",
    category: "formula 1",
    date: "hace 2 semanas", 
    imageUrl: "https://cdn-9.motorsport.com/images/mgl/2eA4BKp2/s8/george-russell-williams-1.jpg",  
    title: "La vida de George Russel", 
    text: "este primer contenido habla acerca de la carrera profesional de russel en la formula 1. Se espera un excelente futuro para este piloto que cada día destaca más." 
  },
  { 
    altImage: "foto de george russel",
    category: "formula 1",
    date: "hace 2 semanas", 
    imageUrl: "https://cdn-9.motorsport.com/images/mgl/2eA4BKp2/s8/george-russell-williams-1.jpg",  
    title: "La vida de George Russel", 
    text: "este primer contenido habla acerca de la carrera profesional de russel en la formula 1. Se espera un excelente futuro para este piloto que cada día destaca más." 
  },
  { 
    altImage: "foto de george russel",
    category: "formula 1",
    date: "hace 2 semanas", 
    imageUrl: "https://cdn-9.motorsport.com/images/mgl/2eA4BKp2/s8/george-russell-williams-1.jpg",  
    title: "La vida de George Russel", 
    text: "este primer contenido habla acerca de la carrera profesional de russel en la formula 1. Se espera un excelente futuro para este piloto que cada día destaca más." 
  }
];

const Home = () => {
  
  return (
    <Fragment>
      <Header />

      <Section>
        <Text m="auto" maxW="1000px" w="70%" mt="6rem" as="h1" fontSize="2xl" textAlign="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </Section>
      
      {/* Last News */}
      <Section>
        <SectionTitle>Novedades</SectionTitle>
        <Rectangular/>

        <Grid>
          { cards.map (card => {
            return (
              <Card data={card}/>
            );
          })}
        </Grid>

        <Center mt="3rem">
          <Link to="/news">
            <Button>Ver más noticias</Button>
          </Link>
        </Center>
      </Section>

      {/* Testimonials */}
      <Section>
        <SectionTitle>Testimonios</SectionTitle>
        <Rectangular/>
      </Section>
      
      <Footer />
    </Fragment>
  )
}

export default Home;