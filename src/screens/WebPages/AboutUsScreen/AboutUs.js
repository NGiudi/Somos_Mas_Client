// import from react.
import React from "react";
import { useQuery } from 'react-query';

// improt from external libraries.
import { Image } from '@chakra-ui/react';

// import from local files.
import { Rectangular, SectionText, Title } from '../../../assets/styles/globalStyles';
import { Grid, ImageBox, MemberName, MemberJob, TopLayer } from './AboutUsStyles';
import PageLayout from "../PageLayout";

// import services.
import { getAboutUsData } from '../../../services/axios/queries/aboutUs';

// import constant.
import { ABOUT_US_QUERY } from '../../../constants/queries';
import { HTTP_CODE_204, HTTP_CODE_500 } from "../../../constants/numbers";

function AboutUs() {
  const { data, isError, isLoading } = useQuery(ABOUT_US_QUERY, getAboutUsData);

  if (isLoading)
    return <h1>Loading...</h1>

  if (isError ||  data.status === HTTP_CODE_500)
    return <h1>Error</h1>

  return (
    <PageLayout>
      <SectionText>
        <Title>Sobre nosotros</Title>
        <Rectangular/>
        <h1>Desde 1997 en Somos Más trabajamos con los chicos y chicas, mamás y
           papás, abuelos y vecinos del barrio La Cava generando procesos de
           crecimiento y de inserción social. Uniendo las manos de todas las
           familias, las que viven en el barrio y las que viven fuera de él, es que
           podemos pensar, crear y garantizar estos procesos. Somos una asociación
           civil sin fines de lucro que se creó en 1997 con la intención de dar
           alimento a las familias del barrio. Con el tiempo fuimos involucrándonos
           con la comunidad y agrandando y mejorando nuestra capacidad de trabajo.
           Hoy somos un centro comunitario que acompaña a más de 700 personas a
           través de las áreas de: Educación, deportes, primera infancia, salud,
           alimentación y trabajo social.</h1>
      </SectionText>

      <SectionText>
        <Title>Nuestro Equipo</Title>
        <Rectangular/>
        <p>Armamos un equipo de trabajo con gente dedicada, que da lo mejor de sí mismo y 
          creando un excelente ambiente y una sinergia para lograr nuestras metas y ayudar a 
          nuestra comunidad.</p>

        <Grid>
        { data.status !== HTTP_CODE_204 ? (
            data.data.map(member =>{
              console.log(member);
              return (
                <ImageBox key={member.id} href={ member.linkedinURL } target="_blank" rel="noopener noreferrer">
                  <Image boxSize="200px" src={member.imageURL} alt={member.imageAlt}/>
                  <TopLayer>
                    <MemberName>{ member.name }</MemberName>
                    <MemberJob>{ member.job }</MemberJob>
                  </TopLayer>
                </ImageBox>
              );
            })
          ) : (
            <h1> No data </h1>
          )
        }
        </Grid>
      </SectionText>
    </PageLayout>
  );
}

export default AboutUs;
