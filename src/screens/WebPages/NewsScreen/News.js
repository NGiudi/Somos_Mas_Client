// import from react.
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

// import from external libraries.
import { Center } from '@chakra-ui/react';

// import from local files.
import Pagination from '../../../components/Pagination/Pagination';
import Card from '../../../components/WebPages/Card/Card';
import { Grid, Rectangular, Title } from './NewsStyles';
import PageLayout from '../PageLayout';

// import from services.
import { getNewsData } from '../../../services/axios/queries/news'; 

// import constants.
import { NEWS_QUERY } from '../../../constants/queries';

function News() {
  const [page, setPage] = useState(1);
  const query = useQuery(NEWS_QUERY, () => getNewsData(page)); 

  useEffect (() => {
    query.refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  if (query.isLoading) {
    return <h1>loading...</h1>
  }

  if (query.isError) {
    return <h1>Error</h1>
  }

  const onChangePage = selected => setPage(selected);

  return (
    <PageLayout>
      <Title>Noticias</Title>
      <Rectangular/>

      <Grid>
        {
          query.data.data.map(card => {
            return (
              <Card data={card} key={card.id}/>
            );
          })
        }
      </Grid>
      
      <Center my="3rem">
        <Pagination pages={query.data.pages} page={page} onChangePage={onChangePage}/>
      </Center>
    </PageLayout>
  );
}

export default News;