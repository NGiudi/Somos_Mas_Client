// import from react.
import React, { Fragment } from 'react';

// import from local files.
import Footer from '../../components/WebPages/Footer/Footer';
import Header from '../../components/WebPages/Header/Header';

function PageLayout(props) {
  return (
    <Fragment>
      <Header/>
      {props.children}
      <Footer/>
    </Fragment>
  )
}

export default PageLayout;