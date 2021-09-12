// import from react.
import React, { Fragment } from "react";
import PropTypes from "prop-types";

// import from local files.
import Footer from "../../components/WebPages/Footer/Footer";
import Header from "../../components/WebPages/Header/Header";

function PageLayout({ children }) {
	return (
		<Fragment>
			<Header/>
			{children}
			<Footer/>
		</Fragment>
	);
}

PageLayout.propTypes = {
	children: PropTypes.any,
};

PageLayout.propTypes = {
	children: null,
};

export default PageLayout;