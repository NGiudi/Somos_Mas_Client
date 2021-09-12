// import from react.
import React, { Fragment } from "react";
import PropTypes from "prop-types";

// import fron external libraries.
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

// import constants.
import { MAX_PAGES_PAGINATION } from "../../constants/numbers";
import { RED, WHITE } from "../../constants/colors";

function Pagination({ page, pages, onChangePage }) {
	const centerValue = Math.floor(MAX_PAGES_PAGINATION/2);
	const rightNumbers = pages - page;  
	let  start = 1, listPages = [];
  
	if (pages > MAX_PAGES_PAGINATION) {
		if (page > MAX_PAGES_PAGINATION/2)
			start = page - centerValue;
		if (rightNumbers < centerValue)
			start -= centerValue - rightNumbers;
	}
  
	for (let i = start; i <= pages; i++) {
		if (i === start + MAX_PAGES_PAGINATION) break;

		listPages.push(i);
	}

	/* cambio de la pagina */
	const SetNumberPage = number => onChangePage(number);
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

Pagination.propTypes = {
	page: PropTypes.number.isRequired,
	pages: PropTypes.number.isRequired,
	onChangePage: PropTypes.func
};

Pagination.defaultProps = {
	page: 1,
	pages: 1,
	onChangePage: null
};

export default Pagination;
