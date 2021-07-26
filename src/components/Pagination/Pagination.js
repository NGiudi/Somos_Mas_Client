// imports from react.
import React, { Fragment } from 'react';

// imports fron external libraries.
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';

// import constants.
import { MAX_PAGES } from '../../constants/numbers';
import { RED, WHITE } from '../../constants/colors';


function Pagination({ pages, page, onChangePage }) {
  let listPages = [];

  let start=1;

  if (pages > MAX_PAGES) {
    if (page > MAX_PAGES/2)
      start = page - Math.floor(MAX_PAGES/2);
    if (pages-page < Math.floor(MAX_PAGES/2))
      start -= Math.floor(MAX_PAGES/2) - pages + page;
  }
  
  for (let i = start; i <= pages; i++) {
    if (i === start + MAX_PAGES) break;

    listPages.push(i);
  }

  /* cambio de la pagina */
  const SetNumberPage = (number) => onChangePage(number);
  const PreviusPage = () => onChangePage(page - 1);
  const NextPage = () => onChangePage(page + 1);

  return (
    <Fragment>
      <Button 
        disabled={page===1 ? true:false}
        onClick={PreviusPage} 
        size="sm"
      >  
        <ChevronLeftIcon/>
      </Button>

      {
        listPages.map(number => {
          if(number === page){
            return (
              <Button 
                onClick={() => SetNumberPage(number)}
                colorScheme="red"
                bgColor={RED} 
                color={WHITE}
                key={number}
                size="sm"
                mx="1"
              >  
                { number }
              </Button>  
            );
          }

          return(
            <Button  
              onClick={()=>SetNumberPage(number)}
              key={number}
              size="sm"
              mx="1"
            >
              { number }
            </Button>
          );
        })
      }

      <Button 
        disabled={page===pages ? true:false}
        onClick={NextPage} 
        size="sm"
      >
        <ChevronRightIcon/>
      </Button>
    </Fragment>
  );
}

export default Pagination;